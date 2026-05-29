interface AppLogoMarkProps {
  variant?: "sm" | "lg";
}

export function AppLogoMark({ variant = "sm" }: AppLogoMarkProps) {
  const size = variant === "lg" ? 64 : 34;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      className="text-[hsl(218,68%,32%)] dark:text-white"
    >
      {/* Circle arc with ~60° gap at 1 o'clock position
          Center (22,22) radius 18 - arc from 2 o'clock clockwise to 12 o'clock */}
      <path
        d="M 37.6 13 A 18 18 0 1 1 22 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* AR monogram */}
      <text
        x="22"
        y="25"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Arial Black', 'Arial', 'Helvetica', sans-serif"
        fontWeight="900"
        fontSize="17"
        fill="currentColor"
        letterSpacing="-1"
      >AR</text>
    </svg>
  );
}
