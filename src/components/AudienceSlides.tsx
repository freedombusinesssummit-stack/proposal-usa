"use client";
import AnimatedSection from "./AnimatedSection";

const roles = [
  { role: "Founder / Co-Founder / CEO / Managing Director", pct: 56, note: "Company owners, managing directors, partners" },
  { role: "C-Level / VP / Head / Director (non-founder)", pct: 19, note: "VP, CBO, CTO, CFO, Heads of Sales, BD Directors" },
  { role: "Consultant / Advisor / Specialist / Manager", pct: 14, note: "Independent consultants, marketing experts, PMs" },
  { role: "Investor/VC", pct: 5, note: "Looking for investment deals / opportunities" },
  { role: "Freelancer / Independent Professional", pct: 7, note: "Life coaches, ghostwriters, educators" },
  { role: "Employee / Analyst / Student / Researcher", pct: 4, note: "Staff, business development officers, students" },
];

const behavioral = [
  { label: "Relocation / Second Residency", pct: 68, note: "2 out of 3 want actionable advice on visas, residencies, or citizenship. Validates strong alignment with FBS theme." },
  { label: "Building & Scaling Borderless Businesses", pct: 66, note: "Founders need guidance on cross-border operations, compliance, and business systems. SEA, EU, US are key targets." },
  { label: "Tax Optimization & Company Formations", pct: 56, note: "More than half ready for practical steps — Singapore, Malaysia, HK setups dominate. Perfect for workshops." },
  { label: "Real Estate Investment Opportunities", pct: 46, note: "Nearly half are investor-minded. Indicates readiness to diversify income geographically." },
  { label: "Health, Mobility & Security", pct: 29, note: "Lifestyle and family-focused relocators. Opportunity for insurance, medical, and wellness providers." },
];

export default function AudienceSlides() {
  return (
    <>
      {/* AUDIENCE PROFILE */}
      <section
        id="audience"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#0d0d0d" }}
      >
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30"
          style={{ background: "radial-gradient(ellipse at right top, rgba(173,255,47,0.08) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Audience Profile
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 04</span>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <AnimatedSection animation="fade-up" delay={100}>
                <h2 className="font-black tracking-tighter mb-6" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                  Who's in the Room
                </h2>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(173,255,47,0.06)", border: "1px solid rgba(173,255,47,0.15)" }}>
                    <span className="font-black text-3xl" style={{ color: "#ADFF2F" }}>60%</span>
                    <div>
                      <p className="font-bold text-white">B2C Clients</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Entrepreneurs, investors, expats & families seeking relocation and residency</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl glass">
                    <span className="font-black text-3xl text-white">40%</span>
                    <div>
                      <p className="font-bold text-white">B2B Partners</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Service providers, agencies looking for cross-referrals and deals</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Speakers receive segmented B2C and B2B data lists from this audience.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <AnimatedSection animation="slide-right" delay={200}>
                <div className="rounded-2xl p-6 h-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#ADFF2F" }}>Individuals</p>
                  {["Digital Entrepreneurs", "HNWI / Investors", "Relocating Expats", "Agency Owners", "E-Commerce Founders"].map((a, i) => (
                    <div key={i} className="py-2 text-sm font-medium border-b last:border-0" style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}>
                      {a}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-right" delay={300}>
                <div className="rounded-2xl p-6 h-full" style={{ background: "rgba(173,255,47,0.04)", border: "1px solid rgba(173,255,47,0.12)" }}>
                  <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: "#ADFF2F" }}>Service Providers</p>
                  {["Legal, Tax, Banking", "Real Estate Developers", "Migration Firms", "Investment Companies", "Family Offices"].map((a, i) => (
                    <div key={i} className="py-2 text-sm font-medium border-b last:border-0" style={{ borderColor: "rgba(173,255,47,0.1)", color: "rgba(255,255,255,0.7)" }}>
                      {a}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Industry breakdown */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mt-12">
              <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>Industry Breakdown</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: "Technology, IT & AI", pct: "24%", note: "AI agents, tech startups" },
                  { label: "Real Estate & Property", pct: "14.7%", note: "Golden Visa overlap" },
                  { label: "Finance & Consulting", pct: "12%", note: "Tax advisors, fintech" },
                  { label: "Law & Government", pct: "8%", note: "Immigration attorneys" },
                  { label: "Healthcare & MedTech", pct: "5%", note: "Cardiology, mental health" },
                ].map((ind, i) => (
                  <div key={i} className="rounded-xl p-4 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="font-black text-xl mb-1" style={{ color: "#ADFF2F" }}>{ind.pct}</div>
                    <div className="text-xs font-bold text-white mb-1">{ind.label}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{ind.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AUDIENCE SNAPSHOT */}
      <section
        id="snapshot"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
        style={{ background: "#0A0A0A" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Audience Snapshot
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 05</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="font-black tracking-tighter mb-12" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              Position & Role Breakdown
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {roles.map((r, i) => (
              <AnimatedSection key={i} animation="slide-left" delay={i * 80}>
                <div className="flex items-center gap-6 p-5 rounded-2xl group hover:bg-white/3 transition-all" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="font-black text-2xl tracking-tight min-w-[64px]" style={{ color: "#ADFF2F" }}>{r.pct}%</div>
                  <div className="flex-1">
                    <div className="h-2 rounded-full mb-1 overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${r.pct}%`, background: "linear-gradient(90deg, #ADFF2F, #8FD400)" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-white">{r.role}</p>
                  </div>
                  <div className="text-xs hidden md:block min-w-[240px]" style={{ color: "rgba(255,255,255,0.35)" }}>{r.note}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="mt-8 p-6 rounded-2xl" style={{ background: "rgba(173,255,47,0.06)", border: "1px solid rgba(173,255,47,0.2)" }}>
              <p className="text-sm font-bold" style={{ color: "rgba(255,255,255,0.7)" }}>
                <span style={{ color: "#ADFF2F" }}>Takeaway: </span>
                The audience is founder-heavy and decision-maker dominant — over{" "}
                <strong className="text-white">75% are entrepreneurs or senior executives</strong> with direct authority over investment, expansion, and partnership decisions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BEHAVIORAL INSIGHTS */}
      <section
        id="behavioral"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#0d0d0d" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 50% at 100% 50%, rgba(173,255,47,0.05) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Behavioral Insights
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 06</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="font-black tracking-tighter mb-12" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              Top Priority Needs
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {behavioral.map((b, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="group">
                  <div className="flex items-start gap-6 mb-2">
                    <span className="font-black text-4xl tracking-tighter min-w-[80px]" style={{ color: "#ADFF2F" }}>{b.pct}%</span>
                    <div className="flex-1 pt-2">
                      <p className="font-black text-lg text-white mb-1">{b.label}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{b.note}</p>
                    </div>
                  </div>
                  <div className="ml-[104px] h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${b.pct}%`,
                        background: `linear-gradient(90deg, #ADFF2F ${b.pct - 20}%, #8FD400)`,
                        opacity: 0.8,
                      }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={600}>
            <div className="mt-10 p-6 rounded-2xl" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="font-bold text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                <span style={{ color: "#ADFF2F" }}>Takeaway: </span>
                Mobility-first mindset: <strong className="text-white">68% want</strong> residency or citizenship — meaning they're already thinking in terms of multiple jurisdictions & diversification.{" "}
                <strong className="text-white">The #1 need is "trusted service providers."</strong>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
