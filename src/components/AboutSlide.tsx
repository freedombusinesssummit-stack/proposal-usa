"use client";
import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";

const FEATURES = [
  { icon: "📡", text: "Data-driven virtual summit — real intent signals" },
  { icon: "🌍", text: "100% global distribution and media exposure" },
  { icon: "🎯", text: "Full funnel intent tracking from day one" },
  { icon: "🔒", text: "Exclusivity per category and jurisdiction" },
  { icon: "👔", text: "Decision-maker dominant audience (75% founders/execs)" },
];

const TOPICS = [
  { icon: "🇺🇸", text: "Inbound Mobility to the U.S.: Visas, Capital & Market Access" },
  { icon: "🌍", text: "Second Passports & Residencies for U.S. Citizens" },
  { icon: "🗺️", text: "Health, Security for the New Global Class: a personal safety net for entrepreneurs & families" },
  { icon: "💻", text: "Company Structures in the USA: Tax Optimization & Asset Protection" },
  { icon: "🛸", text: "Legal Tax Optimization for U.S. Citizens" },
  { icon: "🏠", text: "Global Real Estate for U.S. Investors" },
  { icon: "🇪🇺", text: "Where Americans Are Moving and Why: Portugal, Panama, Costa Rica, LATAM, Caribbean" },
];

export default function AboutSlide() {
  return (
    <>
      {/* ABOUT — no stats on right */}
      <section id="about" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">About the Event</span>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-6" style={{ letterSpacing: "-0.5px" }}>
              What is FBS USA Mobility Edition?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="max-w-2xl">
              <p className="text-carbon-600 leading-relaxed mb-4">
                FBS USA Edition is our <strong className="text-carbon-900">2nd event focusing on the American market</strong> — the most commercially valuable region in global mobility, investment migration, company incorporation and offshore strategies.
              </p>
              <p className="text-carbon-600 leading-relaxed mb-6">
                A two-day <strong className="text-carbon-900">global virtual event</strong> focused on US inbound and outbound mobility strategies for founders, investors, and globally mobile individuals.
              </p>
              <div className="card-green inline-block">
                <p className="text-sm font-semibold" style={{ color: "#3d8000" }}>📊 For speakers: full access to audience insights, segmented leads & intent signals</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Why Partner with FBS</span>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-10" style={{ letterSpacing: "-0.5px" }}>What Makes Us Different</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="feature-card h-full">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <p className="font-semibold text-carbon-800 leading-relaxed">{f.text}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={FEATURES.length * 80}>
              <div className="feature-card md:col-span-2 lg:col-span-1 h-full" style={{ background: "#111827", borderLeftColor: "#9ef01a", borderColor: "#111827" }}>
                <div className="text-2xl mb-3">🚀</div>
                <p className="font-black text-lg mb-1" style={{ color: "#9ef01a" }}>8–10 Partner Slots Only</p>
                <p className="text-sm" style={{ color: "#9ca3af" }}>We work with a select group per edition to guarantee real visibility — not a crowded sponsorship list.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Two Directions</span>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Inbound & Outbound US Mobility</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            <AnimatedSection delay={80}>
              <div className="card h-full" style={{ borderTop: "4px solid #9ef01a" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">→</span>
                  <span className="font-black text-xl text-carbon-900">Outbound Mobility</span>
                </div>
                <p className="text-carbon-600 leading-relaxed text-sm mb-4">Americans seeking legitimate ways to reduce their tax exposure, obtain a <strong className="text-carbon-900">Plan B, or renounce citizenship.</strong> Focus on <strong className="text-carbon-900">CBI/RBI Programs (Caribbean), Tax-Advantaged Residency (Portugal, LATAM)</strong></p>
                <div className="flex flex-wrap gap-2">
                  {["Caribbean CBI", "Portugal", "LATAM", "Tax Residency"].map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded-full text-xs font-semibold" style={{ background: "#f3ffe3", color: "#3d8000" }}>{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="card h-full" style={{ borderTop: "4px solid #111827" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">←</span>
                  <span className="font-black text-xl text-carbon-900">Inbound Mobility</span>
                </div>
                <p className="text-carbon-600 leading-relaxed text-sm mb-4">HNWI from <strong className="text-carbon-900">India, China, and Southeast Asia</strong> seeking U.S. residency/visas for capital protection. Focus on <strong className="text-carbon-900">EB-5, E-2 Investment Visas</strong></p>
                <div className="flex flex-wrap gap-2">
                  {["EB-5 Visa", "E-2 Treaty", "India", "SE Asia", "China"].map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded-full text-xs font-semibold bg-carbon-100 text-carbon-600">{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* KEY TOPICS */}
      <section id="topics" className="py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Agenda Themes</span>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Key Topics To Discuss</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TOPICS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="card flex items-start gap-4 hover:shadow-sm transition-shadow">
                  <span className="text-2xl flex-shrink-0">{t.icon}</span>
                  <p className="text-carbon-700 font-medium text-sm leading-relaxed">{t.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS — убрать строку 110880/109906/3381 */}
      <section id="numbers" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Performance Metrics</span>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Freedom Summit in Numbers</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            {[
              { val: 364, suffix: "+", label: "Unique Registrations", green: true },
              { val: 97, suffix: "", label: "Survey Submissions", green: true },
              { val: 152, suffix: "", label: "Live Attendees", green: true },
              { raw: "10.2K", label: "Email List Audience", green: true },
              { raw: "33–52%", label: "Email Open Rate", green: true },
              { val: 452, suffix: "", label: "Engaged Video Views", green: true },
            ].map((n, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="card hover:shadow-sm transition-shadow text-center py-5">
                  <div className="text-2xl font-black tracking-tight mb-1" style={{ color: "#70e000" }}>
                    {n.raw ? n.raw : <CountUp end={n.val!} suffix={n.suffix} />}
                  </div>
                  <p className="text-xs text-carbon-400 font-medium">{n.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { val: "500–700", label: "Expected Attendees" },
                { val: "2 Days", label: "Live Stream" },
                { val: "8", label: "Keynote Talks" },
                { val: "2", label: "Panel Discussions" },
              ].map((item, i) => (
                <div key={i} className="card text-center py-4">
                  <div className="text-2xl font-black tracking-tight mb-1" style={{ color: "#70e000" }}>{item.val}</div>
                  <p className="text-xs text-carbon-400 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
