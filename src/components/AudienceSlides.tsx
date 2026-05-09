"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const roles = [
  { role: "Founder / Co-Founder / CEO / Managing Director", pct: 56, note: "Decision-makers" },
  { role: "C-Level / VP / Head / Director", pct: 19, note: "Senior executives" },
  { role: "Consultant / Advisor / Manager", pct: 14, note: "Specialists" },
  { role: "Investor / VC", pct: 5, note: "Capital allocators" },
  { role: "Freelancer / Independent Professional", pct: 7, note: "Solopreneurs" },
  { role: "Employee / Analyst / Researcher", pct: 4, note: "Staff" },
];

const behavioral = [
  { label: "Relocation / Second Residency", pct: 68, note: "2 out of 3 want actionable advice on visas, residencies, or citizenship." },
  { label: "Building & Scaling Borderless Businesses", pct: 66, note: "Founders need guidance on cross-border operations and compliance." },
  { label: "Tax Optimization & Company Formations", pct: 56, note: "More than half ready for practical steps — SG, MY, HK setups dominate." },
  { label: "Real Estate Investment Opportunities", pct: 46, note: "Nearly half are investor-minded with readiness to diversify geographically." },
  { label: "Health, Mobility & Security", pct: 29, note: "Lifestyle and family-focused relocators. Opportunity for wellness providers." },
];

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        setTimeout(() => setV(value), delay);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, delay]);
  return <div ref={ref}><Progress value={v} className="h-1.5" /></div>;
}

