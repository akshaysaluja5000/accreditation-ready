import { AscTestRunner } from "@/components/asc-test-runner";

export default function DnvPosttestPage() {
  return (
    <AscTestRunner
      apiBase="/api/dnv-posttest"
      title="Final Assessment"
      introTitle="Final Assessment"
      introBody="A 25-question check across all 11 DNV NIAHO chapters with brand-new scenarios. None repeat from the Diagnostic Quiz. Compare your chapter-level scores to your Diagnostic to see exactly where you have grown."
      resultsHeadline="Final Assessment complete"
      testIdPrefix="dnv-posttest"
    />
  );
}
