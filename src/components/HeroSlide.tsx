"use client";
import { useEffect, useState } from "react";

function Countdown() {
  const target = new Date("2026-06-27T11:00:00-05:00").getTime();
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setT({ d: Math.floor(diff/86400000), h: Math.floor((diff%86400000)/3600000), m: Math.floor((diff%3600000)/60000), s: Math.floor((diff%60000)/1000) });
    };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-0" style={{ fontFamily: "'Inter', monospace", letterSpacing: "-1px" }}>
      {[
        { val: pad(t.d), label: "days" },
        { val: pad(t.h), label: "hrs" },
        { val: pad(t.m), label: "min" },
        { val: pad(t.s), label: "sec" },
      ].map((seg, i) => (
        <div key={i} className="flex items-center">
          <div className="text-center">
            <div className="font-black text-carbon-900 leading-none tabular-nums" style={{ fontSize: "clamp(36px, 10vw, 64px)", letterSpacing: "-1px" }}>
              {seg.val}
            </div>
            <div className="text-xs font-medium text-carbon-400 mt-0.5">{seg.label}</div>
          </div>
          {i < 3 && (
            <span className="font-black mx-1 md:mx-2 mb-4" style={{ fontSize: "clamp(28px, 8vw, 52px)", color: "#9ef01a", lineHeight: 1 }}>:</span>
          )}
        </div>
      ))}
    </div>
  );
}

const META = [
  { icon: "🎯", label: "500–700 Expected Attendees" },
  { icon: "📊", label: "10.2K Email Audience" },
  { icon: "📬", label: "33–52% Open Rate" },
  { icon: "🌐", label: "30+ Countries" },
];

export default function HeroSlide() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);
  const f = (d: number) => ({ opacity: show ? 1 : 0, transform: show ? "none" : "translateY(16px)", transition: `opacity 0.6s ease ${d}ms, transform 0.6s ease ${d}ms` });

  return (
    <section id="hero" className="pt-14 bg-white overflow-x-hidden">
      <div className="wrap">
        <div className="py-10 md:py-16">
          {/* Date pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6" style={f(0)}>
            <span className="pill">27-28 June 2026</span>
            <span className="pill">Virtual Event</span>
            <span className="pill">Worldwide Online</span>
          </div>

          {/* Title */}
          <div style={f(80)}>
            <h3 className="text-base md:text-xl font-bold text-carbon-500 mb-1">Freedom Business Summit 2026</h3>
            <h1 className="font-black text-carbon-900 leading-none mb-3" style={{ fontSize: "clamp(36px, 7vw, 84px)", letterSpacing: "-1.5px" }}>
              USA Mobility Edition 🇺🇸
            </h1>
            <h2 className="font-bold text-carbon-800 leading-snug mb-5" style={{ fontSize: "clamp(15px, 2.5vw, 24px)" }}>
              A Data-Driven Virtual Summit for Founders,{" "}
              Investors Exploring Inbound & Outbound Strategies
            </h2>
          </div>

          <div className="flex flex-col gap-1 mb-5" style={f(150)}>
            <p className="text-carbon-600 text-sm md:text-base"><strong className="text-carbon-900">2 days</strong> of content you won't find anywhere</p>
            <p className="text-carbon-600 text-sm md:text-base"><strong className="text-carbon-900">10+</strong> keynotes and talks by industry experts</p>
          </div>

          {/* Early bird pill */}
          <div className="mb-4" style={f(200)}>
            <span className="inline-block px-4 py-2 rounded-lg text-sm font-bold" style={{ background: "#111827", color: "#9ef01a" }}>
              Get Early Bird Access! Act Fast
            </span>
          </div>

          {/* Countdown — contained */}
          <div className="mb-7" style={f(250)}>
            <Countdown />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-8" style={f(320)}>
            <a href="mailto:denis@fsummit.net" className="btn-green">Partner With Us →</a>
            <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline">View Packages</button>
          </div>

          {/* Avatar stack */}
          <div className="mb-3" style={f(360)}>
            <div className="flex -space-x-2">
              {["DD","PM","SZ","DC","WW","MC","AR","MU"].map((init, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: `hsl(${130 + i * 15}, 55%, 35%)`, zIndex: 8 - i }}>
                  {init}
                </div>
              ))}
            </div>
          </div>

          {/* Rating — under avatars */}
          <div className="flex items-center gap-2" style={f(400)}>
            <span className="text-yellow-400 text-base">★★★★★</span>
            <span className="font-black text-carbon-900 text-sm">4.9</span>
            <span className="text-carbon-400 text-xs">(Previous Attendees Feedback)</span>
          </div>
        </div>
      </div>

      {/* Meta stats — 2×2 on mobile, 4 in row on desktop */}
      <div className="border-t border-carbon-100">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 py-4">
            {META.map((m, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl border border-carbon-200 bg-white">
                <span className="text-xl md:text-2xl flex-shrink-0 leading-none">{m.icon}</span>
                <span className="font-semibold text-xs md:text-sm text-carbon-700 leading-tight">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
