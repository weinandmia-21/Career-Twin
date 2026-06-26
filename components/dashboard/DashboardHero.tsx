import HeroContent from "./HeroContent";
import HeroMetrics from "./HeroMetrics";
import AIPresence from "./AIPresence";

export default function DashboardHero() {
  return (
    <section className="relative mb-12 overflow-hidden rounded-[36px] border border-white/5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950">

      {/* Ambient Glow */}
      <div className="absolute right-[-180px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Secondary Glow */}
      <div className="absolute right-24 top-24 h-72 w-72 rounded-full bg-sky-400/5 blur-[100px]" />

      <div className="relative grid min-h-[560px] items-center gap-12 px-16 py-16 lg:grid-cols-[1.2fr_.8fr]">

        {/* Left Column */}
        <div className="flex h-full flex-col justify-center">
          <HeroContent />
          <HeroMetrics />
        </div>

        {/* Right Column */}
        <AIPresence />

      </div>
    </section>
  );
}