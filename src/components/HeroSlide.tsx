"use client";
import { useEffect, useState } from "react";
import CountUp from "./CountUp";

export default function HeroSlide() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  const t = (d: number) => ({ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: `opacity 0.6s ease ${d}ms, transform 0.6s ease ${d}ms` });

  return (
    <section id="hero" className="pt-14" style={{ background: "#fff" }}>
      {/* Top banner */}
      <div style={{ background: "#f0fdf4", borderBottom: "1px solid #bbf7d0" }}>
        <div className="container">
          <div className="flex items-center gap-3 py-2.5 flex-wrap">
            <span className="badge">Virtual Event · 27–28 June 2026</span>
            <span className="badge">Speaking & Partnership Engagement</span>
            <span className="text-xs text-gray-500 ml-auto font-medium">fsummit.net</span>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="container">
        <div className="py-16 border-b border-gray-100">
          <div style={t(0)}>
            <p className="section-label mb-3">Freedom Business Summit 2026</p>
            <h1 className="font-black tracking-tight text-gray-900 leading-tight mb-3" style={{ fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "-1.5px" }}>
              USA Mobility Edition 🇺🇸
            </h1>
            <p className="text-lg text-gray-500 font-medium mb-8 max-w-xl leading-relaxed">
              A data-driven virtual summit for founders, investors and globally mobile individuals exploring inbound & outbound US mobility strategies.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12" style={t(100)}>
            <a href="mailto:denis@fsummit.net"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#16a34a" }}>
              Partner With Us →
            </a>
            <a href="#packages" onClick={e => { e.preventDefault(); document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
              View Packages
            </a>
            <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-gray-500 border border-gray-200 hover:border-gray-300 transition-all">
              Request Speaking Access
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "#e5e7eb", borderRadius: 12, overflow: "hidden", ...t(200) }}>
            {[
              { val: 364, suffix: "+", label: "Unique Registrations" },
              { val: 110, suffix: "K", label: "Ad Reach" },
              { val: 97, suffix: "", label: "Intent Surveys" },
              { rating: true, label: "Attendee Rating" },
            ].map((s, i) => (
              <div key={i} className="bg-white px-6 py-5">
                <div className="font-black text-3xl tracking-tight mb-1" style={{ color: "#16a34a" }}>
                  {s.rating ? <span>★★★★★ <span style={{ fontSize: 16 }}>4.9</span></span> : <CountUp end={s.val!} suffix={s.suffix} />}
                </div>
                <p className="text-xs text-gray-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="py-5 flex flex-wrap gap-6 items-center" style={t(300)}>
          {[
            { icon: "📅", label: "27–28 June 2026" },
            { icon: "🌐", label: "Virtual · Worldwide" },
            { icon: "🎯", label: "500–700 Expected Attendees" },
            { icon: "📊", label: "10.2K Email Audience" },
            { icon: "📬", label: "33–52% Open Rate" },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm text-gray-500">
              <span>{m.icon}</span>
              <span className="font-medium">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
