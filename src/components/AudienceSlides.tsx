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
  { label: "Relocation / Second Residency", pct: 68, note: "2 out of 3 want actionable advice on visas, residencies, or citizenship." },
  { label: "Building & Scaling Borderless Businesses", pct: 66, note: "Founders need guidance on cross-border operations and compliance." },
  { label: "Tax Optimization & Company Formations", pct: 56, note: "More than half ready for practical steps — Singapore, Malaysia, HK setups dominate." },
  { label: "Real Estate Investment Opportunities", pct: 46, note: "Nearly half are investor-minded. Readiness to diversify income geographically." },
  { label: "Health, Mobility & Security", pct: 29, note: "Lifestyle and family-focused relocators. Opportunity for wellness providers." },
];

export default function AudienceSlides() {
  return (
    <>
      {/* AUDIENCE PROFILE */}
      <section id="audience" className="py-16 border-b border-gray-100">
        <div className="container">
          <AnimatedSection>
            <p className="section-label">Audience Profile</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Who's in the Room</h2>
            <p className="text-gray-500 mb-8">Our audience is a blend of direct clients B2C and high-value industry partners B2B, giving sponsors exposure and network effect.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <AnimatedSection delay={100}>
              <div className="card" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
                <div className="font-black text-3xl mb-1" style={{ color: "#16a34a" }}>60%</div>
                <p className="font-semibold text-gray-900 mb-1">B2C Clients</p>
                <p className="text-sm text-gray-600">Entrepreneurs, investors, expats & families seeking relocation, residency, and investment opportunities</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="card">
                <div className="font-black text-3xl text-gray-900 mb-1">40%</div>
                <p className="font-semibold text-gray-900 mb-1">B2B Partners</p>
                <p className="text-sm text-gray-600">Service providers, agencies looking for partnerships, cross-referrals and deals</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <AnimatedSection delay={200}>
              <div className="card">
                <p className="text-xs font-bold text-green-DEFAULT uppercase tracking-widest mb-4">Individuals</p>
                {["Digital Entrepreneurs / Consultants", "HNWI / Investors", "Relocating Expats / Families", "Agency & E-Commerce Owners"].map((a, i) => (
                  <div key={i} className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-DEFAULT flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={250}>
              <div className="card">
                <p className="text-xs font-bold text-green-DEFAULT uppercase tracking-widest mb-4">Service Providers</p>
                {["Legal, Tax, Banking, Visa, Relocation", "Real Estate Developers & Property Agencies", "Mobility and Investment Migration firms", "Investment Companies & Family Offices"].map((a, i) => (
                  <div key={i} className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-DEFAULT flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <div className="card-muted">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Industry Breakdown</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: "Technology, IT & AI", pct: "24%" },
                  { label: "Real Estate & Property", pct: "14.7%" },
                  { label: "Finance & Consulting", pct: "12%" },
                  { label: "Law & Government", pct: "8%" },
                  { label: "Healthcare & MedTech", pct: "5%" },
                ].map((ind, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                    <div className="font-black text-lg mb-0.5" style={{ color: "#16a34a" }}>{ind.pct}</div>
                    <div className="text-xs text-gray-500 font-medium">{ind.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section id="snapshot" className="py-16 border-b border-gray-100" style={{ background: "#f9fafb" }}>
        <div className="container">
          <AnimatedSection>
            <p className="section-label">Audience Snapshot</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Position & Role Breakdown</h2>
          </AnimatedSection>

          <div className="space-y-3">
            {roles.map((r, i) => (
              <AnimatedSection key={i} delay={i * 70}>
                <div className="card hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-4">
                    <span className="font-black text-xl w-12 text-right flex-shrink-0" style={{ color: "#16a34a" }}>{r.pct}%</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <p className="font-semibold text-sm text-gray-900 truncate">{r.role}</p>
                        <span className="text-xs text-gray-400 ml-4 flex-shrink-0 hidden md:block">{r.note}</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${r.pct}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="card mt-6" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">Takeaway:</strong> The audience is founder-heavy and decision-maker dominant — over{" "}
                <strong style={{ color: "#16a34a" }}>75% are entrepreneurs or senior executives</strong> with direct authority over investment, expansion, and partnership decisions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BEHAVIORAL */}
      <section id="behavioral" className="py-16 border-b border-gray-100">
        <div className="container">
          <AnimatedSection>
            <p className="section-label">Behavioral Insights</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Top Priority Needs</h2>
            <p className="text-gray-500 mb-8">Multiple selections allowed — what respondents actively seek from FBS.</p>
          </AnimatedSection>

          <div className="space-y-4">
            {behavioral.map((b, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="card">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="font-black text-2xl w-14 text-right flex-shrink-0" style={{ color: "#16a34a" }}>{b.pct}%</span>
                    <div>
                      <p className="font-bold text-gray-900 mb-0.5">{b.label}</p>
                      <p className="text-sm text-gray-500">{b.note}</p>
                    </div>
                  </div>
                  <div className="ml-[72px]">
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${b.pct}%`, opacity: 0.8 }} />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="card mt-6" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
              <p className="text-sm text-gray-700">
                <strong className="text-gray-900">Takeaway:</strong> Mobility-first mindset — <strong style={{ color: "#16a34a" }}>68% want</strong> residency or citizenship.{" "}
                <strong className="text-gray-900">The #1 need is "trusted service providers."</strong>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
