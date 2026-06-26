import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { careerTwin } from "@/data/careerTwin";

export default function StrengthsCard() {
  return (
    <Card>
      <SectionTitle>Core Strengths</SectionTitle>

      <div className="mt-6 flex flex-wrap gap-3">
        {careerTwin.strengths.map((strength) => (
          <span
            key={strength}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            {strength}
          </span>
        ))}
      </div>
    </Card>
  );
}