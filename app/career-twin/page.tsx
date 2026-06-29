import { requireUser } from "@/lib/auth/requireUser";
import DashboardLayout from "@/components/layout/DashboardLayout";

import ProfileOverview from "@/components/career-twin/ProfileOverview";
import ProfileTabs from "@/components/career-twin/ProfileTabs";
import ProfessionalSummary from "@/components/career-twin/ProfessionalSummary";
import StrengthsCard from "@/components/career-twin/StrengthsCard";
import GoalsCard from "@/components/career-twin/GoalsCard";
import AccomplishmentsCard from "@/components/career-twin/AccomplishmentsCard";

export default async function CareerTwinPage() {
  await requireUser();
  return (
    <DashboardLayout>
      <ProfileOverview />

      <ProfileTabs />

      <section className="mt-8">
        <ProfessionalSummary />
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        <StrengthsCard />
        <GoalsCard />
      </section>

      <section className="mt-8">
        <AccomplishmentsCard />
      </section>
    </DashboardLayout>
  );
}