import { AscTestRunner } from "@/components/asc-test-runner";

export default function DnvPretestPage() {
  return (
    <AscTestRunner
      apiBase="/api/dnv-pretest"
      title="Diagnostic Quiz"
      introTitle="Diagnostic Quiz"
      introBody="A 25-question benchmark across all 11 DNV NIAHO chapters: Quality Management, Governance, Medical Staff, Nursing, Medication Management, Surgical & Anesthesia, Patient Care, Emergency Services, Patient Rights, Infection Control, and Physical Environment. You'll see a chapter-by-chapter breakdown when you finish so you know where to focus your study."
      resultsHeadline="Diagnostic complete"
      testIdPrefix="dnv-pretest"
    />
  );
}
