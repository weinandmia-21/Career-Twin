export default function TopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-cyan-500/20 bg-slate-950 px-8">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Mission Control
        </h2>
        <p className="text-sm text-slate-400">
          Your AI-powered career briefing
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg border border-cyan-500/20 bg-slate-900 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800">
          Notifications
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-semibold text-slate-950">
          M
        </div>
      </div>
    </header>
  );
}
