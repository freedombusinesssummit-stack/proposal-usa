"use client";
import AnimatedSection from "./AnimatedSection";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Badge } from "@/components/ui/badge";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const FEATURES = [
  { icon: "📡", title: "Real Intent Signals", text: "Data-driven virtual summit capturing real mobility intent — not vanity traffic." },
  { icon: "🌍", title: "Global Exposure", text: "100% global distribution and media exposure across 30+ countries." },
  { icon: "🎯", title: "Full Funnel Tracking", text: "Intent tracking from day one — survey, session, and post-event behavior." },
  { icon: "🔒", title: "Category Exclusivity", text: "Exclusive positioning per category and jurisdiction. No direct competitors." },
  { icon: "👔", title: "Decision-Maker Audience", text: "75% founders/execs with direct budget authority. Not gatekept by assistants." },
];

const TOPICS = [
  { icon: "🇺🇸", text: "Inbound Mobility to the U.S.: Visas, Capital & Market Access — How founders and investors enter the US, from EB-5 and E-2 to structuring market access and deploying capital efficiently." },
  { icon: "🌍", text: "Second Passports & Residencies for U.S. Citizens — Building a Plan B through CBI/RBI programs and strategic residency options beyond the US." },
  { icon: "🗺️", text: "Health, Security & Mobility: Building a Personal Safety Net — How globally mobile individuals protect their families, assets, and lifestyle across jurisdictions." },
  { icon: "💻", text: "U.S. Company Structures: Tax Optimization & Asset Protection — How to structure entities in the US for efficiency, scalability, and cross-border operations." },
  { icon: "🛸", text: "Legal Tax Optimization for U.S. Citizens — What actually works (and what doesn't) when reducing tax exposure as a US person." },
  { icon: "🏠", text: "Global Real Estate for U.S. Investors — Using property as a tool for residency, diversification, and capital preservation." },
  { icon: "🇪🇺", text: "Where Americans Are Moving and Why — European residency, LATAM, and Caribbean jurisdictions: what's driving the shift and where opportunities are." },
  { icon: "🌐", text: "Cross-Border Structuring: Combining Residency, Tax & Business — How to align citizenship, company structure, and tax strategy into one coherent global setup." },
];

const STATS = [
  { val: 364, suffix: "+", label: "Unique Registrations" },
  { val: 97, suffix: "", label: "Survey Submissions" },
  { val: 152, suffix: "", label: "Live Attendees" },
  { raw: "10.2K", label: "Email List Audience" },
  { raw: "33–52%", label: "Email Open Rate" },
  { val: 452, suffix: "", label: "Engaged Video Views" },
];

export default function AboutSlide() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">About the Event</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-6" style={{ letterSpacing: "-0.5px" }}>
              What is FBS USA Mobility Edition?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="max-w-2xl space-y-4">
              <p className="text-carbon-600 leading-relaxed">
                <strong className="text-carbon-900">FBS USA Mobility Edition is a market access platform focused on the most valuable segment in global mobility — the United States.</strong>
              </p>
              <p className="text-carbon-600 leading-relaxed">
                This is not an "event" in the traditional sense. It's a curated environment where demand meets execution.
              </p>
              <p className="text-carbon-600 leading-relaxed">
                A two-day virtual summit bringing together founders, investors, and globally mobile individuals actively exploring US entry or restructuring beyond it.
              </p>
              {/* For speakers — white bg, no green */}
              <div className="inline-flex items-start gap-3 rounded-xl px-4 py-3 border border-carbon-200 bg-white">
                <p className="text-sm font-semibold text-carbon-700">📊 For speakers: full access to audience insights, segmented leads & intent signals</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES — white/grey bg, строже */}
      <section id="features" className="py-14 border-b border-carbon-100 bg-carbon-50">
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="outline" className="mb-3">Why Partner with FBS</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-10" style={{ letterSpacing: "-0.5px" }}>What Makes Us Different</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="bg-white rounded-xl border border-carbon-200 border-l-4 p-5 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 group" style={{ borderLeftColor: "#9ef01a" }}>
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
                  <p className="font-bold text-carbon-900 mb-1.5 text-sm">{f.title}</p>
                  <p className="text-sm text-carbon-500 leading-relaxed">{f.text}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={FEATURES.length * 70}>
              <div className="rounded-xl p-5 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ background: "#111827", borderLeft: "4px solid #9ef01a" }}>
                <div className="text-2xl mb-3">🚀</div>
                <p className="font-black text-base mb-1.5"><AnimatedGradientText>8–10 Partner Slots Only</AnimatedGradientText></p>
                <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>We work with a select group per edition to guarantee real visibility — not a crowded sponsorship list.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DIRECTIONS — updated text */}
      <section id="directions" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Two Directions</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Inbound & Outbound US Mobility</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            <AnimatedSection delay={80}>
              <div className="rounded-xl border border-carbon-200 bg-white p-6 h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ borderTop: "4px solid #9ef01a" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-black" style={{ color: "#9ef01a" }}>→</span>
                  <span className="font-black text-xl text-carbon-900">Inbound Mobility</span>
                </div>
                <p className="text-carbon-600 leading-relaxed text-sm mb-4">
                  Capital flows into the US from India, China, and Southeast Asia — driven by protection, market access, and long-term positioning.<br /><br />
                  This is HNWIs and founders entering through <strong className="text-carbon-900">EB-5, E-2, and entrepreneurial visas</strong>, often using company formation as a strategic entry point.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["EB-5 Visa", "E-2 Treaty", "India", "SE Asia", "China"].map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded-full text-xs font-semibold" style={{ background: "#f3ffe3", color: "#3d8000" }}>{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="rounded-xl border border-carbon-200 bg-white p-6 h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ borderTop: "4px solid #111827" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-black text-carbon-400">←</span>
                  <span className="font-black text-xl text-carbon-900">Outbound Mobility</span>
                </div>
                <p className="text-carbon-600 leading-relaxed text-sm mb-4">
                  At the same time, US-based founders and investors are moving out — optimizing taxes, building a Plan B, and diversifying globally.<br /><br />
                  This shows up in demand for <strong className="text-carbon-900">Caribbean CBI/RBI, European residency</strong>, and cross-border structuring.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Caribbean CBI", "Portugal", "LATAM", "Tax Residency", "Plan B"].map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded-full text-xs font-semibold bg-carbon-100 text-carbon-600">{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* KEY TOPICS — 8 topics */}
      <section id="topics" className="py-14 border-b border-carbon-100 bg-carbon-50">
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="outline" className="mb-3">Agenda Themes</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Key Topics To Discuss</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TOPICS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="bg-white rounded-xl border border-carbon-200 flex items-start gap-4 p-4 hover:shadow-sm hover:border-lime-300 hover:-translate-y-0.5 transition-all duration-200">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{t.icon}</span>
                  <p className="text-carbon-700 font-medium text-sm leading-relaxed">{t.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section id="numbers" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Performance Metrics</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Freedom Summit in Numbers</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            {STATS.map((n, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="rounded-xl border border-carbon-200 bg-white hover:shadow-sm hover:border-lime-200 hover:-translate-y-0.5 transition-all duration-200 text-center py-6 px-4">
                  <div className="text-2xl font-black tracking-tight mb-1" style={{ color: "#70e000" }}>
                    {n.raw ? n.raw : <NumberTicker value={n.val!} suffix={n.suffix} duration={1800} />}
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
                <div key={i} className="rounded-xl border border-carbon-200 bg-white text-center py-5 px-4 hover:border-lime-200 hover:shadow-sm transition-all">
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
