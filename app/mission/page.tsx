import { requireUser } from "@/lib/auth/requireUser";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MissionAnalysis from "@/components/ai/MissionAnalysis";

export default async function MissionPage() {
  await requireUser();
  return (
    <DashboardLayout>
      <MissionAnalysis />
    </DashboardLayout>
  );
}