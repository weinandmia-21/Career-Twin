import DashboardLayout from "@/components/layout/DashboardLayout";

import ProfileOverview from "@/components/career-twin/ProfileOverview";
import ProfessionalSummary from "@/components/career-twin/ProfessionalSummary";
import StrengthsCard from "@/components/career-twin/StrengthsCard";
import GoalsCard from "@/components/career-twin/GoalsCard";
import AccomplishmentsCard from "@/components/career-twin/AccomplishmentsCard";

export default function CareerTwinPage() {
  return (
    <DashboardLayout>
      <ProfileOverview />

      <div className="mt-8">
        <ProfessionalSummary />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <StrengthsCard />
        <GoalsCard />
      </div>

      <div className="mt-8">
        <AccomplishmentsCard />
      </div>
    </DashboardLayout>
  );
}