import { requireUser } from "@/lib/auth/requireUser";
import { loadProfile } from "@/lib/career/loadProfile";

import ProfileProvider from "@/components/providers/ProfileProvider";
import { getDashboardData } from "@/lib/dashboard/dashboardService";
import CareerDNA from "@/components/dashboard/CareerDNA";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHero from "@/components/dashboard/DashboardHero";
import AIBriefing from "@/components/dashboard/AIBriefing";
import MissionControlServer from "@/components/dashboard/MissionControlServer";
import StatCard from "@/components/dashboard/StatCard";

import { dashboard } from "@/data/dashboard";

import {
  Trophy,
  FileText,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";

const icons = [
  Trophy,
  FileText,
  CalendarCheck,
  MessageSquare,
];

export default async function DashboardPage() {
  await requireUser();

  const profile = await loadProfile();

const dashboardData = await getDashboardData();

  return (
    <>
      <ProfileProvider profile={profile} />

      <DashboardLayout>
        <DashboardHero />

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardData.stats.map((stat, index) => {
            const Icon = icons[index];

            return (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                subtitle={stat.subtitle}
                icon={Icon}
              />
            );
          })}
        </div>

        <AIBriefing />

        <CareerDNA />

        <MissionControlServer />

        <div className="mt-10" />
      </DashboardLayout>
    </>
  );
}