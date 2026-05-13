"use client";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimatedList } from "@/components/magicui/animated-list";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

function Check() { return <span className="font-bold text-xl" style={{ color: "#70e000" }}>✓</span>; }
function Dash() { return <span className="text-carbon-300 text-lg">–</span>; }
function Cell({ val }: { val: string }) {
  if (val === "✓") return <Check />;
  if (val === "–") return <Dash />;
  return <span className="text-xs font-semibold text-carbon-600">{val}</span>;
}

const FLOW = [
  { dir: "→", tag: "You Receive", label: "Direct Exposure to 500–700+ global founders & investors", green: true },
  { dir: "←", tag: "You Deliver", label: "Deliver Keynote or Panel Talk to showcase your expertise", green: false },
  { dir: "→", tag: "You Receive", label: "Lead Generation with Pre-Qualified Prospects filtered by interest", green: true },
  { dir: "←", tag: "You Deliver", label: "Custom video invitation for maximum pre-event exposure", green: false },
  { dir: "→", tag: "You Receive", label: "Positioning as premium service provider & thought leader", green: true },
  { dir: "→", tag: "You Receive", label: "Custom question block in our audience survey funnel", green: true },
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
    { label: "Summit Industry Survey", g: "Highlight", s: "Co-Branded" },
    { label: "Thought Leadership Articles (Substack)", g: "1 article", s: "3 articles" },
    { label: "Podcast/Interview Recording (45 min)", g: "–", s: "✓" },
  ]},
  { cat: "Audience Insights & Prospects", items: [
    { label: "Online Session Attendee List", g: "✓", s: "✓" },
    { label: "Registered Attendee via UTM Ads Tag", g: "✓", s: "✓" },
    { label: "Survey Data Opt-in Attendee List (250+)", g: "✓", s: "✓" },
    { label: "Full Registered Event Attendees List", g: "–", s: "✓" },
  ]},
  { cat: "Media & PR", items: [
    { label: "Dedicated Email Newsletter 10K List", g: "4 emails", s: "6 emails" },
    { label: "Press Release Distribution", g: "✓", s: "✓" },
    { label: "Exclusive Interview in Tier 1 Media", g: "–", s: "✓" },
  ]},
  { cat: "Post Event", items: [
    { label: "Branded Post Event Analytics Report", g: "✓", s: "✓" },
    { label: "Post event AMA Session with attendees", g: "–", s: "✓" },
    { label: "Freedom Business Playbook (PDF)", g: "✓", s: "✓" },
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
    { label: "Registered Attendee via UTM Ads Tag", p: "✓", b: "✓" },
    { label: "Survey Data Opt-in Attendee List (250+)", p: "✓", b: "–" },
  ]},
  { cat: "Post Event", items: [
    { label: "Branded Post Event Analytics Report", p: "✓", b: "✓" },
    { label: "Freedom Business Playbook (PDF)", p: "✓", b: "✓" },
    { label: "Dedicated Newsletter Feature (8K+)", p: "✓", b: "–" },
  ]},
];

const REASONS = [
  "Data-driven virtual summit — real intent signals",
  "100% global distribution and media exposure",
  "Full funnel intent tracking from day one",
  "Exclusivity per category and jurisdiction",
  "Decision-maker dominant audience (75% founders/execs)",
  "Direct access to pre-qualified prospects with active timelines (0–12 months)",
  "Pre-qualified audience surveyed on jurisdiction, budget & timeline",
  "8–10 selected partners per event — no overcrowding",
];


