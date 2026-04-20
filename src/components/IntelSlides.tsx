"use client";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";

const LEADS = [
  { name: "George F.", flag: "🇬🇷", country: "Greece", timeline: "1–3 mo", jurisdiction: "Portugal Golden Visa", income: "$150K–$350K", tier: "HOT", score: 22 },
  { name: "Sarah M.", flag: "🇺🇸", country: "USA", timeline: "1–3 mo", jurisdiction: "Malta Citizenship", income: "$350K–$500K", tier: "HOT", score: 21 },
  { name: "Aleksei V.", flag: "🇷🇺", country: "Russia", timeline: "1–3 mo", jurisdiction: "UAE Residency", income: "$150K–$350K", tier: "HOT", score: 19 },
  { name: "Li Wei", flag: "🇨🇳", country: "China", timeline: "6–12 mo", jurisdiction: "EB-5 / Green Card", income: "$500K–$1M+", tier: "HOT", score: 18 },
  { name: "Fatima Al-R.", flag: "🇦🇪", country: "UAE", timeline: "3–6 mo", jurisdiction: "Portugal NHR", income: "$350K–$500K", tier: "HOT", score: 20 },
  { name: "Michael T.", flag: "🇿🇦", country: "South Africa", timeline: "6–12 mo", jurisdiction: "Greece Golden Visa", income: "$150K–$350K", tier: "WARM", score: 15 },
  { name: "Elena P.", flag: "🇧🇷", country: "Brazil", timeline: "6–12 mo", jurisdiction: "Spain Golden Visa", income: "$150K–$350K", tier: "WARM", score: 14 },
  { name: "Raj K.", flag: "🇮🇳", country: "India", timeline: "6–12 mo", jurisdiction: "UK Innovator Visa", income: "$150K–$350K", tier: "WARM", score: 13 },
];

