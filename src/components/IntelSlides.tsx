"use client";
import AnimatedSection from "./AnimatedSection";

export default function IntelSlides() {
  return (
    <>
      {/* INTELLIGENCE DATA LAYER */}
      <section
        id="intel"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(173,255,47,0.04) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Intelligence Data Layer
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 07</span>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection animation="fade-up" delay={100}>
                <h2 className="font-black tracking-tighter mb-8" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
                  Every Event is a{" "}
                  <span style={{ color: "#ADFF2F" }}>Data Funnel</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div
                  className="p-6 rounded-2xl mb-8"
                  style={{ background: "rgba(173,255,47,0.06)", border: "1px solid rgba(173,255,47,0.2)" }}
                >
                  <p className="text-base leading-relaxed font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Freedom Business Summit is a <strong className="text-white">virtual event built as a data funnel</strong> to create an{" "}
                    <strong style={{ color: "#ADFF2F" }}>Intelligence Audience Layer</strong> that aggregates insights on prospect behavior, jurisdiction interest, and mobility intent.
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-4">
                {[
                  { num: "01", text: "How people relocate, invest, incorporate, and diversify globally" },
                  { num: "02", text: "What jurisdictions they're comparing and why" },
                  { num: "03", text: "Which services, regions, and programs they're actively considering" },
                  { num: "04", text: "Timing, intent profile, and mobility index score" },
                ].map((p, i) => (
                  <AnimatedSection key={i} animation="slide-left" delay={300 + i * 100}>
                    <div
                      className="flex items-start gap-5 p-5 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <span className="font-black text-2xl leading-none" style={{ color: "rgba(173,255,47,0.3)" }}>{p.num}</span>
                      <p className="text-sm font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{p.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Visual representation */}
            <AnimatedSection animation="scale-in" delay={300}>
              <div className="space-y-4">
                {/* Mobility Score card */}
                <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Mobility Score Index</p>
                  <div className="grid grid-cols-3 gap-3">
                    {["HOT", "WARM", "COLD"].map((tier, i) => (
                      <div key={i} className="text-center p-3 rounded-xl" style={{
                        background: i === 0 ? "rgba(173,255,47,0.15)" : i === 1 ? "rgba(255,200,0,0.08)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${i === 0 ? "rgba(173,255,47,0.3)" : i === 1 ? "rgba(255,200,0,0.2)" : "rgba(255,255,255,0.06)"}`,
                      }}>
                        <div className="font-black text-lg" style={{ color: i === 0 ? "#ADFF2F" : i === 1 ? "#FFC800" : "rgba(255,255,255,0.4)" }}>{tier}</div>
                        <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>Lead</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { label: "Jurisdiction Interest", score: 85 },
                      { label: "Budget Qualifier", score: 72 },
                      { label: "Timeline — 0–6 months", score: 60 },
                      { label: "Current Advisor Status", score: 45 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span style={{ color: "rgba(255,255,255,0.4)" }}>{item.label}</span>
                          <span style={{ color: "#ADFF2F" }}>{item.score}%</span>
                        </div>
                        <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                          <div className="h-full rounded-full" style={{ width: `${item.score}%`, background: "#ADFF2F" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Q block */}
                <div className="rounded-2xl p-6" style={{ background: "rgba(173,255,47,0.06)", border: "1px solid rgba(173,255,47,0.15)" }}>
                  <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "#ADFF2F" }}>Custom Question Block</p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Your tailored questions inside our survey funnel collect exactly the data you want: pain points, budget, timing, region of interest.
                  </p>
                  <div className="mt-4 space-y-2">
                    {["Pain points", "Budget qualifier", "Timeline", "Region of interest"].map((q, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                        <span className="font-black" style={{ color: "#ADFF2F" }}>{i + 1}.</span> {q}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FUNNEL */}
      <section
        id="funnel"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#0d0d0d" }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #ADFF2F, transparent)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Index Score Funnel
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 08</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="font-black tracking-tighter mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              A Purpose-Built Lead Machine
            </h2>
            <p className="text-base mb-12" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "600px" }}>
              Targeted ads → website signup → data-rich survey → segmented follow-ups turns traffic into a qualified, opt-in lead list
            </p>
          </AnimatedSection>

          {/* Funnel steps */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {[
              {
                step: "01", title: "Traffic", icon: "📡",
                items: ["Targeted Video Ads", "Specific Geo Targeting", "Interest & Age Filters", "110K+ Unique Reach"],
                color: "rgba(173,255,47,0.08)",
                border: "rgba(173,255,47,0.2)",
              },
              {
                step: "02", title: "FBS Website", icon: "🌐",
                items: ["Event Landing Page", "Early Bird Registration", "Speaker Lineup", "Countdown Timer"],
                color: "rgba(255,255,255,0.03)",
                border: "rgba(255,255,255,0.08)",
              },
              {
                step: "03", title: "Survey Funnel", icon: "📊",
                items: ["Welcome Emails", "Mobility Score Index", "Participant Playbook", "Intent Data Collection"],
                color: "rgba(255,255,255,0.03)",
                border: "rgba(255,255,255,0.08)",
              },
              {
                step: "04", title: "Audience Insights", icon: "🎯",
                items: ["Geo + Demographics", "Interest Segments", "Qualified Lead Lists", "Partner Data Export"],
                color: "rgba(173,255,47,0.08)",
                border: "rgba(173,255,47,0.2)",
              },
            ].map((s, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 120}>
                <div
                  className="rounded-2xl p-6 h-full relative"
                  style={{ background: s.color, border: `1px solid ${s.border}` }}
                >
                  {/* Arrow connector */}
                  {i < 3 && (
                    <div
                      className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center w-6 h-6 rounded-full font-black text-xs"
                      style={{ background: "#ADFF2F", color: "#0A0A0A" }}
                    >
                      →
                    </div>
                  )}
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#ADFF2F" }}>Step {s.step}</div>
                  <div className="font-black text-lg text-white mb-4">{s.title}</div>
                  <div className="space-y-2">
                    {s.items.map((item, j) => (
                      <div key={j} className="text-xs flex items-start gap-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                        <span style={{ color: "#ADFF2F" }}>→</span> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Engagement timeline */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {[
                { phase: "Pre Event", color: "#ADFF2F", items: ["Geo-targeted video ads", "Press release metrics & reach", "Registration via UTM tracking", "CTR to landing page"] },
                { phase: "Event Day", color: "#FFC800", items: ["Keynote or Panel Talk", "Partner logo in live-stream", "Free lead offer (ebook/consult)", "Social mentions via hashtag"] },
                { phase: "Post Event", color: "#60A5FA", items: ["Full attendee survey", "Behavior & interest data", "Dedicated email broadcast", "Qualified lead count + CTR"] },
              ].map((phase, i) => (
                <div key={i} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div
                    className="text-xs font-black uppercase tracking-widest mb-4 px-3 py-1.5 rounded-lg inline-block"
                    style={{ background: `${phase.color}20`, color: phase.color, border: `1px solid ${phase.color}40` }}
                  >
                    {phase.phase}
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-xs flex items-start gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
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
