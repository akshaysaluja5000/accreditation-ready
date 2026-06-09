import { QueryClient, QueryFunction } from "@tanstack/react-query";

function redirectForMfa(json: Record<string, unknown>) {
  if (json.mfaRequired) {
    sessionStorage.setItem("ar_mfa_return_to", window.location.pathname + window.location.search);
    window.location.href = "/mfa-verify";
    return true;
  }
  if (json.mfaSetupRequired) {
    sessionStorage.setItem("ar_mfa_return_to", window.location.pathname + window.location.search);
    window.location.href = "/mfa-setup";
    return true;
  }
  return false;
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    if (res.status === 403) {
      try {
        const json = await res.clone().json();
        if (redirectForMfa(json)) throw new Error(json.message as string);
      } catch (e) {
        if ((e as Error).message?.includes("MFA")) throw e;
      }
    }
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  if (!res.ok && res.status === 403) {
    try {
      const json = await res.clone().json();
      if (redirectForMfa(json)) return res;
    } catch { /* ignore */ }
  }

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (res.status === 403) {
      try {
        const json = await res.clone().json();
        if (redirectForMfa(json)) return null as T;
      } catch { /* ignore */ }
    }

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
