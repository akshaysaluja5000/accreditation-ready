import { AscTestRunner } from "@/components/asc-test-runner";

export default function AscPretestPage() {
  return (
    <AscTestRunner
      apiBase="/api/asc-pretest"
      title="Diagnostic Quiz"
      introTitle="Diagnostic Quiz"
      introBody="A 25-question benchmark across the six published ASC chapters: Patient Rights, Governance, Clinical Records, Infection Prevention, Credentialing, and Quality Management. You will see a chapter-by-chapter breakdown when you finish so you know where to focus your study."
      resultsHeadline="Diagnostic complete"
      testIdPrefix="pretest"
    />
  );
}
