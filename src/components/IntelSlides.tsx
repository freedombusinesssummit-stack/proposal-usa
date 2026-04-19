"use client";
import AnimatedSection from "./AnimatedSection";

export default function IntelSlides() {
  return (
    <>
      <section id="intel" className="py-14 border-b border-gray-100 bg-gray-50">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Intelligence Data Layer</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Every Event is a Data Funnel</h2>
            <p className="text-gray-500 mb-8 max-w-xl">FBS is built as a data funnel to create an Intelligence Audience Layer — aggregating insights on prospect behavior, jurisdiction interest, and mobility intent.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={80}>
              <div className="space-y-3">
                {[
                  { num: "01", text: "How people relocate, invest, incorporate, and diversify globally" },
                  { num: "02", text: "What jurisdictions they're comparing and why" },
                  { num: "03", text: "Which services, regions, and programs they're actively considering" },
                  { num: "04", text: "Timing, intent profile, and mobility index score" },
                ].map((p, i) => (
                  <div key={i} className="card flex items-start gap-4">
                    <span className="text-2xl font-black text-gray-200 flex-shrink-0 leading-none">{p.num}</span>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={160}>
              <div className="space-y-4">
                <div className="card">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Mobility Score Index</p>
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { tier: "HOT", color: "#70e000", bg: "#f0fdf4", border: "#bbf7d0" },
                      { tier: "WARM", color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
                      { tier: "COLD", color: "#9ca3af", bg: "#f9fafb", border: "#e5e7eb" },
                    ].map((t, i) => (
                      <div key={i} className="text-center py-2.5 rounded-xl border" style={{ background: t.bg, borderColor: t.border }}>
                        <div className="text-sm font-black" style={{ color: t.color }}>{t.tier}</div>
                        <div className="text-xs text-gray-400 mt-0.5">Lead</div>
                      </div>
                    ))}
                  </div>
                  {[
                    { label: "Jurisdiction Interest", score: 85 },
                    { label: "Budget Qualifier", score: 72 },
                    { label: "Timeline — 0–6 months", score: 60 },
                    { label: "Current Advisor Status", score: 45 },
                  ].map((item, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-bold text-lime-400">{item.score}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${item.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-muted">
                  <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-2">Custom Question Block</p>
                  <p className="text-sm text-gray-600 mb-3">Your tailored questions inside our survey funnel collect exactly the data you want.</p>
                  {["Pain points", "Budget qualifier", "Timeline", "Region of interest"].map((q, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-500 mb-1.5">
                      <span className="font-bold text-lime-400">{i + 1}.</span> {q}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FUNNEL */}
      <section id="funnel" className="py-14 border-b border-gray-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Index Score Funnel</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>A Purpose-Built Lead Machine</h2>
            <p className="text-gray-500 mb-8">Targeted ads → website signup → data-rich survey → segmented follow-ups turns traffic into a qualified, opt-in lead list</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { step: "01", title: "Traffic", icon: "📡", items: ["Targeted Video Ads", "Specific Geo Targeting", "Interest & Age Filters", "110K+ Unique Reach"], accent: true },
              { step: "02", title: "FBS Website", icon: "🌐", items: ["Event Landing Page", "Early Bird Registration", "Speaker Lineup", "Countdown Timer"], accent: false },
              { step: "03", title: "Survey Funnel", icon: "📊", items: ["Welcome Emails", "Mobility Score Index", "Participant Playbook", "Intent Data Collection"], accent: false },
              { step: "04", title: "Audience Insights", icon: "🎯", items: ["Geo + Demographics", "Interest Segments", "Qualified Lead Lists", "Partner Data Export"], accent: true },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className={`h-full rounded-xl p-5 border ${s.accent ? "card-green" : "card"}`}>
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-1">Step {s.step}</p>
                  <p className="font-bold text-gray-900 mb-3">{s.title}</p>
                  <div className="space-y-1.5">
                    {s.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-1.5 text-xs text-gray-500">
                        <span className="text-green-500 font-bold">→</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { phase: "Pre Event", color: "#70e000", bg: "#f0fdf4", border: "#bbf7d0", items: ["Geo-targeted video ads", "Press release metrics & reach", "Registration via UTM tracking", "CTR to landing page"] },
                { phase: "Event Day", color: "#d97706", bg: "#fffbeb", border: "#fde68a", items: ["Keynote or Panel Talk", "Partner logo in live-stream", "Free lead offer (ebook/consult)", "Social mentions via hashtag"] },
                { phase: "Post Event", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe", items: ["Full attendee survey", "Behavior & interest data", "Dedicated email broadcast", "Qualified lead count + CTR"] },
              ].map((phase, i) => (
                <div key={i} className="rounded-xl p-5 border" style={{ background: phase.bg, borderColor: phase.border }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: phase.color }}>{phase.phase}</p>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span style={{ color: phase.color }}>•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
