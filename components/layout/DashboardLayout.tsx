import Sidebar from "./Sidebar";
import BriefingHeader from "@/components/briefing/BriefingHeader";
import DailySummary from "@/components/briefing/DailySummary";
import RecommendationCard from "@/components/briefing/RecommendationCard";
import ActivityFeed from "@/components/briefing/ActivityFeed";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 p-10">

  <BriefingHeader />

  <DailySummary />

  <div className="mt-8 grid gap-8 lg:grid-cols-2">

    <RecommendationCard />

    <ActivityFeed />

  </div>

</main>
    </div>
  );
}