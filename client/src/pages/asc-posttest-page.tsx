import { AscTestRunner } from "@/components/asc-test-runner";

export default function AscPosttestPage() {
  return (
    <AscTestRunner
      apiBase="/api/asc-posttest"
      title="Final Assessment"
      introTitle="Final Assessment"
      introBody="A 25-question check across all six published ASC chapters with brand-new scenarios - none repeat from the Diagnostic Quiz. Compare your chapter-level scores to your Diagnostic to see exactly where you've grown."
      resultsHeadline="Final Assessment complete"
      testIdPrefix="posttest"
    />
  );
}
