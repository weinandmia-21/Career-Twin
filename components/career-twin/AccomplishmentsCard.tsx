import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { careerTwin } from "@/data/careerTwin";

export default function AccomplishmentsCard() {
  return (
    <Card>
      <SectionTitle>Recent Accomplishments</SectionTitle>

      <ul className="mt-6 space-y-3 text-slate-300">
        {careerTwin.accomplishments.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </Card>
  );
}