export default function IntelSlides() {
  return (
    <>
      {/* DATA FUNNEL */}
      <section id="intel" className="py-14 border-b border-carbon-100 bg-carbon-50">
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Intelligence Data Layer</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Every Event is a Data Funnel</h2>
            <p className="text-carbon-500 mb-10 max-w-2xl">FBS is built as a data funnel to create an Intelligence Audience Layer — aggregating insights on prospect behavior, jurisdiction interest, and mobility intent.</p>
          </AnimatedSection>

          {/* 4 horizontal cards */}
          <div className="space-y-3 mb-12">
            {[
              { num: "01", text: "How people relocate, invest, incorporate, and diversify globally" },
              { num: "02", text: "What jurisdictions they're comparing and why" },
              { num: "03", text: "Which services, regions, and programs they're actively considering" },
              { num: "04", text: "Timing, intent profile, and mobility index score" },
            ].map((p, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="bg-white rounded-xl border border-carbon-200 flex items-center gap-5 px-6 py-4 hover:border-lime-200 hover:shadow-sm transition-all">
                  <span className="font-black text-3xl w-14 text-right flex-shrink-0 tabular-nums" style={{ color: "#d1d5db" }}>{p.num}</span>
                  <div className="w-px h-8 bg-carbon-200 flex-shrink-0" />
                  <p className="text-carbon-700 font-medium">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Partner data access section */}
          <AnimatedSection delay={300}>
            <div className="rounded-2xl overflow-hidden border border-carbon-200 bg-white">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-carbon-100" style={{ background: "#111827" }}>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#9ef01a" }}>Partner Audience Intelligence</p>
                  <p className="text-sm font-bold text-white">FBS USA 2026 — Prospect Database</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: "rgba(158,240,26,0.15)", color: "#9ef01a" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-300 animate-pulse" />
                    Full Consent · GDPR Compliant
                  </div>
                  <div className="text-xs text-carbon-500 bg-carbon-800 px-3 py-1.5 rounded-full font-medium" style={{ background: "rgba(255,255,255,0.08)", color: "#9ca3af" }}>
                    364+ Records
                  </div>
                </div>
              </div>

              {/* Table header */}
              <div className="grid text-xs font-bold text-carbon-400 uppercase tracking-wider px-4 py-2 border-b border-carbon-100 bg-carbon-50"
                style={{ gridTemplateColumns: "160px 100px 100px 180px 140px 80px 60px" }}>
                <span>Name / Country</span>
                <span>Nationality</span>
                <span>Timeline</span>
                <span>Preferred Jurisdiction</span>
                <span>Annual Income</span>
                <span className="text-center">Tier</span>
                <span className="text-center">Score</span>
              </div>

              {/* Rows */}
              <div>
                {LEADS.map((lead, i) => (
                  <div key={i} className="grid items-center px-4 py-3 border-b border-carbon-50 hover:bg-carbon-50 transition-colors"
                    style={{ gridTemplateColumns: "160px 100px 100px 180px 140px 80px 60px", opacity: i === LEADS.length - 1 ? 0.4 : 1 }}>
                    <div>
                      <p className="font-semibold text-sm text-carbon-900">{lead.name}</p>
                      <p className="text-xs text-carbon-400">{lead.flag} {lead.country}</p>
                    </div>
                    <span className="text-xs text-carbon-600">{lead.flag} {lead.country}</span>
                    <span className="text-xs text-carbon-600">{lead.timeline}</span>
                    <span className="text-xs text-carbon-700 font-medium">{lead.jurisdiction}</span>
                    <span className="text-xs text-carbon-500">{lead.income}</span>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: lead.tier === "HOT" ? "#fef2f2" : "#fffbeb",
                          color: lead.tier === "HOT" ? "#dc2626" : "#d97706",
                        }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: lead.tier === "HOT" ? "#dc2626" : "#f59e0b" }} />
                        {lead.tier}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-black text-sm text-carbon-900">{lead.score}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-carbon-50 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="text-xs text-carbon-500">
                    <span className="font-bold text-carbon-900">364+</span> total prospects
                  </div>
                  <div className="text-xs text-carbon-500">
                    <span className="font-bold" style={{ color: "#dc2626" }}>27%</span> HOT leads
                  </div>
                  <div className="text-xs text-carbon-500">
                    <span className="font-bold text-carbon-900">6</span> fields per record
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-carbon-400">
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                  Full consent opt-in · Shared via Airtable or CSV export
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* What partners get */}
          <AnimatedSection delay={400}>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                { title: "Each prospect includes", items: ["Full name + nationality", "Preferred jurisdiction(s)", "Relocation timeline", "Annual income bracket", "GMSI Score (Hot/Warm/Cold)", "Contact preference"] },
                { title: "Delivery format", items: ["Airtable shared base", "CSV / Excel export", "Filtered by your category", "Segmented by jurisdiction", "Tagged by timeline", "HOT leads flagged first"] },
                { title: "Compliance", items: ["100% opt-in consent", "GDPR compliant", "Double opt-in via survey", "Clearly stated data use", "No scraped data", "Your category exclusive"] },
              ].map((col, i) => (
                <div key={i} className="bg-white rounded-xl border border-carbon-200 p-5">
                  <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-3">{col.title}</p>
                  <div className="space-y-1.5">
                    {col.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-carbon-700">
                        <span className="font-bold flex-shrink-0" style={{ color: "#9ef01a" }}>✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FUNNEL */}
      <section id="funnel" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Index Score Funnel</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>A Purpose-Built Lead Machine</h2>
            <p className="text-carbon-500 mb-8">Targeted ads → website signup → data-rich survey → segmented follow-ups turns traffic into a qualified, opt-in lead list</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { step: "01", title: "Traffic", icon: "📡", items: ["Targeted Video Ads", "Specific Geo Targeting", "Interest & Age Filters", "110K+ Unique Reach"], accent: true },
              { step: "02", title: "FBS Website", icon: "🌐", items: ["Event Landing Page", "Early Bird Registration", "Speaker Lineup", "Countdown Timer"], accent: false },
              { step: "03", title: "Survey Funnel", icon: "📊", items: ["Welcome Emails", "Mobility Score Index", "Participant Playbook", "Intent Data Collection"], accent: false },
              { step: "04", title: "Audience Insights", icon: "🎯", items: ["Geo + Demographics", "Interest Segments", "Qualified Lead Lists", "Partner Data Export"], accent: true },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className={`h-full rounded-xl p-5 border ${s.accent ? "border-lime-200" : "border-carbon-200"} ${s.accent ? "bg-lime-50" : "bg-white"}`}>
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#3d8000" }}>Step {s.step}</p>
                  <p className="font-bold text-carbon-900 mb-3">{s.title}</p>
                  <div className="space-y-1.5">
                    {s.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-1.5 text-xs text-carbon-500">
                        <span style={{ color: "#70e000" }} className="font-bold">→</span> {item}
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
                { phase: "Pre Event", color: "#70e000", bg: "#f3ffe3", border: "#b5f55a", items: ["Geo-targeted video ads", "Press release metrics & reach", "Registration via UTM tracking", "CTR to landing page"] },
                { phase: "Event Day", color: "#d97706", bg: "#fffbeb", border: "#fde68a", items: ["Keynote or Panel Talk", "Partner logo in live-stream", "Free lead offer (ebook/consult)", "Social mentions via hashtag"] },
                { phase: "Post Event", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe", items: ["Full attendee survey", "Behavior & interest data", "Dedicated email broadcast", "Qualified lead count + CTR"] },
              ].map((phase, i) => (
                <div key={i} className="rounded-xl p-5 border" style={{ background: phase.bg, borderColor: phase.border }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: phase.color }}>{phase.phase}</p>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-carbon-600">
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

      {/* BIG CTA DIVIDER — Speaking and Partnership */}
      <section className="py-20 border-b border-carbon-100" style={{ background: "#111827" }}>
        <div className="wrap text-center">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9ef01a" }}>Ready to reach this audience?</p>
            <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-1.5px" }}>
              Speaking &<br />
              <span style={{ color: "#9ef01a" }}>Partnership Engagement</span>
            </h2>
            <p className="text-carbon-400 mb-8 max-w-xl mx-auto text-lg">
              8–10 slots per event. Every partner gets qualified leads, audience data, and thought leadership positioning.
            </p>
            <a href="mailto:denis@fsummit.net"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-carbon-900 text-base transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#9ef01a" }}>
              Become a Partner →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