function Phase({ label, bg, badgeBg, badgeColor, items }: {
  label: string; bg: string; badgeBg: string; badgeColor: string; items: string[];
}) {
  return (
    <div className="p-6 border-b last:border-b-0 md:border-b-0 md:border-r last:border-r-0 border-carbon-100" style={{ background: bg }}>
      <div className="inline-flex px-3 py-1.5 rounded-lg text-sm font-black mb-5" style={{ background: badgeBg, color: badgeColor }}>{label}</div>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="text-xs font-black text-carbon-400 mt-0.5 w-4 flex-shrink-0">{i + 1}.</span>
            <p className="text-sm text-carbon-600 leading-snug">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PackagesSlides() {
  return (
    <>
      {/* ENGAGEMENT FLOW */}
      <section id="flow" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <span className="slide-number">14 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Engagement Flow</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>How the Partnership Works</h2>
            <p className="text-carbon-500 mb-10">A structured 8–12 week journey — from pre-event exposure to post-event lead delivery</p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-5 top-8 bottom-8 w-0.5 hidden md:block" style={{ background: "linear-gradient(to bottom, #9ef01a, #70e000, rgba(158,240,26,0.15))" }} />
            <AnimatedList delay={90} className="space-y-3">
              {FLOW.map((f, i) => (
                <div key={i} className="spotlight-card relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ background: f.green ? "#f8fff0" : "white", border: `1px solid ${f.green ? "#b5f55a" : "#e5e7eb"}`, boxShadow: f.green ? "0 2px 16px rgba(158,240,26,0.08)" : "none" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 relative z-10"
                    style={{ background: f.green ? "#9ef01a" : "#f3f4f6", color: f.green ? "#111827" : "#6b7280" }}>
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-black text-xl" style={{ color: f.green ? "#70e000" : "#d1d5db" }}>{f.dir}</span>
                      <Badge variant={f.green ? "success" : "outline"} className="text-xs">{f.tag}</Badge>
                    </div>
                    <p className="text-carbon-700 font-medium text-sm">{f.label}</p>
                  </div>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* PACKAGES OVERVIEW */}
      <section id="packages" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">15 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Engagement Options</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Speaking & Partnership Engagement</h2>
            <p className="text-carbon-500 mb-2">For this event we allocated <strong className="text-carbon-900">8–10 partnerships/speaking slots only</strong>.</p>
            <p className="text-carbon-500 mb-8">8–10 slots per event. Every partner gets qualified leads, audience data, and thought leadership positioning.</p>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <div className="rounded-xl p-5 mb-8" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
              <p className="text-sm text-carbon-600 mb-1">Speakers & Partners don't invest into "Speaking Slot".</p>
              <p className="font-bold text-carbon-900">
                You invest to get{" "}
                <AnimatedGradientText className="font-black">Audience Insights</AnimatedGradientText>
                {" "}and access to{" "}
                <AnimatedGradientText className="font-black">High-Intent Pre-Qualified Prospects.</AnimatedGradientText>
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <AnimatedSection delay={130}>
              <div className="bento-card relative p-6 h-full" style={{ borderTop: "4px solid #9ef01a" }}>
                <Badge variant="success" className="mb-3 text-xs">Only ONE Brand Partner Per Event</Badge>
                <h3 className="text-xl font-black text-carbon-900 mb-1">Brand Integration Partnership</h3>
                <p className="text-sm text-carbon-500 mb-4">8–12 weeks integration</p>
                <p className="text-sm text-carbon-600 leading-relaxed mb-6">8–12 weeks integrated presence with <strong className="text-carbon-900">Co-Created Content, Thought Leadership + Summit Exposure + Lead Generation + PR & Media Coverage.</strong></p>
                <div className="flex items-end justify-between pt-4 border-t border-carbon-100">
                  <div>
                    <p className="text-xs text-carbon-400 font-medium mb-1">Early Bird from</p>
                    <AnimatedGradientText className="text-3xl font-black tracking-tight">$3,950</AnimatedGradientText>
                  </div>
                  <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" className="text-sm px-4 py-2">Claim Slot →</ShimmerButton>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={180}>
              <div className="bento-card p-6 h-full" style={{ borderTop: "4px solid #e5e7eb" }}>
                <Badge variant="outline" className="mb-3 text-xs">Limited Slots Per Industry</Badge>
                <h3 className="text-xl font-black text-carbon-900 mb-1">Speaking & Visibility</h3>
                <p className="text-sm text-carbon-500 mb-4">Per speaking slot</p>
                <p className="text-sm text-carbon-600 leading-relaxed mb-6"><strong className="text-carbon-900">Pay-per-speaking-slot with light branding.</strong> Best for companies wanting to test the audience and collect leads without full sponsorship.</p>
                <div className="flex items-end justify-between pt-4 border-t border-carbon-100">
                  <div>
                    <p className="text-xs text-carbon-400 font-medium mb-1">Early Bird from</p>
                    <span className="text-3xl font-black text-carbon-900 tracking-tight">$1,750</span>
                  </div>
                  <a href="mailto:denis@fsummit.net" className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold border border-carbon-200 text-carbon-700 hover:border-lime-300 transition-all">Claim Slot →</a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA block — NO button */}
          <AnimatedSection delay={250}>
            <div className="rounded-2xl p-8 md:p-10 text-center" style={{ background: "#f8fff0", border: "2px solid #b5f55a" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#3d8000" }}>Ready to Reach This Audience?</p>
              <h2 className="font-black text-carbon-900 leading-tight mb-3" style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-1px" }}>
                Speaking &{" "}
                <AnimatedGradientText className="font-black">Partnership Engagement</AnimatedGradientText>
              </h2>
              <p className="text-carbon-500 max-w-lg mx-auto">
                8–10 slots per event. Every partner gets qualified leads, audience data, and thought leadership positioning.
              </p>
            </div>
          </AnimatedSection>

          {/* PARTNERS ENGAGEMENT - How It Works Timeline */}
          <AnimatedSection delay={300}>
            <div className="mt-5 rounded-2xl border border-carbon-200 bg-white overflow-hidden">
              <div className="px-7 pt-7 pb-5 border-b border-carbon-100">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#9ef01a" }}>Partners Engagement</p>
                <h3 className="font-black text-carbon-900 mb-2" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.5px" }}>PARTNERS ENGAGEMENT</h3>
                <p className="text-carbon-500 max-w-2xl text-sm leading-relaxed">
                  Our partners get direct access to real data on audience behavior, investment interests, and mobility trends -{" "}
                  <strong className="text-carbon-900">the kind of intelligence that drives deals.</strong>
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-0">
                <div className="p-6 md:border-r border-b md:border-b-0 border-carbon-100">
                  <div className="inline-flex px-3 py-1.5 rounded-lg text-sm font-black mb-5" style={{ background: "#9ef01a", color: "#111827" }}>Pre Event Exposure</div>
                  <div className="space-y-2.5">
                    {["Geo-targeted video ads (Impressions & CPM)", "Press release metrics and reach", "Registration driven by ads (UTM)", "CTR to landing page"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-xs font-black text-carbon-400 mt-0.5 w-4 flex-shrink-0">{i + 1}.</span>
                        <p className="text-sm text-carbon-600 leading-snug">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:border-r border-b md:border-b-0 border-carbon-100" style={{ background: "#fefce8" }}>
                  <div className="inline-flex px-3 py-1.5 rounded-lg text-sm font-black mb-5" style={{ background: "#fde047", color: "#713f12" }}>Event Brand Awareness</div>
                  <div className="space-y-2.5">
                    {["Keynote or panel Talk", "Partner logo during live-stream", "Free lead offer (ebook, consult, QR scan)", "Social mentions using event hashtag", "Live sessions viewers"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-xs font-black text-carbon-400 mt-0.5 w-4 flex-shrink-0">{i + 1}.</span>
                        <p className="text-sm text-carbon-600 leading-snug">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6" style={{ background: "#eff6ff" }}>
                  <div className="inline-flex px-3 py-1.5 rounded-lg text-sm font-black mb-5" style={{ background: "#bfdbfe", color: "#1e3a8a" }}>Post Event Engagement</div>
                  <div className="space-y-2.5">
                    {["Full attendee survey", "Behavior and interest data", "Dedicated email broadcast & Articles", "Number of qualified leads", "Open & Click CTR data"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-xs font-black text-carbon-400 mt-0.5 w-4 flex-shrink-0">{i + 1}.</span>
                        <p className="text-sm text-carbon-600 leading-snug">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-7 py-5 border-t border-carbon-100" style={{ background: "#f9fafb" }}>
                <p className="text-sm font-bold text-carbon-900 text-center mb-4">
                  Partnership Engagement Timeline 8-12 Weeks{" "}
                  <span className="font-normal text-carbon-500">(From Pre to Post Event)</span>
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-carbon-400 flex-shrink-0">Week 1</span>
                  <div className="flex-1 relative h-8 flex items-center">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 rounded-full overflow-hidden" style={{ background: "#e5e7eb" }}>
                      <div className="h-full w-full rounded-full" style={{ background: "linear-gradient(90deg, #9ef01a 0%, #fde047 50%, #93c5fd 100%)" }} />
                    </div>
                    {[{ left: "0%", label: "Pre Event", color: "#9ef01a" }, { left: "42%", label: "Event", color: "#fde047" }, { left: "72%", label: "Post Event", color: "#93c5fd" }].map((m, i) => (
                      <div key={i} className="absolute flex flex-col items-center" style={{ left: m.left }}>
                        <div className="w-4 h-4 rounded-full border-2 border-white shadow" style={{ background: m.color }} />
                        <span className="text-carbon-500 mt-1 whitespace-nowrap font-semibold" style={{ fontSize: "9px" }}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-carbon-400 flex-shrink-0">Week 12</span>
                </div>
                <p className="text-center text-xs text-carbon-400 mt-4">
                  Brand Integration includes full 8-12 week integration - 
                  <strong className="text-carbon-700">not just the event day</strong>
                </p>
              </div>
            </div>
          </AnimatedSection>


          {/* READY TO PARTNER — directly under CTA */}
          <AnimatedSection delay={320}>
            <div className="mt-5 rounded-2xl border border-carbon-200 bg-white p-6 md:p-8">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#9ef01a" }}>Contact</p>
                <h3 className="text-2xl font-black text-carbon-900 mb-2" style={{ letterSpacing: "-0.5px" }}>Ready to Partner?</h3>
                <p className="text-sm text-carbon-500 mb-5">We only work with <strong className="text-carbon-900">8–10 selected partners per event.</strong> Reach out now to secure your slot before the Early Bird deadline on May 31st.</p>
                <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerColor="rgba(255,255,255,0.4)" shimmerDuration="1.8s" className="text-sm font-bold px-6 py-3">
                  Become a Partner →
                </ShimmerButton>
              </div>
              {/* Benefit boxes — highlighted 2-col grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {[
                  "Data-driven virtual summit - real intent signals",
                  "100% global distribution and media exposure",
                  "Full funnel intent tracking from day one",
                  "Exclusivity per category and jurisdiction",
                  "Decision-maker dominant audience (75% founders/execs)",
                  "Direct access to pre-qualified prospects (0-12 months)",
                  "Audience surveyed on jurisdiction, budget & timeline",
                  "8-10 selected partners per event - no overcrowding",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border border-carbon-200 bg-carbon-50 hover:border-lime-300 hover:bg-lime-50 transition-all duration-200">
                    <span className="font-black text-sm flex-shrink-0 mt-0.5" style={{ color: "#9ef01a" }}>&rarr;</span>
                    <p className="text-xs text-carbon-700 font-semibold leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PARTNERS ENGAGEMENT TIMELINE — standalone section */}
      <section id="engagement-timeline" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">15b / 18</span>
        <div className="wrap">
          <AnimatedSection delay={80}>
            <div className="rounded-2xl border border-carbon-200 bg-white overflow-hidden">
              <div className="px-7 pt-7 pb-5 border-b border-carbon-100">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#9ef01a" }}>Partners Engagement</p>
                <h3 className="font-black text-carbon-900 mb-2" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.5px" }}>PARTNERS ENGAGEMENT</h3>
                <p className="text-carbon-500 max-w-2xl text-sm leading-relaxed">
                  Our partners get direct access to real data on audience behavior, investment interests, and mobility trends - the kind of intelligence that drives deals.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-0">
                <Phase
                  label="Pre Event Exposure"
                  bg="white"
                  badgeBg="#9ef01a"
                  badgeColor="#111827"
                  items={["Geo-targeted video ads (Impressions & CPM)", "Press release metrics and reach", "Registration driven by ads (UTM)", "CTR to landing page"]}
                />
                <Phase
                  label="Event Brand Awareness"
                  bg="#fefce8"
                  badgeBg="#fde047"
                  badgeColor="#713f12"
                  items={["Keynote or panel Talk", "Partner logo during live-stream", "Free lead offer (ebook, consult, QR scan)", "Social mentions using event hashtag", "Live sessions viewers"]}
                />
                <Phase
                  label="Post Event Engagement"
                  bg="#eff6ff"
                  badgeBg="#bfdbfe"
                  badgeColor="#1e3a8a"
                  items={["Full attendee survey", "Behavior and interest data", "Dedicated email broadcast and Articles", "Number of qualified leads", "Open and Click CTR data"]}
                />
              </div>
              <div className="px-7 py-5 border-t border-carbon-100" style={{ background: "#f9fafb" }}>
                <p className="text-sm font-bold text-carbon-900 text-center mb-4">
                  Partnership Engagement Timeline 8-12 Weeks (From Pre to Post Event)
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-carbon-400 flex-shrink-0">Week 1</span>
                  <div className="flex-1 h-2 rounded-full" style={{ background: "linear-gradient(90deg, #9ef01a 0%, #fde047 50%, #93c5fd 100%)" }} />
                  <span className="text-xs font-bold text-carbon-400 flex-shrink-0">Week 12</span>
                </div>
                <div className="flex justify-between px-2 mb-2">
                  <span className="text-xs font-semibold" style={{ color: "#3d8000" }}>Pre Event</span>
                  <span className="text-xs font-semibold" style={{ color: "#713f12" }}>Event Day</span>
                  <span className="text-xs font-semibold" style={{ color: "#1e3a8a" }}>Post Event</span>
                </div>
                <p className="text-center text-xs text-carbon-400 mt-2">
                  Brand Integration includes full 8-12 week presence - not just the event day
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* PRICING — BRAND INTEGRATION */}
      <section id="pricing-brand" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <span className="slide-number">16 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Pricing · Brand Integration</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Brand Integration Partnership</h2>
            <p className="text-carbon-500 mb-8">An 8–12 week full summit integration — from pre-event content to summit exposure and post-event data.</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="bg-white border border-carbon-200 rounded-xl overflow-hidden mb-6">
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
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100" style={{ background: "rgba(158,240,26,0.02)" }}><Cell val={item.g} /></td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100"><Cell val={item.s} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative rounded-xl p-6 overflow-hidden" style={{ background: "#f3ffe3", border: "1px solid #b5f55a" }}>
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">GROWTH · Early Bird</p>
                <AnimatedGradientText className="text-4xl font-black tracking-tight">$3,950</AnimatedGradientText>
                <p className="text-xs text-carbon-400 mt-1 mb-4">Standard (May 31st): <span className="line-through">$4,950</span></p>
                <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerDuration="1.6s">Claim Growth Slot →</ShimmerButton>
              </div>
              <div className="relative bento-card p-6 overflow-hidden">
                <BorderBeam size={150} duration={12} colorFrom="#9ef01a" colorTo="#4ade80" borderWidth={1.5} />
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">STRATEGIC · Early Bird</p>
                <span className="text-4xl font-black text-carbon-900 tracking-tight">$5,950</span>
                <p className="text-xs text-carbon-400 mt-1 mb-4">Standard (May 31st): <span className="line-through">$6,950</span></p>
                <a href="mailto:denis@fsummit.net" className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold border border-carbon-200 text-carbon-700 hover:border-lime-300 hover:text-carbon-900 transition-all">Claim Strategic Slot →</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRICING — SPEAKING */}
      <section id="pricing-speaking" className="slide-section py-14 border-b border-carbon-100" style={{ background: "#f8fff0" }}>
        <span className="slide-number">17 / 18</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Pricing · Speaking</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Speaking & Visibility</h2>
            <p className="text-carbon-500 mb-8">Secure your speaking slot without a full partnership commitment. Limited slots per industry.</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="bg-white border border-carbon-200 rounded-xl overflow-hidden mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-carbon-50 border-b border-carbon-200">
                    <th className="px-4 py-3 text-xs font-bold text-carbon-500 uppercase tracking-wide w-1/2">Feature</th>
                    <th className="px-4 py-3 text-center w-1/4 border-l border-carbon-200" style={{ background: "#f3ffe3" }}>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#3d8000" }}>PREMIUM</span>
                        <Badge variant="lime" className="text-xs">✦ Best Choice</Badge>
                      </div>
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
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100" style={{ background: "rgba(158,240,26,0.03)" }}><Cell val={item.p} /></td>
                          <td className="px-4 py-2.5 text-center border-l border-carbon-100"><Cell val={item.b} /></td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative bento-card p-6 overflow-hidden" style={{ border: "2px solid #9ef01a", background: "#f8fff0" }}>
                <BorderBeam size={120} duration={10} colorFrom="#9ef01a" colorTo="#4ade80" borderWidth={2} />
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest">PREMIUM · Early Bird</p>
                  <Badge variant="lime" className="text-xs">✦ Best Choice</Badge>
                </div>
<AnimatedGradientText className="text-4xl font-black tracking-tight">$2,150</AnimatedGradientText>
                <p className="text-xs text-carbon-400 mt-1 mb-4">Standard (May 31st): <span className="line-through">$2,650</span></p>
                <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerDuration="1.6s">Claim Premium Slot →</ShimmerButton>
              </div>
              <div className="bento-card p-6">
                <p className="text-xs font-bold text-carbon-400 uppercase tracking-widest mb-2">BUSINESS · Early Bird</p>
                <span className="text-4xl font-black text-carbon-900 tracking-tight">$1,750</span>
                <p className="text-xs text-carbon-400 mt-1 mb-4">Standard (May 31st): <span className="line-through">$2,250</span></p>
                <a href="mailto:denis@fsummit.net" className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold border border-carbon-200 text-carbon-700 hover:border-lime-300 hover:text-carbon-900 transition-all">Claim Business Slot →</a>
              </div>
            </div>
          </AnimatedSection>


          {/* READY TO PARTNER — directly under CTA */}
          <AnimatedSection delay={320}>
            <div className="mt-5 rounded-2xl border border-carbon-200 bg-white p-6 md:p-8">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#9ef01a" }}>Contact</p>
                <h3 className="text-2xl font-black text-carbon-900 mb-2" style={{ letterSpacing: "-0.5px" }}>Ready to Partner?</h3>
                <p className="text-sm text-carbon-500 mb-5">We only work with <strong className="text-carbon-900">8–10 selected partners per event.</strong> Reach out now to secure your slot before the Early Bird deadline on May 31st.</p>
                <ShimmerButton href="mailto:denis@fsummit.net" background="#9ef01a" shimmerColor="rgba(255,255,255,0.4)" shimmerDuration="1.8s" className="text-sm font-bold px-6 py-3">
                  Become a Partner →
                </ShimmerButton>
              </div>
              {/* Benefit boxes — highlighted 2-col grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {[
                  "Data-driven virtual summit - real intent signals",
                  "100% global distribution and media exposure",
                  "Full funnel intent tracking from day one",
                  "Exclusivity per category and jurisdiction",
                  "Decision-maker dominant audience (75% founders/execs)",
                  "Direct access to pre-qualified prospects (0-12 months)",
                  "Audience surveyed on jurisdiction, budget & timeline",
                  "8-10 selected partners per event - no overcrowding",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border border-carbon-200 bg-carbon-50 hover:border-lime-300 hover:bg-lime-50 transition-all duration-200">
                    <span className="font-black text-sm flex-shrink-0 mt-0.5" style={{ color: "#9ef01a" }}>&rarr;</span>
                    <p className="text-xs text-carbon-700 font-semibold leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
