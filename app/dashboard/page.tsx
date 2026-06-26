import DashboardLayout from "@/components/layout/DashboardLayout";

import BriefingHeader from "@/components/briefing/BriefingHeader";
import AIBriefing from "@/components/dashboard/AIBriefing";
import RecommendationCard from "@/components/briefing/RecommendationCard";
import ActivityFeed from "@/components/briefing/ActivityFeed";

import StatCard from "@/components/dashboard/StatCard";
import {
  Trophy,
  FileText,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <BriefingHeader />

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
  <StatCard
    title="Career Score"
    value="94"
    subtitle="+2 this week"
    icon={Trophy}
  />

  <StatCard
    title="Applications"
    value="12"
    subtitle="3 awaiting response"
    icon={FileText}
  />

  <StatCard
    title="Interviews"
    value="3"
    subtitle="1 this week"
    icon={CalendarCheck}
  />

  <StatCard
    title="Responses"
    value="4"
    subtitle="2 recruiters"
    icon={MessageSquare}
  />
</div>

      <AIBriefing />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <RecommendationCard />
        <ActivityFeed />
      </div>
    </DashboardLayout>
  );
}
