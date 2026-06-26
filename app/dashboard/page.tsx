import DashboardLayout from "@/components/layout/DashboardLayout";

import BriefingHeader from "@/components/briefing/BriefingHeader";
import AIBriefing from "@/components/dashboard/AIBriefing";
import RecommendationCard from "@/components/briefing/RecommendationCard";
import ActivityFeed from "@/components/briefing/ActivityFeed";

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
      <BriefingHeader />

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

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <RecommendationCard />
        <ActivityFeed />
      </div>
    </DashboardLayout>
  );
}