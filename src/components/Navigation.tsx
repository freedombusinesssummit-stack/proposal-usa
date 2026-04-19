"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About" },
  { id: "numbers", label: "Numbers" },
  { id: "audience", label: "Audience" },
  { id: "intel", label: "Data Layer" },
  { id: "funnel", label: "Funnel" },
  { id: "snapshot", label: "Snapshot" },
  { id: "behavioral", label: "Insights" },
  { id: "partners-prev", label: "Partners" },
  { id: "agenda", label: "Agenda" },
  { id: "packages", label: "Packages" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = SLIDES.map((s) => document.getElementById(s.id));
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setActive(SLIDES[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,10,10,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-black text-sm"
              style={{ background: "#ADFF2F" }}
            >
              FS
            </div>
            <span className="font-black text-white text-sm tracking-tight hidden sm:block">
              FREEDOM SUMMIT
            </span>
          </div>

          {/* Center links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { id: "about", label: "About" },
              { id: "audience", label: "Audience" },
              { id: "agenda", label: "Agenda" },
              { id: "packages", label: "Packages" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium transition-colors"
                style={{
                  color: active === link.id ? "#ADFF2F" : "rgba(255,255,255,0.5)",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:denis@fsummit.net"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105"
            style={{ background: "#ADFF2F", color: "#0A0A0A" }}
          >
            Partner With Us →
          </a>

          {/* Mobile menu */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 space-y-1">
              <span className="block h-0.5 bg-white transition-all" style={{transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none'}}/>
              <span className="block h-0.5 bg-white transition-all" style={{opacity: menuOpen ? 0 : 1}}/>
              <span className="block h-0.5 bg-white transition-all" style={{transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'}}/>
            </div>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/95 py-4">
            {SLIDES.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="w-full text-left px-6 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Right side progress dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2 items-center">
        {SLIDES.map((slide) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(slide.id)}
            title={slide.label}
            className="progress-dot"
            style={{
              background:
                active === slide.id ? "#ADFF2F" : "rgba(255,255,255,0.2)",
              width: "6px",
              height: active === slide.id ? "20px" : "6px",
              borderRadius: "3px",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </>
  );
}
