"use client";
import AnimatedSection from "./AnimatedSection";

const prevPartners = ["Estonia e-Residency","Insured Nomads","Binance","Globalization Partners","Startup Island","In.Corp","Evercoach by Mindvalley","Spaces","SafetyWing","Upwork","Ruul","Cinvest","NomadCruise","EC Holdings","TravelMBA"];
const prevSpeakers = [
  { name: "Pandu Biasramadhan", org: "InCorp Indonesia", init: "PB" },
  { name: "Philippe A. May", org: "EC Holdings · SG", init: "PM" },
  { name: "Sergei Zunajev", org: "e-Residency of Estonia", init: "SZ" },
  { name: "David Cantor", org: "CitizenRemote · Italy", init: "DC" },
  { name: "William Wang", org: "RNS.ID · Palau", init: "WW" },
  { name: "Max Chernov", org: "YouTuber · Singapore", init: "MC" },
  { name: "Alex Recouso", org: "Citizen X Global", init: "AR" },
  { name: "Mohammed Ungsi", org: "Embassy Indonesia · UAE", init: "MU" },
  { name: "Kristin Surak", org: "London School of Economics", init: "KS" },
  { name: "Deniz Kozakci", org: "Turkish Business Council UAE", init: "DK" },
];
const mediaOutlets = ["Khaleej Times","Gulf News","EIN Presswire","Associated Press","Dezan Shira","CoinMarketCap","Al Bayan","Hala London TV","Thailand Business News","ASEAN Briefing"];
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
      <section id="partners-prev" className="py-14 border-b border-gray-100 bg-gray-50">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Track Record</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Our Previous Partners</h2>
            <p className="text-gray-500 mb-8">Trusted by global brands across mobility, fintech, real estate and legal sectors</p>
          </AnimatedSection>
          <AnimatedSection delay={80}>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-10">
              {prevPartners.map((p, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl py-3 px-3 text-center text-xs font-semibold text-gray-600 hover:border-gray-300 transition-colors">{p}</div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="font-bold text-gray-900 mb-5">Our Previous Speakers</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
              {prevSpeakers.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm mx-auto mb-2 text-white bg-green-600">{s.init}</div>
                  <p className="text-xs font-bold text-gray-900">{s.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.org}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={220}>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Media Coverage</p>
            <div className="flex flex-wrap gap-2">
              {mediaOutlets.map((m, i) => (
                <span key={i} className="px-2.5 py-1 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-500">{m}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="agenda" className="py-14 border-b border-gray-100 bg-white">
        <div className="wrap">
          <AnimatedSection>
            <span className="section-label">Summit Agenda</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-1" style={{ letterSpacing: "-0.5px" }}>27–28 June 2026</h2>
            <p className="text-gray-500 mb-8">11 AM to 3 PM (Eastern Standard Time) · Virtual Worldwide</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "Day 1: Inbound Mobility to the US", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0", sessions: agenda.day1 },
              { label: "Day 2: Outbound Mobility from the US", color: "#9333ea", bg: "#faf5ff", border: "#e9d5ff", sessions: agenda.day2 },
            ].map((day, di) => (
              <div key={di}>
                <AnimatedSection delay={di * 80}>
                  <div className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold mb-5" style={{ background: day.bg, color: day.color, border: `1px solid ${day.border}` }}>{day.label}</div>
                </AnimatedSection>
                <div className="space-y-2">
                  {day.sessions.map((s, i) => (
                    <AnimatedSection key={i} delay={80 + di * 80 + i * 55}>
                      <div className="card hover:shadow-sm transition-shadow">
                        <div className="flex items-start gap-3">
                          <span className="font-black text-lg text-gray-200 w-5 flex-shrink-0">{s.num}</span>
                          <p className="text-sm font-medium text-gray-800 flex-1 leading-snug">{s.topic}</p>
                          <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-2">
                            <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: day.bg, color: day.color }}>{s.type}</span>
                            <span className="text-xs text-gray-400">{s.time}</span>
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
