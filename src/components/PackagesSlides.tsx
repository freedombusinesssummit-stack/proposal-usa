"use client";
import AnimatedSection from "./AnimatedSection";

function Cell({ val }: { val: string }) {
  if (val === "✓") return <span className="font-bold text-green-600">✓</span>;
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
      <section id="packages" className="py-14 border-b border-gray-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Engagement Options</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Speaking & Partnership Engagement</h2>
            <p className="text-gray-500 mb-8">For this event we allocated <strong className="text-gray-900">8–10 partnerships/speaking slots only</strong>, to deliver real visibility without overcrowding.</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="card-green mb-8">
              <p className="text-sm text-gray-600 mb-2">Speakers & Partners don't invest into "Speaking Slot".</p>
              <p className="font-bold text-gray-900 mb-1">You invest to get <span className="text-green-600">Audience Insights</span> and access to <span className="text-green-600">High-Intent Pre-Qualified Prospects.</span></p>
              <p className="text-sm text-gray-600">We turn your session into a <strong className="text-gray-900">full-funnel engine</strong> — real decision data and segmented lead lists.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <AnimatedSection delay={130}>
              <div className="card hover:shadow-md transition-shadow h-full border-green-200">
                <span className="inline-block px-2 py-1 rounded text-xs font-bold mb-3 bg-green-50 text-green-700 border border-green-200">Only ONE Brand Partner Per Event</span>
                <h3 className="text-xl font-black text-gray-900 mb-1">Brand Integration Partnership</h3>
                <p className="text-sm text-gray-500 mb-4">8–12 weeks integration</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">8–12 weeks integrated presence with <strong className="text-gray-900">Co-Created Content, Thought Leadership + Summit Exposure + Lead Generation + PR & Media Coverage.</strong></p>
                <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-1">Early Bird from</p>
                    <span className="text-3xl font-black text-green-600 tracking-tight">$3,750</span>
                  </div>
                  <a href="mailto:denis@fsummit.net" className="btn-green text-sm">Claim Slot →</a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={180}>
              <div className="card hover:shadow-md transition-shadow h-full">
                <span className="inline-block px-2 py-1 rounded text-xs font-bold mb-3 bg-gray-100 text-gray-600 border border-gray-200">Limited Slots Per Industry</span>
                <h3 className="text-xl font-black text-gray-900 mb-1">Speaking & Visibility</h3>
                <p className="text-sm text-gray-500 mb-4">Per speaking slot</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6"><strong className="text-gray-900">Pay-per-speaking-slot with light branding.</strong> Best for companies wanting to test the audience, gain speaking visibility, and collect leads without full sponsorship.</p>
                <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-1">Early Bird from</p>
                    <span className="text-3xl font-black text-gray-900 tracking-tight">$1,550</span>
                  </div>
                  <a href="mailto:denis@fsummit.net" className="btn-outline text-sm">Claim Slot →</a>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={250}>
            <div className="card-muted">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Engagement Flow</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  { dir: "→", label: "Direct Exposure to 1,000+ global founders & investors", green: true },
                  { dir: "←", label: "Deliver Keynote or Panel Talk to showcase your expertise", green: false },
                  { dir: "→", label: "Lead Generation with Pre-Qualified Prospects filtered by interest", green: true },
                  { dir: "←", label: "Custom video invitation for maximum exposure", green: false },
                  { dir: "→", label: "Positioning as premium service provider & thought leader", green: true },
                  { dir: "→", label: "Custom question block in our audience survey funnel", green: true },
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-3 flex items-start gap-2">
                    <span className={`font-bold flex-shrink-0 text-sm ${f.green ? "text-green-600" : "text-gray-400"}`}>{f.dir}</span>
                    <p className="text-xs text-gray-600 leading-relaxed">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-14 border-b border-gray-100 bg-gray-50">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Pricing</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>Partnership Packages</h2>
          </AnimatedSection>

          {/* Brand Integration */}
          <AnimatedSection delay={80}>
            <h3 className="text-xl font-black text-gray-900 mb-1">Brand Integration Partnership</h3>
            <p className="text-sm text-gray-500 mb-4">An 8–12 week full summit integration — from pre-event content to summit exposure and post-event data</p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-center w-1/4 text-green-600 bg-green-50 border-l border-gray-200">GROWTH</th>
                    <th className="px-4 py-3 text-xs font-bold text-gray-700 uppercase tracking-wide text-center w-1/4 border-l border-gray-200">STRATEGIC</th>
                  </tr>
                </thead>
                <tbody>
                  {brandRows.map((cat, ci) => (
                    <>
                      <tr key={`hd${ci}`} className="bg-gray-50 border-t border-gray-200">
                        <td colSpan={3} className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{cat.cat}</td>
                      </tr>
                      {cat.items.map((item, ii) => (
                        <tr key={`${ci}${ii}`} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-2.5 text-sm text-gray-700">{item.label}</td>
                          <td className="px-4 py-2.5 text-center border-l border-gray-100"><Cell val={item.g} /></td>
                          <td className="px-4 py-2.5 text-center border-l border-gray-100"><Cell val={item.s} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="card-green">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">GROWTH · Early Bird</p>
                <p className="text-3xl font-black text-green-600 mb-1">$3,750</p>
                <p className="text-xs text-gray-400 mb-3">Standard (May 10th): <span className="line-through">$4,450</span></p>
                <a href="mailto:denis@fsummit.net" className="btn-green text-sm">Claim Growth Slot →</a>
              </div>
              <div className="card">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">STRATEGIC · Early Bird</p>
                <p className="text-3xl font-black text-gray-900 mb-1">$4,950</p>
                <p className="text-xs text-gray-400 mb-3">Standard (May 10th): <span className="line-through">$5,950</span></p>
                <a href="mailto:denis@fsummit.net" className="btn-outline text-sm">Claim Strategic Slot →</a>
              </div>
            </div>
          </AnimatedSection>

          {/* Speaking */}
          <AnimatedSection delay={150}>
            <h3 className="text-xl font-black text-gray-900 mb-1">Speaking & Visibility</h3>
            <p className="text-sm text-gray-500 mb-4">Secure your speaking slot without a full partnership commitment. Limited slots per industry.</p>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-center w-1/4 text-green-600 bg-green-50 border-l border-gray-200">PREMIUM</th>
                    <th className="px-4 py-3 text-xs font-bold text-gray-700 uppercase tracking-wide text-center w-1/4 border-l border-gray-200">BUSINESS</th>
                  </tr>
                </thead>
                <tbody>
                  {speakingRows.map((cat, ci) => (
                    <>
                      <tr key={`sh${ci}`} className="bg-gray-50 border-t border-gray-200">
                        <td colSpan={3} className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{cat.cat}</td>
                      </tr>
                      {cat.items.map((item: { label: string; p: string; b: string }, ii: number) => (
                        <tr key={`s${ci}${ii}`} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-2.5 text-sm text-gray-700">{item.label}</td>
                          <td className="px-4 py-2.5 text-center border-l border-gray-100"><Cell val={item.p} /></td>
                          <td className="px-4 py-2.5 text-center border-l border-gray-100"><Cell val={item.b} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card-green">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">PREMIUM · Early Bird</p>
                <p className="text-3xl font-black text-green-600 mb-1">$1,950</p>
                <p className="text-xs text-gray-400 mb-3">Standard (May 10th): <span className="line-through">$2,450</span></p>
                <a href="mailto:denis@fsummit.net" className="btn-green text-sm">Claim Premium Slot →</a>
              </div>
              <div className="card">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">BUSINESS · Early Bird</p>
                <p className="text-3xl font-black text-gray-900 mb-1">$1,550</p>
                <p className="text-xs text-gray-400 mb-3">Standard (May 10th): <span className="line-through">$1,950</span></p>
                <a href="mailto:denis@fsummit.net" className="btn-outline text-sm">Claim Business Slot →</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
