"use client";
import AnimatedSection from "./AnimatedSection";

function Cell({ val }: { val: string }) {
  if (val === "✓") return <span className="font-bold" style={{ color: "#16a34a" }}>✓</span>;
  if (val === "–") return <span className="text-gray-300">–</span>;
  return <span className="text-xs font-semibold text-gray-600">{val}</span>;
}

const brandRows = [
  { cat: "Branding Visibility", items: [
    { label: '"Presented by" headline logo placement', g: "–", s: "✓" },
    { label: "Website feature block (logo + brand story)", g: "✓", s: "✓" },
    { label: "Exclusive Partner Per Industry & Category", g: "✓", s: "✓" },
    { label: "Mention in all early-stage PR as Co-Organizer", g: "–", s: "✓" },
    { label: "Custom Branded Frame in all live sessions", g: "–", s: "✓" },
    { label: "Sponsored Video Ads", g: "✓", s: "✓" },
  ]},
  { cat: "Thought Leadership", items: [
    { label: "Keynote / Panel", g: "30min Keynote", s: "45min Keynote+Panel" },
    { label: "Summit Industry Survey (integrated into main funnel)", g: "Highlight", s: "Co-Branded" },
    { label: "Thought Leadership Article Series (Substack)", g: "1", s: "3" },
    { label: "Podcast/Interview Recording (45 min)", g: "–", s: "✓" },
  ]},
  { cat: "Audience Insights & Prospects", items: [
    { label: "Online Session Attendee List", g: "✓", s: "✓" },
    { label: "Registered Event Attendee via UTM Ads Tag", g: "✓", s: "✓" },
    { label: "Survey Data Opt-in Attendee List (250+)", g: "✓", s: "✓" },
    { label: "Full Registered Event Attendees List", g: "–", s: "✓" },
  ]},
  { cat: "Media & PR Exposure", items: [
    { label: "Dedicated Email Newsletter 10K List", g: "4 emails", s: "6 emails" },
    { label: "Press Release Distribution featuring integration", g: "✓", s: "✓" },
    { label: "Exclusive Interview in Region Tier 1 Media", g: "–", s: "✓" },
  ]},
  { cat: "Post Event Presence", items: [
    { label: "Branded Full Post Event Analytics Report", g: "✓", s: "✓" },
    { label: "Post event AMA Session with attendees", g: "–", s: "✓" },
    { label: "Freedom Business Playbook (PDF download)", g: "✓", s: "✓" },
    { label: "Integration Timeline", g: "8 Weeks", s: "12 Weeks" },
  ]},
];

const speakingRows = [
  { cat: "Branding Visibility", items: [
    { label: "Website Logo Placement + Speaker Section", p: "✓", b: "✓" },
    { label: "Exclusive Speaker Per Industry and Category", p: "✓", b: "✓" },
    { label: "Sponsored Video Ads", p: "✓", b: "✓" },
    { label: "Speaker photo, bio, and topic on event website", p: "✓", b: "✓" },
  ]},
  { cat: "Thought Leadership", items: [
    { label: "Keynote / Panel", p: "30–45 min Keynote", b: "15–30 min Panel" },
  ]},
  { cat: "Audience Insights", items: [
    { label: "Online Session Attendee List", p: "✓", b: "✓" },
    { label: "Registered Event Attendee via UTM Ads Tag", p: "✓", b: "✓" },
    { label: "Survey Data Opt-in Attendee List (250+)", p: "✓", b: "–" },
  ]},
  { cat: "Post Event Presence", items: [
    { label: "Branded Full Post Event Analytics Report", p: "✓", b: "✓" },
    { label: "Freedom Business Playbook (PDF download)", p: "✓", b: "✓" },
    { label: "Dedicated Newsletter Feature (8K+ audience)", p: "✓", b: "–" },
  ]},
];

