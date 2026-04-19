"use client";
import AnimatedSection from "./AnimatedSection";

function Cell({ val }: { val: string }) {
  if (val === "✓") return <span className="font-bold text-lg" style={{ color: "#70e000" }}>✓</span>;
  if (val === "–") return <span className="text-carbon-300">–</span>;
  return <span className="text-xs font-semibold text-carbon-600">{val}</span>;
}

const FLOW = [
  { dir: "→", label: "Direct Exposure to 1,000+ global founders & investors", green: true },
  { dir: "←", label: "Deliver Keynote or Panel Talk to showcase your expertise", green: false },
  { dir: "→", label: "Lead Generation with Pre-Qualified Prospects filtered by interest", green: true },
  { dir: "←", label: "Custom video invitation for maximum exposure", green: false },
  { dir: "→", label: "Positioning as premium service provider & thought leader", green: true },
  { dir: "→", label: "Custom question block in our audience survey funnel", green: true },
];

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
    { label: "Thought Leadership Article Series (Substack)", g: "1 article", s: "3 articles" },
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
    { label: "Press Release Distribution", g: "✓", s: "✓" },
    { label: "Exclusive Interview in Tier 1 Media", g: "–", s: "✓" },
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
    { label: "Exclusive Speaker Per Industry & Category", p: "✓", b: "✓" },
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
      {/* ENGAGEMENT FLOW */}
      <section id="flow" className="py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Engagement Flow</span>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-3" style={{ letterSpacing: "-0.5px" }}>How the Partnership Works</h2>
            <p className="text-carbon-500 mb-10">A structured 8–12 week journey from pre-event exposure to post-event lead delivery</p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 hidden md:block" style={{ background: "linear-gradient(to bottom, #9ef01a, #70e000, #9ef01a)" }} />
            <div className="space-y-4">
              {FLOW.map((f, i) => (
                <AnimatedSection key={i} delay={i * 90}>
                  <div className="relative flex items-start gap-5 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                    style={{ background: f.green ? "#f8fff0" : "white", border: f.green ? "1px solid #b5f55a" : "1px solid #e5e7eb", boxShadow: f.green ? "0 2px 12px rgba(158,240,26,0.1)" : "none" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 relative z-10"
                      style={{ background: f.green ? "#9ef01a" : "#f3f4f6", color: f.green ? "#111827" : "#6b7280" }}>
                      {i + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-2xl leading-none" style={{ color: f.green ? "#70e000" : "#9ca3af" }}>{f.dir}</span>
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: f.green ? "#3d8000" : "#9ca3af" }}>
                          {f.green ? "You Receive" : "You Deliver"}
                        </span>
                      </div>
                      <p className="text-carbon-700 font-medium">{f.label}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-14 border-b border-carbon-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Engagement Options</span>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Speaking & Partnership</h2>
            <p className="text-carbon-500 mb-8">For this event we allocated <strong className="text-carbon-900">8–10 partnerships/speaking slots only</strong>.</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="card-green mb-8">
              <p className="text-sm text-carbon-600 mb-1">Speakers & Partners don't invest into "Speaking Slot".</p>
              <p className="font-bold text-carbon-900">You invest to get <span style={{ color: "#70e000" }}>Audience Insights</span> and access to <span style={{ color: "#70e000" }}>High-Intent Pre-Qualified Prospects.</span></p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <AnimatedSection delay={130}>
              <div className="card hover:shadow-md transition-all h-full" style={{ borderTop: "4px solid #9ef01a" }}>
                <span className="inline-block px-2 py-1 rounded text-xs font-bold mb-3" style={{ background: "#f3ffe3", color: "#3d8000", border: "1px solid #b5f55a" }}>Only ONE Brand Partner Per Event</span>
                <h3 className="text-xl font-black text-carbon-900 mb-1">Brand Integration Partnership</h3>
                <p className="text-sm text-carbon-500 mb-4">8–12 weeks integration</p>
                <p className="text-sm text-carbon-600 leading-relaxed mb-6">8–12 weeks integrated presence with <strong className="text-carbon-900">Co-Created Content, Thought Leadership + Summit Exposure + Lead Generation + PR & Media Coverage.</strong></p>
                <div className="flex items-end justify-between pt-4 border-t border-carbon-100">
                  <div>
                    <p className="text-xs text-carbon-400 font-medium mb-1">Early Bird from</p>
                    <span className="text-3xl font-black tracking-tight" style={{ color: "#70e000" }}>$3,750</span>
                  </div>
                  <a href="mailto:denis@fsummit.net" className="btn-green text-sm py-2 px-4">Claim Slot →</a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={180}>
              <div className="card hover:shadow-md transition-all h-full" style={{ borderTop: "4px solid #e5e7eb" }}>
                <span className="inline-block px-2 py-1 rounded text-xs font-bold mb-3 bg-carbon-100 text-carbon-600 border border-carbon-200">Limited Slots Per Industry</span>
                <h3 className="text-xl font-black text-carbon-900 mb-1">Speaking & Visibility</h3>
                <p className="text-sm text-carbon-500 mb-4">Per speaking slot</p>
                <p className="text-sm text-carbon-600 leading-relaxed mb-6"><strong className="text-carbon-900">Pay-per-speaking-slot with light branding.</strong> Best for companies wanting to test the audience and collect leads without full sponsorship.</p>
                <div className="flex items-end justify-between pt-4 border-t border-carbon-100">
                  <div>
                    <p className="text-xs text-carbon-400 font-medium mb-1">Early Bird from</p>
                    <span className="text-3xl font-black text-carbon-900 tracking-tight">$1,550</span>
                  </div>
                  <a href="mailto:denis@fsummit.net" className="btn-outline text-sm">Claim Slot →</a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Pricing</span>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Partnership Packages</h2>
          </AnimatedSection>

          {/* Brand Integration */}
          <AnimatedSection delay={80}>
            <h3 className="text-xl font-black text-carbon-900 mb-1">Brand Integration Partnership</h3>
            <p className="text-sm text-carbon-500 mb-4">An 8–12 week full summit integration</p>
            <div className="bg-white border border-carbon-200 rounded-xl overflow-hidden mb-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-carbon-50 border-b border-carbon-200">
                    <th className="px-4 py-3 text-xs font-bold text-carbon-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-center w-1/4 border-l border-carbon-200" style={{ background: "#f3ffe3", color: "#3d8000" }}>GROWTH</th>
                    <th className="px-4 py-3 text-xs font-bold text-carbon-700 uppercase tracking-wide text-center w-1/4 border-l border-carbon-200">STRATEGIC</th>
                  </tr>
                </thead>
                <tbody>
                  {brandRows.map((cat, ci) => (
                    <>
                      <tr key={`hd${ci}`} className="bg-carbon-50 border-t border-carbon-200">
                        <td colSpan={3} className="px-4 py-2 text-xs font-bold text-carbon-400 uppercase tracking-wider">{cat.cat}</td>
                      </tr>
                      {cat.items.map((item, ii) => (
                        <tr key={`${ci}${ii}`} className="border-t border-carbon-100 hover:bg-carbon-50 transition-colors">
                          <td className="px-4 py-2.5 text-sm text-carbon-700">{item.label}</td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100"><Cell val={item.g} /></td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100"><Cell val={item.s} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="card-green">
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">GROWTH · Early Bird</p>
                <p className="text-3xl font-black mb-1" style={{ color: "#70e000" }}>$3,750</p>
                <p className="text-xs text-carbon-400 mb-3">Standard (May 10th): <span className="line-through">$4,450</span></p>
                <a href="mailto:denis@fsummit.net" className="btn-green text-sm py-2 px-4">Claim Growth Slot →</a>
              </div>
              <div className="card">
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">STRATEGIC · Early Bird</p>
                <p className="text-3xl font-black text-carbon-900 mb-1">$4,950</p>
                <p className="text-xs text-carbon-400 mb-3">Standard (May 10th): <span className="line-through">$5,950</span></p>
                <a href="mailto:denis@fsummit.net" className="btn-outline text-sm">Claim Strategic Slot →</a>
              </div>
            </div>
          </AnimatedSection>

          {/* Speaking — renamed to $1950 Premium + Best Choice badge */}
          <AnimatedSection delay={150}>
            <h3 className="text-xl font-black text-carbon-900 mb-1">Speaking & Visibility</h3>
            <p className="text-sm text-carbon-500 mb-4">Limited slots per industry.</p>
            <div className="bg-white border border-carbon-200 rounded-xl overflow-hidden mb-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-carbon-50 border-b border-carbon-200">
                    <th className="px-4 py-3 text-xs font-bold text-carbon-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-center w-1/4 border-l border-carbon-200 relative" style={{ background: "#f3ffe3", color: "#3d8000" }}>
                      <div>PREMIUM</div>
                      <div className="text-xs font-bold px-2 py-0.5 rounded mt-1 inline-block" style={{ background: "#9ef01a", color: "#111827" }}>✦ Best Choice</div>
                    </th>
                    <th className="px-4 py-3 text-xs font-bold text-carbon-700 uppercase tracking-wide text-center w-1/4 border-l border-carbon-200">BUSINESS</th>
                  </tr>
                </thead>
                <tbody>
                  {speakingRows.map((cat, ci) => (
                    <>
                      <tr key={`sh${ci}`} className="bg-carbon-50 border-t border-carbon-200">
                        <td colSpan={3} className="px-4 py-2 text-xs font-bold text-carbon-400 uppercase tracking-wider">{cat.cat}</td>
                      </tr>
                      {cat.items.map((item: { label: string; p: string; b: string }, ii: number) => (
                        <tr key={`s${ci}${ii}`} className="border-t border-carbon-100 hover:bg-carbon-50 transition-colors">
                          <td className="px-4 py-2.5 text-sm text-carbon-700">{item.label}</td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100" style={{ background: "rgba(158,240,26,0.04)" }}><Cell val={item.p} /></td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100"><Cell val={item.b} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Premium - highlighted as best choice */}
              <div className="card" style={{ borderColor: "#9ef01a", borderWidth: "2px", background: "#f8fff0" }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest">PREMIUM · Early Bird</p>
                  <span className="text-xs font-black px-2 py-1 rounded-full" style={{ background: "#9ef01a", color: "#111827" }}>✦ Best Choice</span>
                </div>
                <p className="text-3xl font-black mb-1" style={{ color: "#70e000" }}>$1,950</p>
                <p className="text-xs text-carbon-400 mb-3">Standard (May 10th): <span className="line-through">$2,450</span></p>
                <a href="mailto:denis@fsummit.net" className="btn-green text-sm py-2 px-4">Claim Premium Slot →</a>
              </div>
              <div className="card">
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">BUSINESS · Early Bird</p>
                <p className="text-3xl font-black text-carbon-900 mb-1">$1,550</p>
                <p className="text-xs text-carbon-400 mb-3">Standard (May 10th): <span className="line-through">$1,950</span></p>
                <a href="mailto:denis@fsummit.net" className="btn-outline text-sm">Claim Business Slot →</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
