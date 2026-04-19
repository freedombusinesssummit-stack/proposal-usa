"use client";
import { useEffect, useState } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WordFadeIn } from "@/components/magicui/word-fade-in";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

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
    <div className="flex items-end gap-0.5">
      {[{ val: pad(t.d), label: "days" }, { val: pad(t.h), label: "hrs" }, { val: pad(t.m), label: "min" }, { val: pad(t.s), label: "sec" }].map((seg, i) => (
        <div key={i} className="flex items-end">
          <div className="text-center">
            <div className="font-black text-carbon-900 leading-none tabular-nums" style={{ fontSize: "clamp(36px, 10vw, 64px)", letterSpacing: "-1px" }}>{seg.val}</div>
            <div className="text-xs font-medium text-carbon-400 mt-0.5">{seg.label}</div>
          </div>
          {i < 3 && <span className="font-black mx-1 mb-5" style={{ fontSize: "clamp(28px, 8vw, 48px)", color: "#9ef01a", lineHeight: 1 }}>:</span>}
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
const AVATARS = ["DD","PM","SZ","DC","WW","MC","AR","MU"];

export default function HeroSlide() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);
  const fade = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section id="hero" className="pt-14 bg-white overflow-x-hidden">
      <div className="wrap">
        <div className="py-10 md:py-16">

          {/* Dark pills */}
          <div className="flex flex-wrap gap-2 mb-6" style={fade(0)}>
            {["27-28 June 2026", "Virtual Event", "Worldwide Online"].map((t, i) => (
              <span key={i} className="pill">{t}</span>
            ))}
          </div>

          {/* Subtitle line */}
          <div style={fade(80)}>
            <p className="text-base md:text-lg font-semibold text-carbon-400 mb-1">Freedom Business Summit 2026</p>
          </div>

          {/* Big heading with WordFadeIn */}
          <div className="mb-4" style={fade(120)}>
            <h1 className="font-black text-carbon-900 leading-[0.95]" style={{ fontSize: "clamp(38px, 8vw, 86px)", letterSpacing: "-2px" }}>
              <WordFadeIn text="USA Mobility Edition 🇺🇸" delay={60} />
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-5" style={fade(200)}>
            <h2 className="font-semibold text-carbon-600 leading-snug" style={{ fontSize: "clamp(15px, 2.2vw, 22px)", maxWidth: 560 }}>
              A Data-Driven Virtual Summit for Founders, Investors Exploring Inbound & Outbound Strategies
            </h2>
          </div>

          {/* Bullets */}
          <div className="flex flex-col gap-1.5 mb-6" style={fade(240)}>
            {[
              { bold: "2 days", text: "of content you won't find anywhere" },
              { bold: "10+", text: "keynotes and talks by industry experts" },
            ].map((b, i) => (
              <p key={i} className="text-carbon-600 text-sm md:text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#9ef01a" }} />
                <strong className="text-carbon-900">{b.bold}</strong>&nbsp;{b.text}
              </p>
            ))}
          </div>

          {/* Early bird tag */}
          <div className="mb-4" style={fade(290)}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold" style={{ background: "#111827", color: "#9ef01a" }}>
              <span className="w-2 h-2 rounded-full bg-lime-300 animate-pulse flex-shrink-0" />
              Get Early Bird Access! Act Fast
            </span>
          </div>

          {/* Countdown */}
          <div className="mb-7" style={fade(340)}><Countdown /></div>

          {/* CTAs — ShimmerButton */}
          <div className="flex flex-wrap gap-3 mb-8" style={fade(390)}>
            <ShimmerButton
              href="mailto:denis@fsummit.net"
              background="#9ef01a"
              shimmerColor="rgba(255,255,255,0.5)"
              shimmerDuration="1.8s"
              className="text-sm font-bold px-5 py-2.5"
            >
              Partner With Us →
            </ShimmerButton>
            <button
              onClick={() => document.getElementById("pricing-brand")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-carbon-700 border border-carbon-200 hover:border-lime-300 hover:text-carbon-900 transition-all bg-white"
            >
              View Packages
            </button>
          </div>

          {/* Avatars */}
          <div className="mb-2" style={fade(430)}>
            <div className="flex -space-x-2.5">
              {AVATARS.map((init, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: `hsl(${125 + i * 18}, 50%, 32%)`, zIndex: AVATARS.length - i }}>
                  {init}
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2" style={fade(470)}>
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-black text-carbon-900 text-sm">4.9</span>
            <span className="text-carbon-400 text-xs">(Previous Attendees Feedback)</span>
          </div>
        </div>
      </div>

      {/* Meta strip */}
      <div className="border-t border-carbon-100">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-4">
            {META.map((m, i) => (
              <div key={i}
                className="flex items-center gap-2.5 p-3 md:p-4 rounded-xl border border-carbon-200 bg-white hover:border-lime-300 hover:bg-lime-50 transition-all duration-200 group"
                style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(10px)", transition: `all 0.55s ease ${520 + i * 80}ms` }}>
                <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{m.icon}</span>
                <span className="font-semibold text-xs md:text-sm text-carbon-700 leading-tight">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