export default function PackagesSlides() {
  return (
    <>
      {/* PACKAGES */}
      <section id="packages" className="py-16 border-b border-gray-100">
        <div className="container">
          <AnimatedSection>
            <p className="section-label">Engagement Options</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Speaking & Partnership Engagement</h2>
            <p className="text-gray-500 mb-8">For this event edition we allocated <strong className="text-gray-900">8–10 partnerships/speaking slots only</strong>, to deliver real visibility and not overcrowded exposure.</p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="card mb-8" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
              <p className="text-sm text-gray-600 mb-2">Speakers & Partners don't invest into "Speaking Slot".</p>
              <p className="font-bold text-gray-900 mb-1">
                You invest to get <span style={{ color: "#16a34a" }}>Audience Insights</span> and access to <span style={{ color: "#16a34a" }}>High-Intent Pre-Qualified Prospects.</span>
              </p>
              <p className="text-sm text-gray-600">We turn your session into a <strong className="text-gray-900">full-funnel engine</strong> — real decision data and segmented lead lists.</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <AnimatedSection delay={150}>
              <div className="card hover:shadow-md transition-shadow h-full" style={{ borderColor: "#bbf7d0" }}>
                <div className="inline-block px-2 py-1 rounded text-xs font-bold mb-3" style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}>Only ONE Brand Partner Per Event</div>
                <h3 className="font-black text-xl text-gray-900 mb-1">Brand Integration Partnership</h3>
                <p className="text-sm text-gray-500 mb-4">8–12 weeks integration</p>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">8–12 weeks integrated presence with <strong className="text-gray-900">Co-Created Content, Thought Leadership + Summit Exposure + Lead Generation + PR & Media Coverage.</strong></p>
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-1">Early Bird from</p>
                    <span className="font-black text-3xl tracking-tight" style={{ color: "#16a34a" }}>$3,750</span>
                  </div>
                  <a href="mailto:denis@fsummit.net" className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: "#16a34a" }}>Claim Slot →</a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card hover:shadow-md transition-shadow h-full">
                <div className="inline-block px-2 py-1 rounded text-xs font-bold mb-3" style={{ background: "#f9fafb", color: "#6b7280", border: "1px solid #e5e7eb" }}>Limited Slots Per Industry</div>
                <h3 className="font-black text-xl text-gray-900 mb-1">Speaking & Visibility</h3>
                <p className="text-sm text-gray-500 mb-4">Per speaking slot</p>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed"><strong className="text-gray-900">Pay-per-speaking-slot with light branding.</strong> Best for companies wanting to test the audience, gain speaking visibility, and collect leads without full sponsorship commitment.</p>
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-1">Early Bird from</p>
                    <span className="font-black text-3xl tracking-tight text-gray-900">$1,550</span>
                  </div>
                  <a href="mailto:denis@fsummit.net" className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">Claim Slot →</a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Engagement flow */}
          <AnimatedSection delay={300}>
            <div className="card-muted">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Engagement Flow</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  { dir: "→", label: "Direct Exposure to 1,000+ global founders & investors", green: true },
                  { dir: "←", label: "Deliver Keynote or Panel Talk to showcase your expertise", green: false },
                  { dir: "→", label: "Lead Generation with Pre-Qualified Prospects filtered by interest", green: true },
                  { dir: "←", label: "Custom video invitation for maximum exposure", green: false },
                  { dir: "→", label: "Positioning as premium service provider & thought leader", green: true },
                  { dir: "→", label: "Custom question block in our audience survey funnel", green: true },
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-3 flex items-start gap-2">
                    <span className="font-bold flex-shrink-0 text-sm" style={{ color: f.green ? "#16a34a" : "#9ca3af" }}>{f.dir}</span>
                    <p className="text-xs text-gray-600 leading-relaxed">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 border-b border-gray-100" style={{ background: "#f9fafb" }}>
        <div className="container">
          <AnimatedSection>
            <p className="section-label">Pricing</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Partnership Packages</h2>
          </AnimatedSection>

          {/* Brand Integration table */}
          <AnimatedSection delay={100}>
            <div className="mb-4">
              <h3 className="font-black text-xl text-gray-900 mb-1">Brand Integration Partnership</h3>
              <p className="text-sm text-gray-500 mb-4">An 8–12 week full summit integration — from pre-event content to summit exposure and post-event data</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
              <table className="w-full">
                <thead>
                  <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                    <th className="text-left p-3 text-xs font-bold text-gray-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="text-center p-3 text-xs font-bold uppercase tracking-wide w-1/4" style={{ color: "#16a34a", background: "#f0fdf4", borderLeft: "1px solid #e5e7eb" }}>GROWTH</th>
                    <th className="text-center p-3 text-xs font-bold text-gray-700 uppercase tracking-wide w-1/4" style={{ borderLeft: "1px solid #e5e7eb" }}>STRATEGIC</th>
                  </tr>
                </thead>
                <tbody>
                  {brandRows.map((cat, ci) => (
                    <>
                      <tr key={`cat-${ci}`} style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                        <td colSpan={3} className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{cat.cat}</td>
                      </tr>
                      {cat.items.map((item, ii) => (
                        <tr key={`${ci}-${ii}`} className="hover:bg-gray-50 transition-colors" style={{ borderTop: "1px solid #f3f4f6" }}>
                          <td className="px-3 py-2.5 text-sm text-gray-700">{item.label}</td>
                          <td className="px-3 py-2.5 text-center" style={{ borderLeft: "1px solid #f3f4f6" }}><Cell val={item.g} /></td>
                          <td className="px-3 py-2.5 text-center" style={{ borderLeft: "1px solid #f3f4f6" }}><Cell val={item.s} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="card" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">GROWTH · EARLY BIRD (Now →)</p>
                <p className="font-black text-3xl mb-1" style={{ color: "#16a34a" }}>$3,750</p>
                <p className="text-xs text-gray-400">Standard (May 10th): <span className="line-through">$4,450</span></p>
                <a href="mailto:denis@fsummit.net" className="mt-3 inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: "#16a34a" }}>Claim Growth Slot →</a>
              </div>
              <div className="card">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">STRATEGIC · EARLY BIRD (Now →)</p>
                <p className="font-black text-3xl text-gray-900 mb-1">$4,950</p>
                <p className="text-xs text-gray-400">Standard (May 10th): <span className="line-through">$5,950</span></p>
                <a href="mailto:denis@fsummit.net" className="mt-3 inline-block px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-all">Claim Strategic Slot →</a>
              </div>
            </div>
          </AnimatedSection>

          {/* Speaking table */}
          <AnimatedSection delay={200}>
            <div className="mb-4">
              <h3 className="font-black text-xl text-gray-900 mb-1">Speaking & Visibility</h3>
              <p className="text-sm text-gray-500 mb-4">Secure your speaking slot without a full partnership commitment. Limited slots per industry.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
              <table className="w-full">
                <thead>
                  <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                    <th className="text-left p-3 text-xs font-bold text-gray-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="text-center p-3 text-xs font-bold uppercase tracking-wide w-1/4" style={{ color: "#16a34a", background: "#f0fdf4", borderLeft: "1px solid #e5e7eb" }}>PREMIUM</th>
                    <th className="text-center p-3 text-xs font-bold text-gray-700 uppercase tracking-wide w-1/4" style={{ borderLeft: "1px solid #e5e7eb" }}>BUSINESS</th>
                  </tr>
                </thead>
                <tbody>
                  {speakingRows.map((cat, ci) => (
                    <>
                      <tr key={`scat-${ci}`} style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                        <td colSpan={3} className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{cat.cat}</td>
                      </tr>
                      {cat.items.map((item: { label: string; p: string; b: string }, ii: number) => (
                        <tr key={`s${ci}-${ii}`} className="hover:bg-gray-50 transition-colors" style={{ borderTop: "1px solid #f3f4f6" }}>
                          <td className="px-3 py-2.5 text-sm text-gray-700">{item.label}</td>
                          <td className="px-3 py-2.5 text-center" style={{ borderLeft: "1px solid #f3f4f6" }}><Cell val={item.p} /></td>
                          <td className="px-3 py-2.5 text-center" style={{ borderLeft: "1px solid #f3f4f6" }}><Cell val={item.b} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">PREMIUM · EARLY BIRD (Now →)</p>
                <p className="font-black text-3xl mb-1" style={{ color: "#16a34a" }}>$1,950</p>
                <p className="text-xs text-gray-400">Standard (May 10th): <span className="line-through">$2,450</span></p>
                <a href="mailto:denis@fsummit.net" className="mt-3 inline-block px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: "#16a34a" }}>Claim Premium Slot →</a>
              </div>
              <div className="card">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">BUSINESS · EARLY BIRD (Now →)</p>
                <p className="font-black text-3xl text-gray-900 mb-1">$1,550</p>
                <p className="text-xs text-gray-400">Standard (May 10th): <span className="line-through">$1,950</span></p>
                <a href="mailto:denis@fsummit.net" className="mt-3 inline-block px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-all">Claim Business Slot →</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
