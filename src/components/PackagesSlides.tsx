"use client";
import AnimatedSection from "./AnimatedSection";

const brandRows = [
  { category: "Branding Visibility", items: [
    { label: '"Presented by" headline logo placement', growth: "–", strategic: "✓" },
    { label: "Website feature block (logo + brand story)", growth: "✓", strategic: "✓" },
    { label: "Exclusive Partner Per Industry & Category", growth: "✓", strategic: "✓" },
    { label: "Mention in all early-stage PR as Co-Organizer", growth: "–", strategic: "✓" },
    { label: "Custom Branded Frame in all live sessions", growth: "–", strategic: "✓" },
    { label: "Sponsored Video Ads", growth: "✓", strategic: "✓" },
  ]},
  { category: "Thought Leadership", items: [
    { label: "Keynote / Panel", growth: "30min Keynote", strategic: "45min Keynote+Panel" },
    { label: "Summit Industry Survey (integrated into main funnel)", growth: "Highlight", strategic: "Co-Branded" },
    { label: "Thought Leadership Article Series (Substack)", growth: "1", strategic: "3" },
    { label: "Podcast/Interview Recording (45 min)", growth: "–", strategic: "✓" },
  ]},
  { category: "Audience Insights & Prospects", items: [
    { label: "Online Session Attendee List", growth: "✓", strategic: "✓" },
    { label: "Registered Event Attendee via UTM Ads Tag", growth: "✓", strategic: "✓" },
    { label: "Survey Data Opt-in Attendee List (250+)", growth: "✓", strategic: "✓" },
    { label: "Full Registered Event Attendees List", growth: "–", strategic: "✓" },
  ]},
  { category: "Media & PR Exposure", items: [
    { label: "Dedicated Email Newsletter 10K List", growth: "4 emails", strategic: "6 emails" },
    { label: "Press Release Distribution featuring integration", growth: "✓", strategic: "✓" },
    { label: "Exclusive Interview in Region Tier 1 Media", growth: "–", strategic: "✓" },
  ]},
  { category: "Post Event Presence", items: [
    { label: "Branded Full Post Event Analytics Report", growth: "✓", strategic: "✓" },
    { label: "Post event AMA Session with attendees", growth: "–", strategic: "✓" },
    { label: "Freedom Business Playbook (PDF download)", growth: "✓", strategic: "✓" },
    { label: "Integration Timeline", growth: "8 Weeks", strategic: "12 Weeks" },
  ]},
];

const speakingRows = [
  { category: "Branding Visibility", items: [
    { label: "Website Logo Placement + Speaker Section", premium: "✓", business: "✓" },
    { label: "Exclusive Speaker Per Industry and Category", premium: "✓", business: "✓" },
    { label: "Sponsored Video Ads", premium: "✓", business: "✓" },
    { label: "Speaker photo, bio, and topic on event website", premium: "✓", business: "✓" },
  ]},
  { category: "Thought Leadership", items: [
    { label: "Keynote / Panel", premium: "30–45 min Keynote", business: "15–30 min Panel" },
  ]},
  { category: "Audience Insights", items: [
    { label: "Online Session Attendee List", premium: "✓", business: "✓" },
    { label: "Registered Event Attendee via UTM Ads Tag", premium: "✓", business: "✓" },
    { label: "Survey Data Opt-in Attendee List (250+)", premium: "✓", business: "–" },
  ]},
  { category: "Post Event Presence", items: [
    { label: "Branded Full Post Event Analytics Report", premium: "✓", business: "✓" },
    { label: "Freedom Business Playbook (PDF download)", premium: "✓", business: "✓" },
    { label: "Dedicated Newsletter Feature (8K+ audience)", premium: "✓", business: "–" },
  ]},
];

function CellValue({ val }: { val: string }) {
  if (val === "✓") return <span className="text-base font-black" style={{ color: "#ADFF2F" }}>✓</span>;
  if (val === "–") return <span className="text-base" style={{ color: "rgba(255,255,255,0.15)" }}>–</span>;
  return <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.7)" }}>{val}</span>;
}

