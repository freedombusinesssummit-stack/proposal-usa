"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
            <div className="text-xs font-medium text-carbon-400 mt-0.5 text-center">{seg.label}</div>
          </div>
          {i < 3 && <span className="font-black mx-1 mb-5" style={{ fontSize: "clamp(28px, 8vw, 52px)", color: "#9ef01a", lineHeight: 1 }}>:</span>}
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

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-6" style={fade(0)}>
            <Badge variant="dark">27-28 June 2026</Badge>
            <Badge variant="dark">Virtual Event</Badge>
            <Badge variant="dark">Worldwide Online</Badge>
          </div>

          {/* Heading */}
          <div style={fade(100)}>
            <p className="text-base md:text-lg font-semibold text-carbon-400 mb-1 tracking-tight">Freedom Business Summit 2026</p>
            <h1 className="font-black text-carbon-900 leading-[0.95] mb-4" style={{ fontSize: "clamp(38px, 8vw, 86px)", letterSpacing: "-2px" }}>
              USA Mobility<br />Edition 🇺🇸
            </h1>
            <h2 className="font-semibold text-carbon-600 leading-snug mb-5" style={{ fontSize: "clamp(15px, 2.2vw, 22px)", maxWidth: 560 }}>
              A Data-Driven Virtual Summit for Founders, Investors Exploring Inbound & Outbound Strategies
            </h2>
          </div>

          {/* Bullets */}
          <div className="flex flex-col gap-1.5 mb-6" style={fade(180)}>
            <p className="text-carbon-600 text-sm md:text-base flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ background: "#9ef01a" }} />
              <strong className="text-carbon-900">2 days</strong>&nbsp;of content you won't find anywhere
            </p>
            <p className="text-carbon-600 text-sm md:text-base flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ background: "#9ef01a" }} />
              <strong className="text-carbon-900">10+</strong>&nbsp;keynotes and talks by industry experts
            </p>
          </div>

          {/* Early bird */}
          <div className="mb-4" style={fade(240)}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold" style={{ background: "#111827", color: "#9ef01a" }}>
              <span className="w-2 h-2 rounded-full bg-lime-300 animate-pulse" />
              Get Early Bird Access! Act Fast
            </span>
          </div>

          {/* Countdown */}
          <div className="mb-7" style={fade(300)}><Countdown /></div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8" style={fade(360)}>
            <Button size="lg" variant="default" asChild>
              <a href="mailto:denis@fsummit.net">Partner With Us →</a>
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}>
              View Packages
            </Button>
          </div>

          {/* Avatars */}
          <div className="mb-2" style={fade(400)}>
            <div className="flex -space-x-2.5">
              {AVATARS.map((init, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black flex-shrink-0 ring-1 ring-white/20"
                  style={{ background: `hsl(${125 + i * 18}, 50%, 32%)`, zIndex: AVATARS.length - i }}>
                  {init}
                </div>
              ))}
            </div>
          </div>

          {/* Rating under avatars */}
          <div className="flex items-center gap-2" style={fade(440)}>
            <span className="text-yellow-400">★★★★★</span>
            <span className="font-black text-carbon-900 text-sm">4.9</span>
            <span className="text-carbon-400 text-xs">(Previous Attendees Feedback)</span>
          </div>
        </div>
      </div>

      {/* Meta stats strip */}
      <div className="border-t border-carbon-100">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-4">
            {META.map((m, i) => (
              <div key={i}
                className="flex items-center gap-2.5 p-3 md:p-4 rounded-xl border border-carbon-200 bg-white hover:border-lime-300 hover:bg-lime-50 transition-all duration-200 cursor-default group"
                style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(10px)", transition: `all 0.5s ease ${500 + i * 80}ms` }}>
                <span className="text-xl md:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{m.icon}</span>
                <span className="font-semibold text-xs md:text-sm text-carbon-700 leading-tight">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
