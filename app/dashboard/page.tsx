import DashboardLayout from "@/components/layout/DashboardLayout";

import DashboardHero from "@/components/dashboard/DashboardHero";
import AIBriefing from "@/components/dashboard/AIBriefing";
import MissionControl from "@/components/dashboard/MissionControl";
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

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHero />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {dashboard.stats.map((stat, index) => {
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

      <MissionControl />

      <div className="mt-10" />
    </DashboardLayout>
  );
}