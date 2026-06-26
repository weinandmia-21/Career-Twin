"use client";

const tabs = [
  "Overview",
  "Experience",
  "Skills",
  "Projects",
  "Documents",
  "AI Memory",
];

export default function ProfileTabs() {
  return (
    <div className="mt-8 border-b border-cyan-500/20">
      <nav className="flex gap-8 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`pb-4 text-sm font-medium transition ${
              index === 0
                ? "border-b-2 border-cyan-400 text-cyan-300"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}