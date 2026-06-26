import { Bell, CalendarDays, Search } from "lucide-react";

export default function TopBar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[#0B1120]/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-10 py-4">
        {/* Left */}

        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Career Twin
          </h2>

          <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
            <CalendarDays className="h-4 w-4" />

            <span>{today}</span>

            <span className="text-slate-600">•</span>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />

              <span>
                AI monitoring{" "}
                <span className="font-medium text-slate-200">
                  31 opportunities
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white">
            <Search className="h-5 w-5" />
          </button>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white">
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-cyan-400" />
          </button>

          <button className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-3 py-2 transition hover:bg-white/10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 font-semibold text-slate-950">
              M
            </div>

            <div className="hidden text-left lg:block">
              <p className="text-sm font-medium text-white">
                Mia Weinand
              </p>

              <p className="text-xs text-slate-500">
                Premium
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}