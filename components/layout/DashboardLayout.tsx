import ActivityFeed from "@/components/briefing/ActivityFeed";
import BriefingHeader from "@/components/briefing/BriefingHeader";
import DailySummary from "@/components/briefing/DailySummary";
import RecommendationCard from "@/components/briefing/RecommendationCard";
import AIStatus from "@/components/dashboard/AIStatus";
import { DashboardGrid } from "@/components/dashboard/DashboardGrid";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 p-10">
        <DashboardGrid>
          <DashboardGrid.CareerBriefing>
            <BriefingHeader />
            <div className="mt-8">
              <DailySummary />
            </div>
          </DashboardGrid.CareerBriefing>

          <DashboardGrid.TodaysMission>
            <RecommendationCard />
          </DashboardGrid.TodaysMission>

          <DashboardGrid.BackgroundTasks>
            <ActivityFeed />
          </DashboardGrid.BackgroundTasks>

          <DashboardGrid.AIStatus>
            <AIStatus />
          </DashboardGrid.AIStatus>
        </DashboardGrid>
      </main>
    </div>
  );
}
