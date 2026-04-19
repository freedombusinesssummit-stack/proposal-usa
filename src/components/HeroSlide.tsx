"use client";
import { useEffect, useState } from "react";
import CountUp from "./CountUp";

export default function HeroSlide() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
      style={{ background: "#0A0A0A" }}
    >
      {/* Animated background orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(173,255,47,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(173,255,47,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Grid lines decorative */}
      <div
        className="absolute top-0 right-0 w-px h-full opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, #ADFF2F, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-8 transition-all duration-700"
              style={{
                background: "rgba(173,255,47,0.1)",
                border: "1px solid rgba(173,255,47,0.3)",
                color: "#ADFF2F",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              Virtual Event · 27–28 June 2026 · Speaking & Partnership
            </div>

            {/* Main title */}
            <h1
              className="font-black leading-none tracking-tighter mb-6 transition-all duration-700 delay-100"
              style={{
                fontSize: "clamp(48px, 6vw, 80px)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
              }}
            >
              FREEDOM
              <br />
              <span style={{ color: "#ADFF2F" }}>BUSINESS</span>
              <br />
              SUMMIT 2026
            </h1>

            <h2
              className="font-black tracking-tight mb-4 transition-all duration-700 delay-200"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "rgba(255,255,255,0.5)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(30px)",
              }}
            >
              USA Mobility Edition 🇺🇸
            </h2>

            <p
              className="text-sm font-semibold uppercase tracking-widest mb-8 transition-all duration-700 delay-300"
              style={{
                color: "rgba(255,255,255,0.35)",
                opacity: loaded ? 1 : 0,
              }}
            >
              A Data-Driven Virtual Summit for Founders & Investors Exploring Inbound & Outbound Strategies
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-3 mb-12 transition-all duration-700 delay-500"
              style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)" }}
            >
              <a
                href="mailto:denis@fsummit.net"
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 lime-glow"
                style={{ background: "#ADFF2F", color: "#0A0A0A" }}
              >
                Partner With Us →
              </a>
              <a
                href="#packages"
                onClick={(e) => { e.preventDefault(); document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-xl font-bold text-sm glass transition-all duration-200 hover:bg-white/10"
              >
                View Packages
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}
              >
                Request Speaking Access
              </a>
            </div>
          </div>

          {/* Right — Stats card */}
          <div
            className="transition-all duration-700 delay-400"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)" }}
          >
            {/* Main stats card */}
            <div
              className="rounded-2xl p-8 mb-4"
              style={{
                background: "rgba(173,255,47,0.04)",
                border: "1px solid rgba(173,255,47,0.15)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
                March 2026 Edition Results
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: 364, suffix: "+", label: "Unique Registrations" },
                  { val: 110, suffix: "K", label: "Ad Reach" },
                  { val: 97, suffix: "", label: "Intent Surveys" },
                  { val: 4.9, suffix: "★", label: "Attendee Rating" },
                ].map((s, i) => (
                  <div key={i}>
                    <div
                      className="font-black tracking-tighter leading-none mb-1"
                      style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "#ADFF2F" }}
                    >
                      <CountUp end={s.val} suffix={s.suffix} decimals={s.suffix === "★" ? 1 : 0} />
                    </div>
                    <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Event info row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "📅", val: "27–28 June", label: "2026" },
                { icon: "🌐", val: "Virtual", label: "Worldwide" },
                { icon: "📊", val: "Data-Driven", label: "Intelligence" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="text-xs font-black text-white">{item.val}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-700"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {[
            { num: "10.2K", label: "Email List Audience" },
            { num: "33–52%", label: "Email Open Rate" },
            { num: "452", label: "Engaged Video Views" },
            { num: "30+", label: "Countries Represented" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-black text-2xl tracking-tight" style={{ color: "#ADFF2F" }}>{s.num}</div>
              <div className="text-xs font-medium mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-12">
          <div
            className="flex flex-col items-center gap-2 animate-bounce"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
