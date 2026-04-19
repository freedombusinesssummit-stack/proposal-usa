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
  { icon: "🇺🇸", text: "Inbound Mobility to the U.S.: Visas, Capital & Market Access" },
  { icon: "🌍", text: "Second Passports & Residencies for U.S. Citizens" },
  { icon: "🗺️", text: "Health, Security for the New Global Class: a personal safety net for entrepreneurs & families" },
  { icon: "💻", text: "Company Structures in the USA: Tax Optimization & Asset Protection" },
  { icon: "🛸", text: "Legal Tax Optimization for U.S. Citizens" },
  { icon: "🏠", text: "Global Real Estate for U.S. Investors" },
  { icon: "🇪🇺", text: "Where Americans Are Moving and Why: Portugal, Panama, Costa Rica, LATAM, Caribbean" },
];

const STATS = [
  { val: 364, suffix: "+", label: "Unique Registrations", green: true },
  { val: 97, suffix: "", label: "Survey Submissions", green: true },
  { val: 152, suffix: "", label: "Live Attendees", green: true },
  { raw: "10.2K", label: "Email List Audience", green: true },
  { raw: "33–52%", label: "Email Open Rate", green: true },
  { val: 452, suffix: "", label: "Engaged Video Views", green: true },
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
            <div className="max-w-2xl">
              <p className="text-carbon-600 leading-relaxed mb-4">
                FBS USA Edition is our <strong className="text-carbon-900">2nd event focusing on the American market</strong> — the most commercially valuable region in global mobility, investment migration, company incorporation and offshore strategies.
              </p>
              <p className="text-carbon-600 leading-relaxed mb-6">
                A two-day <strong className="text-carbon-900">global virtual event</strong> focused on US inbound and outbound mobility strategies for founders, investors, and globally mobile individuals.
              </p>
              <div className="inline-flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
                <span className="text-lg">📊</span>
                <p className="text-sm font-semibold" style={{ color: "#3d8000" }}>For speakers: full access to audience insights, segmented leads & intent signals</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Why Partner with FBS</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-10" style={{ letterSpacing: "-0.5px" }}>What Makes Us Different</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="spotlight-card bg-white rounded-xl border border-carbon-200 border-l-4 p-5 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                  style={{ borderLeftColor: "#9ef01a" }}>
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
                  <p className="font-bold text-carbon-900 mb-1.5 text-sm">{f.title}</p>
                  <p className="text-sm text-carbon-600 leading-relaxed">{f.text}</p>
                </div>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={FEATURES.length * 80}>
              <div className="rounded-xl p-5 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4"
                style={{ background: "#111827", borderLeftColor: "#9ef01a", borderColor: "#1f2937", borderStyle: "solid", borderWidth: "1px", borderLeftWidth: "4px" }}>
                <div className="text-2xl mb-3">🚀</div>
                <p className="font-black text-base mb-1.5 gradient-text">8–10 Partner Slots Only</p>
                <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>We work with a select group per edition to guarantee real visibility — not a crowded sponsorship list.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Two Directions</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Inbound & Outbound US Mobility</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            <AnimatedSection delay={80}>
              <div className="spotlight-card rounded-xl border border-carbon-200 bg-white p-6 h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ borderTop: "4px solid #9ef01a" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-black" style={{ color: "#9ef01a" }}>→</span>
                  <span className="font-black text-xl text-carbon-900">Outbound Mobility</span>
                </div>
                <p className="text-carbon-600 leading-relaxed text-sm mb-4">Americans seeking legitimate ways to reduce their tax exposure, obtain a <strong className="text-carbon-900">Plan B, or renounce citizenship.</strong> Focus on <strong className="text-carbon-900">CBI/RBI Programs (Caribbean), Tax-Advantaged Residency (Portugal, LATAM)</strong></p>
                <div className="flex flex-wrap gap-2">
                  {["Caribbean CBI", "Portugal", "LATAM", "Tax Residency"].map((t, i) => (
                    <Badge key={i} variant="success" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="spotlight-card rounded-xl border border-carbon-200 bg-white p-6 h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style={{ borderTop: "4px solid #111827" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-black text-carbon-400">←</span>
                  <span className="font-black text-xl text-carbon-900">Inbound Mobility</span>
                </div>
                <p className="text-carbon-600 leading-relaxed text-sm mb-4">HNWI from <strong className="text-carbon-900">India, China, and Southeast Asia</strong> seeking U.S. residency/visas for capital protection. Focus on <strong className="text-carbon-900">EB-5, E-2 Investment Visas</strong></p>
                <div className="flex flex-wrap gap-2">
                  {["EB-5 Visa", "E-2 Treaty", "India", "SE Asia", "China"].map((t, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{t}</Badge>
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
            <Badge variant="success" className="mb-3">Agenda Themes</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Key Topics To Discuss</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TOPICS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 55}>
                <div className="spotlight-card bg-white rounded-xl border border-carbon-200 flex items-start gap-4 p-4 hover:shadow-sm hover:border-lime-300 hover:-translate-y-0.5 transition-all duration-200 group">
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{t.icon}</span>
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
                <div className="spotlight-card rounded-xl border border-carbon-200 bg-white hover:shadow-sm hover:border-lime-200 hover:-translate-y-0.5 transition-all duration-200 text-center py-6 px-4 group">
                  <div className="text-2xl font-black tracking-tight mb-1 gradient-text">
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
                  <div className="text-2xl font-black tracking-tight mb-1 gradient-text">{item.val}</div>
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
