"use client";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";

const agenda = {
  day1: [
    { num: 1, time: "30 min", topic: "How Founders and Investors Actually Enter the U.S. in 2027", type: "Keynote 1" },
    { num: 2, time: "45 min", topic: "Company Setup in the U.S.: The Hidden Gate Behind Most Visas", type: "Keynote 2" },
    { num: 3, time: "30 min", topic: "Why India, Vietnam & Southeast Asia Are Betting on the U.S.", type: "Keynote 3" },
    { num: 4, time: "45 min", topic: "Moving Money and Families Safely. EB-5 Overview", type: "Keynote 4" },
    { num: 5, time: "60 min", topic: "Inbound Capital & Real Estate: Why Foreign Investors Buy U.S. Property First", type: "Panel Talk 1" },
  ],
  day2: [
    { num: 1, time: "30 min", topic: "EU Residency Programs & Top CBI Programs for 2027 for US Citizens", type: "Keynote 5" },
    { num: 2, time: "45 min", topic: "Legal Tax Optimization for U.S. Citizens Abroad", type: "Keynote 6" },
    { num: 3, time: "30 min", topic: "Global Real Estate Investments Opportunities", type: "Keynote 7" },
    { num: 4, time: "45 min", topic: "Second Passports Americans Are Actually Buying", type: "Keynote 8" },
    { num: 5, time: "60 min", topic: "Designing a Plan B That Actually Works", type: "Panel Talk 2" },
  ],
};

const LOGOS = [
  { src: "/logos/osome.svg", name: "Osome", dark: false },
  { src: "/logos/mypvip.svg", name: "MYPVIP", dark: false },
  { src: "/logos/partner1.svg", name: "Global Partner", dark: false },
  { src: "/logos/startupvisa.svg", name: "StartupVisa CA", dark: false },
  { src: "/logos/msgi.svg", name: "MSGI", dark: false },
  { src: "/logos/worldtalents.svg", name: "World Talents", dark: false },
  { src: "/logos/ntl.svg", name: "NTL", dark: false },
  { src: "/logos/eresidency.svg", name: "e-Residency", dark: false },
  { src: "/logos/partner2.svg", name: "Mobility Partner", dark: false },
  { src: "/logos/crs.svg", name: "CRS", dark: false },
  { src: "/logos/incorp.svg", name: "InCorp", dark: false },
  { src: "/logos/laca.svg", name: "LACA", dark: false },
  { src: "/logos/ocorian.svg", name: "Ocorian", dark: false },
];

function LogoChip({ logo }: { logo: typeof LOGOS[0] }) {
  return (
    <div className="flex items-center justify-center mx-3 flex-shrink-0"
      style={{ height: 48, minWidth: 120, padding: "8px 18px",
        background: "rgba(255,255,255,0.93)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 10 }}>
      <img
        src={logo.src}
        alt={logo.name}
        style={{
          height: 26,
          maxWidth: 112,
          objectFit: "contain",
          opacity: 0.9,
        }}
      />
    </div>
  );
}

export default function PartnersAndAgenda() {
  return (
    <>
      {/* AGENDA */}
      <section id="agenda" className="slide-section py-14 border-b border-carbon-100 bg-white">
        <span className="slide-number">12 / 17</span>
        <div className="wrap">
          <AnimatedSection>
            <Badge variant="success" className="mb-3">Summit Agenda</Badge>
            <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-1" style={{ letterSpacing: "-0.5px" }}>24–25 February 2027</h2>
            <p className="text-carbon-500 mb-8">11 AM to 3 PM (Eastern Standard Time) · Virtual Worldwide</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "Day 1: Inbound Mobility to the US", color: "#70e000", bg: "#f3ffe3", border: "#b5f55a", sessions: agenda.day1 },
              { label: "Day 2: Outbound Mobility from the US", color: "#9333ea", bg: "#faf5ff", border: "#e9d5ff", sessions: agenda.day2 },
            ].map((day, di) => (
              <div key={di}>
                <AnimatedSection delay={di * 80}>
                  <div className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold mb-5" style={{ background: day.bg, color: day.color, border: `1px solid ${day.border}` }}>{day.label}</div>
                </AnimatedSection>
                <div className="space-y-2">
                  {day.sessions.map((s, i) => (
                    <AnimatedSection key={i} delay={80 + di * 80 + i * 55}>
                      <div className="bento-card p-4">
                        <div className="flex items-start gap-3">
                          <span className="font-black text-lg text-carbon-200 w-5 flex-shrink-0">{s.num}</span>
                          <p className="text-sm font-medium text-carbon-800 flex-1 leading-snug">{s.topic}</p>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: day.bg, color: day.color }}>{s.type}</span>
                            <span className="text-xs text-carbon-400">{s.time}</span>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
