import * as React from "react";

import { cn } from "@/lib/utils";

type DashboardGridProps = React.ComponentProps<"div">;

type DashboardGridSlotProps = React.ComponentProps<"div">;

function DashboardGrid({ className, children, ...props }: DashboardGridProps) {
  return (
    <div
      data-slot="dashboard-grid"
      className={cn(
        "grid gap-6",
        "grid-cols-1 lg:grid-cols-[minmax(0,65fr)_minmax(0,35fr)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CareerBriefing({
  className,
  children,
  ...props
}: DashboardGridSlotProps) {
  return (
    <div
      data-slot="dashboard-grid-career-briefing"
      className={cn("min-w-0 lg:col-start-1 lg:row-start-1", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function TodaysMission({
  className,
  children,
  ...props
}: DashboardGridSlotProps) {
  return (
    <div
      data-slot="dashboard-grid-todays-mission"
      className={cn("min-w-0 lg:col-start-1 lg:row-start-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function BackgroundTasks({
  className,
  children,
  ...props
}: DashboardGridSlotProps) {
  return (
    <div
      data-slot="dashboard-grid-background-tasks"
      className={cn("min-w-0 lg:col-start-2 lg:row-start-1", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function AIStatus({ className, children, ...props }: DashboardGridSlotProps) {
  return (
    <div
      data-slot="dashboard-grid-ai-status"
      className={cn("min-w-0 lg:col-start-2 lg:row-start-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

DashboardGrid.CareerBriefing = CareerBriefing;
DashboardGrid.TodaysMission = TodaysMission;
DashboardGrid.BackgroundTasks = BackgroundTasks;
DashboardGrid.AIStatus = AIStatus;

export {
  DashboardGrid,
  CareerBriefing,
  TodaysMission,
  BackgroundTasks,
  AIStatus,
};
