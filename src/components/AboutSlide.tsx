"use client";
import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";

export default function AboutSlide() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-16 border-b border-gray-100">
        <div className="container">
          <AnimatedSection>
            <p className="section-label">About the Event</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-6" style={{ letterSpacing: "-0.5px" }}>
              What is FBS USA Mobility Edition?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <AnimatedSection delay={100}>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Freedom Business Summit USA Edition is our <strong className="text-gray-900">2nd event focusing on the American market</strong> — the most predictable, scalable, and commercially valuable region in global mobility and investment migration.</p>
                <p>A two-day <strong className="text-gray-900">global virtual event</strong> focused on US inbound and outbound mobility strategies for founders, investors, and globally mobile individuals.</p>
                <div className="card-muted mt-6">
                  <p className="text-sm font-semibold text-green-DEFAULT">📊 For speakers: full access to audience insights, segmented leads & intent signals</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="space-y-3">
                <div className="card">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">→</span>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Outbound Mobility</p>
                      <p className="text-sm text-gray-600">Americans seeking tax reduction, Plan B, or renouncing citizenship. Focus on CBI/RBI Programs (Caribbean), Tax-Advantaged Residency (Portugal, LATAM)</p>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ borderColor: "#bbf7d0", background: "#f0fdf4" }}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5" style={{ color: "#16a34a" }}>←</span>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Inbound Mobility</p>
                      <p className="text-sm text-gray-600">HNWI from India, China, and Southeast Asia seeking U.S. residency/visas for capital protection. Focus on EB-5, E-2 Investment Visas</p>
                    </div>
                  </div>
                </div>
                <div className="card-muted">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Key Topics</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {["🇺🇸 US Visas & Market Access", "🌍 Second Passports & CBI", "🏢 Company Structures & Tax", "🏠 Global Real Estate", "✈️ Legal Tax Optimization", "📍 Where Americans Move"].map((t, i) => (
                      <div key={i} className="text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md py-1.5 px-2.5">{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section id="numbers" className="py-16 border-b border-gray-100" style={{ background: "#f9fafb" }}>
        <div className="container">
          <AnimatedSection>
            <p className="section-label">By the Numbers</p>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-8" style={{ letterSpacing: "-0.5px" }}>
              Freedom Summit Performance
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { val: 364, suffix: "+", label: "Unique Registrations", green: true },
              { val: 97, suffix: "", label: "Survey Submissions", green: true },
              { val: 152, suffix: "", label: "Live Attendees", green: true },
              { val: 110880, suffix: "", label: "Paid Ads Reach (unique)" },
              { val: 109906, suffix: "", label: "Unique Impressions" },
              { val: 3381, suffix: "", label: "Unique Clicks" },
              { val: 10, suffix: ".2K", label: "Email List Audience", green: true },
              { raw: "33–52%", label: "Email Open Rate", green: true },
              { val: 452, suffix: "", label: "Engaged Video Views", green: true },
            ].map((n, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="card hover:shadow-sm transition-shadow">
                  <div className="font-black text-2xl tracking-tight mb-1" style={{ color: n.green ? "#16a34a" : "#111827" }}>
                    {n.raw ? n.raw : <CountUp end={n.val!} suffix={n.suffix} />}
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{n.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {[
                { val: "500–700", label: "Expected Attendees" },
                { val: "2 Days", label: "Live Stream" },
                { val: "8", label: "Keynote Talks" },
                { val: "2", label: "Panel Discussions" },
              ].map((item, i) => (
                <div key={i} className="card text-center">
                  <div className="font-black text-2xl tracking-tight mb-1" style={{ color: "#16a34a" }}>{item.val}</div>
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
