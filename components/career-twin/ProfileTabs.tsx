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
    <div className="mt-8">
      <nav className="flex gap-2 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`
              rounded-full
              px-5
              py-2
              text-sm
              transition-all
              ${
                index === 0
                  ? "bg-blue-500 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}