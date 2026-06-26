import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { careerTwin } from "@/data/careerTwin";

export default function ProfessionalSummary() {
  return (
    <Card>
      <SectionTitle>Professional Summary</SectionTitle>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        {careerTwin.summary}
      </p>
    </Card>
  );
}