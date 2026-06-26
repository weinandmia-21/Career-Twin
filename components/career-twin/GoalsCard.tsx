import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { careerTwin } from "@/data/careerTwin";

export default function GoalsCard() {
  return (
    <Card>
      <SectionTitle>Career Goals</SectionTitle>

      <ul className="mt-6 space-y-3 text-slate-300">
        {careerTwin.goals.map((goal) => (
          <li key={goal}>• {goal}</li>
        ))}
      </ul>
    </Card>
  );
}