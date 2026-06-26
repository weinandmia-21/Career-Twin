import DashboardLayout from "@/components/layout/DashboardLayout";

import BriefingHeader from "@/components/briefing/BriefingHeader";
import DailySummary from "@/components/briefing/DailySummary";
import RecommendationCard from "@/components/briefing/RecommendationCard";
import ActivityFeed from "@/components/briefing/ActivityFeed";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <BriefingHeader />

      <DailySummary />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <RecommendationCard />
        <ActivityFeed />
      </div>
    </DashboardLayout>
  );
}