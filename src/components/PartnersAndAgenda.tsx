"use client";
import AnimatedSection from "./AnimatedSection";

const prevPartners = [
  "Estonia e-Residency", "Insured Nomads", "Binance", "Globalization Partners",
  "Startup Island", "In.Corp", "Evercoach by Mindvalley", "Spaces",
  "SafetyWing", "Upwork", "Ruul", "Cinvest", "NomadCruise", "EC Holdings", "TravelMBA",
];

const prevSpeakers = [
  { name: "Pandu Biasramadhan", org: "Senior CM · InCorp Indonesia", init: "PB" },
  { name: "Philippe A. May", org: "Founder EC Holdings · SG", init: "PM" },
  { name: "Sergei Zunajev", org: "e-Residency of Estonia", init: "SZ" },
  { name: "David Cantor", org: "CitizenRemote · Italy", init: "DC" },
  { name: "William Wang", org: "RNS.ID · Palau", init: "WW" },
  { name: "Max Chernov", org: "YouTuber · Singapore", init: "MC" },
  { name: "Alex Recouso", org: "Co-Founder Citizen X Global", init: "AR" },
  { name: "Mohammed Ungsi", org: "Embassy of Indonesia · Abu Dhabi", init: "MU" },
  { name: "Kristin Surak", org: "Prof. London School of Economics", init: "KS" },
  { name: "Deniz Kozakci", org: "Turkish Business Council UAE", init: "DK" },
];

const mediaOutlets = [
  "Khaleej Times", "Gulf News", "EIN Presswire", "Associated Press",
  "Dezan Shira", "CoinMarketCap", "Al Bayan", "Hala London TV",
  "Thailand Business News", "ASEAN Briefing", "GCC Business News", "Emirati Times",
];

const agenda = {
  day1: [
    { num: 1, time: "30 min", topic: "How Founders and Investors Actually Enter the U.S. in 2026", type: "Keynote 1" },
    { num: 2, time: "45 min", topic: "Company Setup in the U.S.: The Hidden Gate Behind Most Visas", type: "Keynote 2" },
    { num: 3, time: "30 min", topic: "Why India, Vietnam & Southeast Asia Are Betting on the U.S.", type: "Keynote 3" },
    { num: 4, time: "45 min", topic: "Moving Money and Families Safely. EB-5 Overview", type: "Keynote 4" },
    { num: 5, time: "60 min", topic: "Inbound Capital & Real Estate: Why Foreign Investors Buy U.S. Property First", type: "Panel Talk 1" },
  ],
  day2: [
    { num: 1, time: "30 min", topic: "EU Residency Programs & Top CBI Programs for 2026 for US Citizens", type: "Keynote 5" },
    { num: 2, time: "45 min", topic: "Legal Tax Optimization for U.S. Citizens Abroad", type: "Keynote 6" },
    { num: 3, time: "30 min", topic: "Global Real Estate Investments Opportunities", type: "Keynote 7" },
    { num: 4, time: "45 min", topic: "Second Passports Americans Are Actually Buying", type: "Keynote 8" },
    { num: 5, time: "60 min", topic: "Designing a Plan B That Actually Works", type: "Panel Talk 2" },
  ],
};

export default function PartnersAndAgenda() {
  return (
    <>
      {/* PREVIOUS PARTNERS */}
      <section
        id="partners-prev"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#0A0A0A" }}
      >
        <div
          className="absolute inset-0 pointer-events-none grid-bg opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Track Record
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 09</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="font-black tracking-tighter mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              Our Previous Partners
            </h2>
            <p className="mb-12 text-base" style={{ color: "rgba(255,255,255,0.4)", maxWidth: "500px" }}>
              Trusted by global brands across mobility, fintech, real estate and legal sectors
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-16">
            {prevPartners.map((p, i) => (
              <AnimatedSection key={i} animation="scale-in" delay={i * 50}>
                <div
                  className="rounded-xl px-4 py-5 text-center text-xs font-bold h-full flex items-center justify-center hover:border-lime-400/40 transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                    minHeight: "70px",
                  }}
                >
                  {p}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Previous speakers */}
          <AnimatedSection animation="fade-up" delay={300}>
            <h3 className="font-black text-xl mb-8">Our Previous Speakers</h3>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {prevSpeakers.map((s, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 60}>
                <div className="text-center group">
                  <div
                    className="w-full aspect-square rounded-2xl flex items-center justify-center font-black text-xl mb-3 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#ADFF2F",
                    }}
                  >
                    {s.init}
                  </div>
                  <p className="text-xs font-black text-white">{s.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.org}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Media coverage */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="border-t pt-10" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>
                Media Coverage
              </p>
              <div className="flex flex-wrap gap-3">
                {mediaOutlets.map((m, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold"
                    style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* AGENDA */}
      <section
        id="agenda"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "#0d0d0d" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(173,255,47,0.04) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-12">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: "#ADFF2F", color: "#0A0A0A" }}>
                Summit Agenda
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>Slide 10</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="font-black tracking-tighter mb-2" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              27–28 June 2026
            </h2>
            <p className="text-base mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
              11 AM to 3 PM (Eastern Standard Time) · Virtual Worldwide
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { label: "Day 1: Inbound Mobility to the US", color: "#ADFF2F", sessions: agenda.day1 },
              { label: "Day 2: Outbound Mobility from the US", color: "#FFB3C1", sessions: agenda.day2 },
            ].map((day, di) => (
              <div key={di}>
                <AnimatedSection animation="fade-up" delay={200 + di * 100}>
                  <div
                    className="inline-block px-4 py-2 rounded-lg text-xs font-black mb-6"
                    style={{ background: `${day.color}18`, color: day.color, border: `1px solid ${day.color}30` }}
                  >
                    {day.label}
                  </div>
                </AnimatedSection>
                <div className="space-y-3">
                  {day.sessions.map((s, i) => (
                    <AnimatedSection key={i} animation="slide-left" delay={300 + di * 100 + i * 80}>
                      <div
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/3 transition-all"
                        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <span className="font-black text-lg min-w-[28px]" style={{ color: "rgba(255,255,255,0.2)" }}>{s.num}</span>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-white leading-snug">{s.topic}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded"
                            style={{ background: `${day.color}18`, color: day.color }}
                          >
                            {s.type}
                          </span>
                          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{s.time}</span>
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
