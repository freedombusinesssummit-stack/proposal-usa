"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About" },
  { id: "numbers", label: "Numbers" },
  { id: "audience", label: "Audience" },
  { id: "snapshot", label: "Snapshot" },
  { id: "behavioral", label: "Insights" },
  { id: "intel", label: "Data Layer" },
  { id: "funnel", label: "Funnel" },
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
      const scrollY = window.scrollY + 120;
      for (let i = SLIDES.length - 1; i >= 0; i--) {
        const el = document.getElementById(SLIDES[i].id);
        if (el && el.offsetTop <= scrollY) { setActive(SLIDES[i].id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.08 });
    document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));

    return () => { window.removeEventListener("scroll", handleScroll); observer.disconnect(); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200"
      style={{ borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent", boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md flex items-center justify-center text-white font-black text-xs" style={{ background: "#16a34a" }}>FS</div>
            <span className="font-bold text-gray-900 text-sm tracking-tight hidden sm:block">Freedom Summit</span>
          </div>

          {/* Center nav */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              { id: "about", label: "About" },
              { id: "audience", label: "Audience" },
              { id: "agenda", label: "Agenda" },
              { id: "packages", label: "Packages" },
            ].map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)}
                className="text-sm font-medium transition-colors"
                style={{ color: active === link.id ? "#16a34a" : "#6b7280" }}>
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Progress dots - visible on large screens */}
            <div className="hidden xl:flex items-center gap-1.5 mr-2">
              {SLIDES.map(s => (
                <button key={s.id} onClick={() => scrollTo(s.id)} title={s.label}
                  style={{
                    width: active === s.id ? "16px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: active === s.id ? "#16a34a" : "#d1d5db",
                    transition: "all 0.3s ease",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }} />
              ))}
            </div>

            <a href="mailto:denis@fsummit.net"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "#16a34a" }}>
              Partner With Us →
            </a>
            <button className="lg:hidden p-1.5" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="w-5 space-y-1">
                <span className="block h-0.5 bg-gray-600 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
                <span className="block h-0.5 bg-gray-600" style={{ opacity: menuOpen ? 0 : 1 }} />
                <span className="block h-0.5 bg-gray-600 transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          {SLIDES.map(s => (
            <button key={s.id} onClick={() => scrollTo(s.id)}
              className="w-full text-left px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all">
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
