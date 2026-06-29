import { requireUser } from "@/lib/auth/requireUser";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default async function Page() {
  await requireUser();
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold capitalize">insights</h1>
    </DashboardLayout>
  );
}
