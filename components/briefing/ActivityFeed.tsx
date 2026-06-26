const activity = [
  {
    time: "8:42 PM",
    action: "Resume optimized for Stripe",
  },
  {
    time: "8:31 PM",
    action: "31 opportunities analyzed",
  },
  {
    time: "8:20 PM",
    action: "Cover letter generated",
  },
  {
    time: "8:10 PM",
    action: "Interview briefing prepared",
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8">
      <h2 className="text-xl font-semibold text-white">
        AI Activity
      </h2>

      <div className="mt-6 space-y-5">
        {activity.map((item) => (
          <div key={item.time}>
            <p className="text-xs uppercase tracking-wide text-cyan-400">
              {item.time}
            </p>

            <p className="mt-1 text-slate-300">
              {item.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}