export default function AudienceSlides() {
  return (
    <>
      {/* AUDIENCE PROFILE */}
      <section id="audience" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">06 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Audience Profile</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Who's in the Room</h2>
            <p className="text-carbon-500 mb-8">Blend of direct clients B2C and high-value industry partners B2B.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <AnimatedSection delay={80}>
              <div className="spotlight-card rounded-xl p-6 border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full" style={{ borderTop: "4px solid #9ef01a", borderLeft: "1px solid #e5e7eb", borderRight: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", background: "#f8fff0" }}>
                <div className="text-4xl font-black mb-2 gradient-text">60%</div>
                <p className="font-bold text-carbon-900 mb-1">B2C Clients</p>
                <p className="text-sm text-carbon-600">Entrepreneurs, investors, expats & families seeking relocation, residency, and investment</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={130}>
              <div className="spotlight-card rounded-xl p-6 border border-carbon-200 bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full">
                <div className="text-4xl font-black text-carbon-900 mb-2">40%</div>
                <p className="font-bold text-carbon-900 mb-1">B2B Partners</p>
                <p className="text-sm text-carbon-600">Service providers, agencies looking for partnerships, cross-referrals and deals</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <AnimatedSection delay={180}>
              <div className="rounded-xl border border-carbon-200 bg-white p-5">
                <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-4">Individuals</p>
                {["Digital Entrepreneurs / Consultants","HNWI / Investors","Relocating Expats / Families","Agency & E-Commerce Owners"].map((a, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2 border-b border-carbon-100 last:border-0 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{ background: "#9ef01a" }} />
                    <span className="text-sm text-carbon-700 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={220}>
              <div className="rounded-xl border border-carbon-200 bg-white p-5">
                <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-4">Service Providers</p>
                {["Legal, Tax, Banking, Visa, Relocation","Real Estate Developers & Agencies","Mobility & Investment Migration Firms","Investment Companies & Family Offices"].map((a, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2 border-b border-carbon-100 last:border-0 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" style={{ background: "#9ef01a" }} />
                    <span className="text-sm text-carbon-700 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={280}>
            <div className="rounded-xl border border-carbon-200 bg-carbon-50 p-5">
              <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-4">Industry Breakdown</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: "Technology, IT & AI", pct: "24%" },
                  { label: "Real Estate & Property", pct: "14.7%" },
                  { label: "Finance & Consulting", pct: "12%" },
                  { label: "Law & Government", pct: "8%" },
                  { label: "Healthcare & MedTech", pct: "5%" },
                ].map((ind, i) => (
                  <div key={i} className="bg-white border border-carbon-200 rounded-xl p-3 text-center hover:border-lime-300 hover:shadow-sm transition-all cursor-default">
                    <div className="text-xl font-black mb-0.5 gradient-text">{ind.pct}</div>
                    <div className="text-xs text-carbon-500 font-medium leading-tight">{ind.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section id="snapshot" className="slide-section py-14 border-b border-carbon-100 bg-carbon-50">
        <span className="slide-number">07 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Audience Snapshot</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Position & Role Breakdown</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {roles.map((r, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="bg-white rounded-xl border border-carbon-200 p-4 hover:shadow-sm hover:border-lime-200 transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-black w-14 text-right flex-shrink-0 tabular-nums gradient-text">{r.pct}%</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-sm text-carbon-900 truncate">{r.role}</p>
                        <Badge variant="outline" className="ml-2 hidden md:flex text-xs shrink-0">{r.note}</Badge>
                      </div>
                      <AnimatedProgress value={r.pct} delay={i * 60 + 200} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={450}>
            <div className="rounded-xl mt-6 p-5" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
              <p className="text-sm text-carbon-700">
                <strong className="text-carbon-900">Takeaway:</strong> Founder-heavy audience — over{" "}
                <strong style={{ color: "#3d8000" }}>75% are entrepreneurs or senior executives</strong> with direct authority over investment, expansion, and partnership decisions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BEHAVIORAL */}
      <section id="behavioral" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">08 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Behavioral Insights</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Top Priority Needs</h2>
            <p className="text-carbon-500 mb-8">Multiple selections allowed — what respondents actively seek.</p>
          </AnimatedSection>

          <div className="space-y-4">
            {behavioral.map((b, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="rounded-xl border border-carbon-200 bg-white p-5 hover:shadow-sm hover:border-lime-200 transition-all duration-200 group">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-2xl font-black w-14 text-right flex-shrink-0 tabular-nums gradient-text leading-tight">{b.pct}%</span>
                    <div>
                      <p className="font-bold text-carbon-900 mb-0.5">{b.label}</p>
                      <p className="text-sm text-carbon-500">{b.note}</p>
                    </div>
                  </div>
                  <div className="ml-[72px]">
                    <AnimatedProgress value={b.pct} delay={i * 70 + 200} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={450}>
            <div className="rounded-xl mt-6 p-5" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
              <p className="text-sm text-carbon-700">
                <strong className="text-carbon-900">Takeaway:</strong> Mobility-first mindset —{" "}
                <strong style={{ color: "#3d8000" }}>68% want</strong> residency or citizenship.{" "}
                <strong className="text-carbon-900">The #1 need is "trusted service providers."</strong>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HIGHEST LEVERAGE POINTS */}
      <section id="leverage" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <span className="slide-number">08b / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Highest Leverage Points for Partners</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Jurisdiction Intent Map</h2>
            <p className="text-carbon-500 mb-8">
              <strong className="text-carbon-900">80% actively seeking options outside the 🇺🇸 US.</strong>{" "}
              Five jurisdictions dominate prospect intent.
            </p>
          </AnimatedSection>

          {/* Top 5 jurisdictions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { flag: "🇵🇹", name: "Portugal", pct: 34, color: "#0369A1", bg: "#EFF8FF", border: "#BAE6FD", note: "NHR tax regime, D7 Visa, Golden Visa — top pick for US citizens seeking EU base" },
              { flag: "🇬🇷", name: "Greece", pct: 28, color: "#7C3AED", bg: "#F5F3FF", border: "#C4B5FD", note: "Golden Visa from €250K — preferred for real estate investors and EU residency seekers" },
              { flag: "🇲🇹", name: "Malta", pct: 22, color: "#D97706", bg: "#FFFBEB", border: "#FCD34D", note: "EU citizenship by investment — highest-value CBI program for American HNWIs" },
              { flag: "🇰🇳", name: "Caribbean CBI", pct: 19, color: "#8FD600", bg: "#F2FFD6", border: "#C5EF6A", note: "Grenada, St Kitts, Dominica — fastest second passport route with treaty benefits" },
              { flag: "🇦🇪", name: "UAE / Dubai", pct: 17, color: "#0369A1", bg: "#EFF8FF", border: "#BAE6FD", note: "0% income tax residency, business hub — strong pull for digital entrepreneurs" },
            ].map((j, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="bg-white rounded-xl border p-5 h-full hover:shadow-sm hover:-translate-y-0.5 transition-all" style={{ borderColor: j.border, borderTop: `4px solid ${j.color}` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{j.flag}</span>
                    <div>
                      <p className="font-black text-carbon-900 text-base">{j.name}</p>
                      <p className="font-black text-xl" style={{ color: j.color }}>{j.pct}%</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div style={{ height: 4, borderRadius: 99, background: "#f3f4f6", overflow: "hidden" }}>
                      <div style={{ width: `${j.pct / 0.34}%`, height: "100%", background: j.color, borderRadius: 99 }} />
                    </div>
                  </div>
                  <p className="text-xs text-carbon-500 leading-relaxed">{j.note}</p>
                </div>
              </AnimatedSection>
            ))}

            {/* Panama block */}
            <AnimatedSection delay={5 * 70}>
              <div className="bg-white rounded-xl border p-5 h-full hover:shadow-sm hover:-translate-y-0.5 transition-all" style={{ borderColor: "#fde68a", borderTop: "4px solid #D97706", position: "relative" }}>
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#fffbeb", color: "#D97706", border: "1px solid #fde68a" }}>High Conversion</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇵🇦</span>
                  <div>
                    <p className="font-black text-carbon-900 text-base">Panama / LATAM</p>
                    <p className="font-black text-xl" style={{ color: "#D97706" }}>13.3%</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div style={{ height: 4, borderRadius: 99, background: "#f3f4f6", overflow: "hidden" }}>
                    <div style={{ width: "39%", height: "100%", background: "#D97706", borderRadius: 99 }} />
                  </div>
                </div>
                <p className="text-xs text-carbon-500 leading-relaxed mb-3">Smaller in volume but <strong className="text-carbon-700">significantly higher in conversion quality</strong> — sovereignty-oriented, high-intent entrepreneurial optimization segment.</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Tax Optimization", "Offshore Structuring", "Business Mobility", "Sovereignty Focus"].map((t, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#fffbeb", color: "#D97706", border: "1px solid #fde68a" }}>{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500}>
            <div className="rounded-xl p-5" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
              <p className="text-sm text-carbon-700">
                <strong className="text-carbon-900">Partner Takeaway:</strong> The audience is not window-shopping.{" "}
                These are <strong style={{ color: "#3d8000" }}>active decision-makers with a 0–12 month timeline</strong> and a clear jurisdiction preference. Panama/LATAM in particular represents a niche but <strong className="text-carbon-900">high-intent entrepreneurial segment</strong> — not mass market, but exceptional conversion quality for the right provider.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INCORPORATION PREFERENCES */}
      <section id="incorporation" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">08c / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Incorporation Preferences — Core Analysis</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Where the Audience Wants to Structure</h2>
            <p className="text-carbon-500 mb-8">Company formation preferences across the surveyed audience — ranked by intent signals.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Top incorporation jurisdictions */}
            <AnimatedSection delay={80}>
              <div className="rounded-xl border border-carbon-200 bg-white p-6 h-full">
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-4">Top Jurisdictions for Incorporation</p>
                <div className="space-y-3">
                  {[
                    { flag: "🇦🇪", name: "UAE / Dubai (Freezone)", pct: 41, note: "0% corporate tax, fast setup" },
                    { flag: "🇸🇬", name: "Singapore", pct: 28, note: "Asia gateway, low 17% corp tax" },
                    { flag: "🇺🇸", name: "USA (Wyoming / Delaware)", pct: 24, note: "LLC structures for non-residents" },
                    { flag: "🇬🇧", name: "UK (LLP / Ltd)", pct: 18, note: "EU access, established legal system" },
                    { flag: "🇵🇦", name: "Panama", pct: 13, note: "Offshore structuring, territorial tax, privacy" },
                    { flag: "🇭🇰", name: "Hong Kong", pct: 11, note: "Asia hub, low-tax, strong banking" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-base w-6 flex-shrink-0">{item.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-semibold text-carbon-800 truncate">{item.name}</p>
                          <span className="text-sm font-black ml-2 flex-shrink-0" style={{ color: "#8FD600" }}>{item.pct}%</span>
                        </div>
                        <div style={{ height: 3, borderRadius: 99, background: "#f3f4f6", overflow: "hidden" }}>
                          <div style={{ width: `${(item.pct / 41) * 100}%`, height: "100%", background: "#8FD600", borderRadius: 99 }} />
                        </div>
                        <p className="text-xs text-carbon-400 mt-1">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Panama deep-dive */}
            <AnimatedSection delay={120}>
              <div className="flex flex-col gap-4 h-full">
                <div className="rounded-xl border p-5 flex-1" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🇵🇦</span>
                    <p className="font-black text-carbon-900">Panama — Why It Matters</p>
                  </div>
                  <p className="text-sm text-carbon-600 leading-relaxed mb-4">
                    Panama's territorial tax system, strong banking secrecy tradition, and Friendly Nations Visa make it uniquely attractive for <strong className="text-carbon-900">sovereignty-focused entrepreneurs</strong> who want offshore structuring without the compliance burden of EU regimes.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Territorial Tax", icon: "✓" },
                      { label: "Friendly Nations Visa", icon: "✓" },
                      { label: "Offshore Structures", icon: "✓" },
                      { label: "Banking Privacy", icon: "✓" },
                      { label: "LATAM Hub", icon: "✓" },
                      { label: "No CFC Rules", icon: "✓" },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-carbon-700">
                        <span className="font-bold" style={{ color: "#D97706" }}>{f.icon}</span>
                        {f.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-carbon-200 bg-white p-5">
                  <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-3">Audience Segment Profile</p>
                  <div className="space-y-2">
                    {[
                      "Digital entrepreneurs & location-independent founders",
                      "US persons seeking legal tax optimization structures",
                      "Investors prioritizing asset protection & privacy",
                      "Sovereignty-oriented thinkers with 0–6 month timeline",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-carbon-600">
                        <span className="font-black flex-shrink-0 mt-0.5" style={{ color: "#D97706" }}>→</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={350}>
            <div className="rounded-xl p-5" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
              <p className="text-sm text-carbon-700">
                <strong className="text-carbon-900">Takeaway:</strong> UAE and Singapore dominate volume, but{" "}
                <strong style={{ color: "#3d8000" }}>Panama represents the highest-intent optimization segment</strong> — smaller audience, but with clear, active intent to act. Partners serving Panama/LATAM structures will face{" "}
                <strong className="text-carbon-900">less competition and higher conversion rates</strong> within this audience.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
