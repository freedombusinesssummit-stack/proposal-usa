"use client";
import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";

export default function AboutSlide() {
  return (
    <>
      {/* ABOUT */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#0d0d0d" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(173,255,47,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          {/* Section label */}
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span
                className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                style={{ background: "#ADFF2F", color: "#0A0A0A" }}
              >
                What is About
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 02</span>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection animation="fade-up" delay={100}>
                <h2
                  className="font-black tracking-tighter leading-none mb-8"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                >
                  The World's Most
                  <br />
                  <span style={{ color: "#ADFF2F" }}>Valuable Market</span>
                  <br />
                  for Global Mobility
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={200}>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Freedom Business Summit USA Edition is our{" "}
                    <strong className="text-white font-bold">2nd event focusing on American market</strong> — the most
                    predictable, scalable, and commercially valuable region in{" "}
                    <strong className="text-white">global mobility, investment migration, company incorporation and offshore strategies.</strong>
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                    A two-day <strong className="text-white">global virtual event</strong> focused on US inbound and
                    outbound mobility strategies for founders, investors, and{" "}
                    <strong className="text-white">globally mobile individuals.</strong>
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div
                  className="mt-8 p-5 rounded-xl font-bold text-sm"
                  style={{ background: "rgba(173,255,47,0.08)", border: "1px solid rgba(173,255,47,0.2)", color: "#ADFF2F" }}
                >
                  📊 For speakers: full access to audience insights, segmented leads & intent signals
                </div>
              </AnimatedSection>
            </div>

            {/* Two Directions */}
            <div className="space-y-4">
              <AnimatedSection animation="slide-right" delay={200}>
                <div
                  className="rounded-2xl p-7"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-2xl mb-3">→ Outbound Mobility</div>
                  <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.7" }}>
                    Americans seeking legitimate ways to reduce tax exposure, obtain a{" "}
                    <strong className="text-white">Plan B, or renounce citizenship.</strong> Focus on{" "}
                    <strong className="text-white">CBI/RBI Programs (Caribbean), Tax-Advantaged Residency (Portugal, LATAM)</strong>
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={350}>
                <div
                  className="rounded-2xl p-7"
                  style={{ background: "rgba(173,255,47,0.06)", border: "1px solid rgba(173,255,47,0.2)" }}
                >
                  <div className="text-2xl mb-3" style={{ color: "#ADFF2F" }}>← Inbound Mobility</div>
                  <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.7" }}>
                    HNWI from <strong className="text-white">India, China, and Southeast Asia</strong> seeking U.S.
                    residency/visas for capital protection. Focus on{" "}
                    <strong className="text-white">EB-5, E-2 Investment Visas</strong>
                  </p>
                </div>
              </AnimatedSection>

              {/* Topics preview */}
              <AnimatedSection animation="slide-right" delay={500}>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Key Topics
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "🇺🇸 US Visas & Market Access",
                      "🌍 Second Passports & CBI",
                      "🏢 Company Structures & Tax",
                      "🏠 Global Real Estate",
                      "✈️ Legal Tax Optimization",
                      "📍 Where Americans Move",
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="text-xs font-medium py-2 px-3 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.6)" }}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section
        id="numbers"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(173,255,47,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span
                className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
                style={{ background: "#ADFF2F", color: "#0A0A0A" }}
              >
                In Numbers
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 03</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2
              className="font-black tracking-tighter mb-16"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Freedom Summit in Numbers
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { val: 364, suffix: "+", label: "Unique Registrations", color: "#ADFF2F" },
              { val: 97, suffix: "", label: "Survey Submissions", color: "#ADFF2F" },
              { val: 152, suffix: "", label: "Live Attendees", color: "#ADFF2F" },
              { val: 110880, suffix: "", label: "Paid Ads Reach (unique)", color: "#fff" },
              { val: 109906, suffix: "", label: "Unique Impressions", color: "#fff" },
              { val: 3381, suffix: "", label: "Unique Clicks", color: "#fff" },
              { val: 10, suffix: ".2K", label: "Email List Audience", color: "#ADFF2F" },
              { raw: "33–52%", label: "Email Open Rate", color: "#ADFF2F" },
              { val: 452, suffix: "", label: "Engaged Video Views", color: "#ADFF2F" },
            ].map((n, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 80}>
                <div
                  className="rounded-2xl p-7 h-full relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: "radial-gradient(ellipse at top left, rgba(173,255,47,0.06), transparent)" }}
                  />
                  <div
                    className="font-black tracking-tighter leading-none mb-3 relative"
                    style={{ fontSize: "clamp(32px, 4vw, 48px)", color: n.color }}
                  >
                    {n.raw ? n.raw : <CountUp end={n.val!} suffix={n.suffix} />}
                  </div>
                  <p className="text-sm font-medium relative" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {n.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* What to expect */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div
              className="mt-8 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
              style={{ background: "rgba(173,255,47,0.05)", border: "1px solid rgba(173,255,47,0.15)" }}
            >
              {[
                { val: "500–700", label: "Expected Attendees" },
                { val: "2", label: "Days Live Stream" },
                { val: "8", label: "Keynote Talks" },
                { val: "2", label: "Panel Discussions" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div
                    className="font-black tracking-tighter"
                    style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#ADFF2F" }}
                  >
                    {item.val}
                  </div>
                  <div className="text-xs font-semibold mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
