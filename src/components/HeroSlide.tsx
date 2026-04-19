"use client";
import { useEffect, useState } from "react";

// Countdown Timer
function Countdown() {
  const target = new Date("2026-06-27T11:00:00-05:00").getTime();
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center gap-3 font-black text-5xl md:text-6xl tracking-tighter text-carbon-900" style={{ letterSpacing: "-2px" }}>
      <span>{pad(t.d)}</span><span className="text-lime-300 opacity-60">:</span>
      <span>{pad(t.h)}</span><span className="text-lime-300 opacity-60">:</span>
      <span>{pad(t.m)}</span><span className="text-lime-300 opacity-60">:</span>
      <span>{pad(t.s)}</span>
    </div>
  );
}

export default function HeroSlide() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);
  const f = (d: number) => ({
    opacity: show ? 1 : 0,
    transform: show ? "none" : "translateY(16px)",
    transition: `opacity 0.6s ease ${d}ms, transform 0.6s ease ${d}ms`,
  });

  return (
    <section id="hero" className="pt-14 bg-white">
      <div className="wrap">
        <div className="py-12 md:py-16">
          {/* Date pills — like screenshot */}
          <div className="flex flex-wrap items-center gap-2 mb-8" style={f(0)}>
            <span className="pill">27-28 June 2026</span>
            <span className="pill">Virtual Event</span>
            <span className="pill">Worldwide Online</span>
          </div>

          {/* Title */}
          <div style={f(80)}>
            <h3 className="text-xl font-bold text-carbon-500 mb-1">Freedom Business Summit 2026</h3>
            <h1
              className="font-black text-carbon-900 leading-none mb-3"
              style={{ fontSize: "clamp(44px, 7vw, 84px)", letterSpacing: "-2px" }}
            >
              USA Mobility Edition 🇺🇸
            </h1>
            <h2 className="font-bold text-carbon-800 leading-snug mb-6" style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}>
              A Data-Driven Virtual Summit for Founders,<br />
              Investors Exploring Inbound & Outbound Strategies
            </h2>
          </div>

          {/* Sub-bullets */}
          <div className="flex flex-col gap-1 mb-6" style={f(150)}>
            <p className="text-carbon-600 text-base"><strong className="text-carbon-900">2 days</strong> of content you won't find anywhere</p>
            <p className="text-carbon-600 text-base"><strong className="text-carbon-900">10+</strong> keynotes and talks by industry experts</p>
          </div>

          {/* Early bird pill */}
          <div className="mb-4" style={f(200)}>
            <span
              className="inline-block px-4 py-2 rounded-lg text-sm font-bold"
              style={{ background: "#111827", color: "#9ef01a" }}
            >
              Get Early Bird Access! Act Fast
            </span>
          </div>

          {/* Countdown */}
          <div className="mb-8" style={f(250)}>
            <Countdown />
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-10" style={f(320)}>
            <a href="mailto:denis@fsummit.net" className="btn-green text-base">Partner With Us →</a>
            <button
              onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline"
            >
              View Packages
            </button>
          </div>

          {/* Rating row */}
          <div className="flex items-center gap-3" style={f(380)}>
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {["DD","PM","SZ","DC","WW","MC","AR","MU"].map((init, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black"
                  style={{ background: `hsl(${130 + i * 15}, 60%, 35%)`, zIndex: 8 - i }}
                >
                  {init}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="font-black text-carbon-900">4.9</span>
              <span className="text-carbon-500 text-sm">(Previous Attendees Feedback)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="border-t border-carbon-100 bg-carbon-50">
        <div className="wrap">
          <div className="py-4 flex flex-wrap gap-4 items-center">
            {[
              { icon: "🎯", label: "500–700 Expected Attendees" },
              { icon: "📊", label: "10.2K Email Audience" },
              { icon: "📬", label: "33–52% Open Rate" },
              { icon: "🌐", label: "30+ Countries" },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-1.5 text-sm text-carbon-500">
                <span>{m.icon}</span>
                <span className="font-medium">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