export default function PackagesSlides() {
  return (
    <>
      {/* PACKAGES OVERVIEW */}
      <section
        id="packages"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(173,255,47,0.04) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Engagement Options
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 11</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="font-black tracking-tighter mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              Speaking &<br /><span style={{ color: "#ADFF2F" }}>Partnership</span><br />Engagement
            </h2>
            <p className="text-base mb-12" style={{ color: "rgba(255,255,255,0.45)", maxWidth: "560px" }}>
              For this event edition we allocated <strong className="text-white">8–10 partnerships/speaking slots only</strong>, to deliver real visibility and not overcrowded exposure.
            </p>
          </AnimatedSection>

          {/* Outcome callout */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div
              className="rounded-2xl p-8 mb-12"
              style={{ background: "rgba(173,255,47,0.06)", border: "1px solid rgba(173,255,47,0.2)" }}
            >
              <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Speakers & Partners don't invest into "Speaking Slot".</p>
              <p className="text-xl font-black text-white mb-2">
                You invest to get <span style={{ color: "#ADFF2F" }}>Audience Insights</span> and access to{" "}
                <span style={{ color: "#ADFF2F" }}>High-Intent Pre-Qualified Prospects.</span>
              </p>
              <p className="text-base font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                We turn your session into a <strong className="text-white">full-funnel engine:</strong> you get real decision data and segmented lead lists of participants.
              </p>
            </div>
          </AnimatedSection>

          {/* Package cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection animation="slide-left" delay={300}>
              <div
                className="rounded-2xl p-8 h-full relative overflow-hidden"
                style={{ background: "rgba(173,255,47,0.05)", border: "1px solid rgba(173,255,47,0.25)" }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-30"
                  style={{ background: "radial-gradient(circle, #ADFF2F, transparent)" }}
                />
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-black mb-4"
                  style={{ background: "#ADFF2F", color: "#0A0A0A" }}
                >
                  Only ONE Brand Partner Per Event
                </div>
                <h3 className="font-black text-2xl text-white mb-2">Brand Integration Partnership</h3>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>8–12 weeks integration</p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                  8–12 weeks integrated presence with <strong className="text-white">Co-Created Content, Thought Leadership + Summit Exposure + Lead Generation + PR & Media Coverage.</strong> For companies to establish long-term thought leadership.
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Early Bird from</p>
                    <span className="font-black text-4xl tracking-tight" style={{ color: "#ADFF2F" }}>$3,750</span>
                  </div>
                  <a
                    href="#pricing"
                    onClick={(e) => { e.preventDefault(); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
                    style={{ background: "#ADFF2F", color: "#0A0A0A" }}
                  >
                    See Packages →
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={350}>
              <div
                className="rounded-2xl p-8 h-full"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-black mb-4"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                >
                  Limited Slots Per Industry
                </div>
                <h3 className="font-black text-2xl text-white mb-2">Speaking & Visibility</h3>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>Per speaking slot</p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <strong className="text-white">Pay-per-speaking-slot with light branding.</strong> Best for companies wanting to test the audience, gain speaking visibility, and collect leads without full sponsorship commitment.
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Early Bird from</p>
                    <span className="font-black text-4xl tracking-tight text-white">$1,550</span>
                  </div>
                  <a
                    href="#pricing"
                    onClick={(e) => { e.preventDefault(); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 glass"
                  >
                    See Packages →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Engagement flow */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="mt-12">
              <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>Engagement Flow</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { dir: "→", label: "Direct Exposure to 1,000+ global founders & investors", color: "#ADFF2F" },
                  { dir: "←", label: "Deliver Keynote or Panel Talk to showcase your expertise", color: "rgba(255,255,255,0.5)" },
                  { dir: "→", label: "Lead Generation with Pre-Qualified Prospects filtered by interest", color: "#ADFF2F" },
                  { dir: "←", label: "Custom video invitation for maximum exposure", color: "rgba(255,255,255,0.5)" },
                  { dir: "→", label: "Positioning as premium service provider & thought leader", color: "#ADFF2F" },
                  { dir: "→", label: "Custom question block in our audience survey funnel", color: "#ADFF2F" },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl flex items-start gap-3"
                    style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${f.dir === "→" ? "rgba(173,255,47,0.1)" : "rgba(255,255,255,0.07)"}` }}
                  >
                    <span className="font-black text-lg shrink-0" style={{ color: f.color }}>{f.dir}</span>
                    <p className="text-xs font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICING TABLES */}
      <section
        id="pricing"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#0d0d0d" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Pricing
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 12</span>
            </div>
          </AnimatedSection>

          {/* BRAND INTEGRATION TABLE */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h3 className="font-black text-2xl mb-2">Brand Integration Partnership</h3>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>An 8–12 week full summit integration — from pre-event content to summit exposure and post-event data</p>

            <div className="rounded-2xl overflow-hidden mb-6" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {/* Header */}
              <div className="grid grid-cols-3 text-sm font-black" style={{ background: "#111" }}>
                <div className="p-4 col-span-1" style={{ color: "rgba(255,255,255,0.4)" }}>Feature</div>
                <div className="p-4 text-center" style={{ background: "rgba(173,255,47,0.08)", color: "#ADFF2F", borderLeft: "1px solid rgba(173,255,47,0.15)" }}>
                  GROWTH
                  <div className="text-xs font-medium mt-0.5" style={{ color: "rgba(173,255,47,0.6)" }}>Visibility + Insights</div>
                </div>
                <div className="p-4 text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}>
                  STRATEGIC
                  <div className="text-xs font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>Full Visibility + Leads + Media</div>
                </div>
              </div>

              {brandRows.map((cat, ci) => (
                <div key={ci}>
                  <div className="px-4 py-2.5 text-xs font-black uppercase tracking-widest" style={{ background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {cat.category}
                  </div>
                  {cat.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="grid grid-cols-3 hover:bg-white/2 transition-colors"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <div className="p-3.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</div>
                      <div className="p-3.5 text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.04)" }}>
                        <CellValue val={item.growth} />
                      </div>
                      <div className="p-3.5 text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.04)" }}>
                        <CellValue val={item.strategic} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Price cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              <div className="rounded-2xl p-7 flex justify-between items-center" style={{ background: "rgba(173,255,47,0.08)", border: "1px solid rgba(173,255,47,0.25)" }}>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>GROWTH · EARLY BIRD (Now →)</p>
                  <p className="font-black text-4xl" style={{ color: "#ADFF2F" }}>$3,750</p>
                  <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>Standard (May 10th): <span className="line-through">$4,450</span></p>
                </div>
                <a href="mailto:denis@fsummit.net" className="px-5 py-2.5 rounded-xl font-bold text-sm" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                  Claim Slot →
                </a>
              </div>
              <div className="rounded-2xl p-7 flex justify-between items-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>STRATEGIC · EARLY BIRD (Now →)</p>
                  <p className="font-black text-4xl text-white">$4,950</p>
                  <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>Standard (May 10th): <span className="line-through">$5,950</span></p>
                </div>
                <a href="mailto:denis@fsummit.net" className="px-5 py-2.5 rounded-xl font-bold text-sm glass">
                  Claim Slot →
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* SPEAKING TABLE */}
          <AnimatedSection animation="fade-up" delay={200}>
            <h3 className="font-black text-2xl mb-2">Speaking & Visibility</h3>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>Secure your speaking slot without a full partnership commitment. Limited slots per industry.</p>

            <div className="rounded-2xl overflow-hidden mb-6" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="grid grid-cols-3 text-sm font-black" style={{ background: "#111" }}>
                <div className="p-4 col-span-1" style={{ color: "rgba(255,255,255,0.4)" }}>Feature</div>
                <div className="p-4 text-center" style={{ background: "rgba(173,255,47,0.08)", color: "#ADFF2F", borderLeft: "1px solid rgba(173,255,47,0.15)" }}>
                  PREMIUM
                  <div className="text-xs font-medium mt-0.5" style={{ color: "rgba(173,255,47,0.6)" }}>30–45 min Keynote</div>
                </div>
                <div className="p-4 text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}>
                  BUSINESS
                  <div className="text-xs font-medium mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>15–30 min Panel</div>
                </div>
              </div>

              {speakingRows.map((cat, ci) => (
                <div key={ci}>
                  <div className="px-4 py-2.5 text-xs font-black uppercase tracking-widest" style={{ background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.3)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {cat.category}
                  </div>
                  {cat.items.map((item: { label: string; premium: string; business: string }, ii: number) => (
                    <div
                      key={ii}
                      className="grid grid-cols-3 hover:bg-white/2 transition-colors"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <div className="p-3.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</div>
                      <div className="p-3.5 text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.04)" }}>
                        <CellValue val={item.premium} />
                      </div>
                      <div className="p-3.5 text-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.04)" }}>
                        <CellValue val={item.business} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-7 flex justify-between items-center" style={{ background: "rgba(173,255,47,0.08)", border: "1px solid rgba(173,255,47,0.25)" }}>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>PREMIUM · EARLY BIRD (Now →)</p>
                  <p className="font-black text-4xl" style={{ color: "#ADFF2F" }}>$1,950</p>
                  <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>Standard (May 10th): <span className="line-through">$2,450</span></p>
                </div>
                <a href="mailto:denis@fsummit.net" className="px-5 py-2.5 rounded-xl font-bold text-sm" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                  Claim Slot →
                </a>
              </div>
              <div className="rounded-2xl p-7 flex justify-between items-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>BUSINESS · EARLY BIRD (Now →)</p>
                  <p className="font-black text-4xl text-white">$1,550</p>
                  <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>Standard (May 10th): <span className="line-through">$1,950</span></p>
                </div>
                <a href="mailto:denis@fsummit.net" className="px-5 py-2.5 rounded-xl font-bold text-sm glass">
                  Claim Slot →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
