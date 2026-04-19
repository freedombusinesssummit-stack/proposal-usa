"use client";
import { useEffect, useState } from "react";
import CountUp from "./CountUp";

export default function HeroSlide() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  const f = (d: number) => ({
    opacity: show ? 1 : 0,
    transform: show ? "none" : "translateY(16px)",
    transition: `opacity 0.55s ease ${d}ms, transform 0.55s ease ${d}ms`,
  });

  return (
    <section id="hero" className="pt-14 bg-white">
      {/* Top banner */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="wrap">
          <div className="flex flex-wrap items-center gap-2 py-2.5">
            <span className="badge">Virtual Event · 27–28 June 2026</span>
            <span className="badge">Speaking & Partnership Engagement</span>
            <span className="text-xs text-gray-400 font-medium ml-auto">fsummit.net</span>
          </div>
        </div>
      </div>

      {/* Main hero */}
      <div className="wrap">
        <div className="py-14 border-b border-gray-100">
          <div style={f(0)}>
            <span className="section-label">Freedom Business Summit 2026</span>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-4" style={{ letterSpacing: "-1.5px" }}>
              USA Mobility Edition 🇺🇸
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              A data-driven virtual summit for founders, investors and globally mobile individuals exploring inbound & outbound US mobility strategies.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10" style={f(100)}>
            <a href="mailto:denis@fsummit.net" className="btn-green">Partner With Us →</a>
            <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline">View Packages</button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline" style={{ color: "#6b7280" }}>Request Speaking Access</button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden" style={f(200)}>
            {[
              { val: 364, suffix: "+", label: "Unique Registrations" },
              { val: 110, suffix: "K", label: "Ad Reach" },
              { val: 97, suffix: "", label: "Intent Surveys" },
              { rating: true, label: "Attendee Rating" },
            ].map((s, i) => (
              <div key={i} className={`bg-white px-6 py-5 ${i < 3 ? "border-r border-gray-100" : ""}`}>
                <div className="text-2xl font-black text-green-600 mb-1 tracking-tight">
                  {s.rating ? <span>★★★★★ <span className="text-base">4.9</span></span> : <CountUp end={s.val!} suffix={s.suffix} />}
                </div>
                <p className="text-xs text-gray-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Meta row */}
        <div className="py-4 flex flex-wrap gap-4 items-center" style={f(300)}>
          {[
            { icon: "📅", label: "27–28 June 2026" },
            { icon: "🌐", label: "Virtual · Worldwide" },
            { icon: "🎯", label: "500–700 Expected Attendees" },
            { icon: "📊", label: "10.2K Email Audience" },
            { icon: "📬", label: "33–52% Open Rate" },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm text-gray-500">
              <span>{m.icon}</span><span className="font-medium">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
