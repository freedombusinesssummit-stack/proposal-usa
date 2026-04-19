"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "About" },
  { id: "numbers", label: "Numbers" },
  { id: "audience", label: "Audience" },
  { id: "snapshot", label: "Snapshot" },
  { id: "behavioral", label: "Insights" },
  { id: "intel", label: "Data" },
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const mid = window.scrollY + 130;
      for (let i = SLIDES.length - 1; i >= 0; i--) {
        const el = document.getElementById(SLIDES[i].id);
        if (el && el.offsetTop <= mid) { setActive(SLIDES[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Animate on scroll
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.07 });
    document.querySelectorAll(".anim").forEach(el => obs.observe(el));

    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${scrolled ? "border-b border-gray-200 shadow-sm" : "border-b border-transparent"}`}>
      <div className="wrap">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md flex items-center justify-center text-white font-black text-xs bg-green-600">FS</div>
            <span className="font-bold text-gray-900 text-sm hidden sm:block">Freedom Summit</span>
          </div>

          {/* Nav links */}
          <div className="hidden lg:flex items-center gap-5">
            {[
              { id: "about", label: "About" },
              { id: "audience", label: "Audience" },
              { id: "agenda", label: "Agenda" },
              { id: "packages", label: "Packages" },
            ].map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                className={`text-sm font-medium transition-colors ${active === l.id ? "text-green-600" : "text-gray-500 hover:text-gray-800"}`}>
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Progress pills */}
            <div className="hidden xl:flex items-center gap-1 mr-1">
              {SLIDES.map(s => (
                <button key={s.id} onClick={() => go(s.id)} title={s.label}
                  className="rounded-full transition-all duration-300 border-none p-0 cursor-pointer"
                  style={{ width: active === s.id ? "14px" : "6px", height: "6px", background: active === s.id ? "#16a34a" : "#d1d5db" }} />
              ))}
            </div>
            <a href="mailto:denis@fsummit.net" className="btn-green hidden sm:inline-flex text-sm">Partner With Us →</a>
            <button className="lg:hidden p-1" onClick={() => setOpen(!open)}>
              <div className="w-5 space-y-1">
                <span className="block h-0.5 bg-gray-600 transition-all" style={{ transform: open ? "rotate(45deg) translateY(6px)" : "none" }} />
                <span className="block h-0.5 bg-gray-600" style={{ opacity: open ? 0 : 1 }} />
                <span className="block h-0.5 bg-gray-600 transition-all" style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "none" }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white py-2">
          {SLIDES.map(s => (
            <button key={s.id} onClick={() => go(s.id)}
              className={`w-full text-left px-6 py-2.5 text-sm font-medium transition-colors ${active === s.id ? "text-green-600 bg-green-50" : "text-gray-600 hover:bg-gray-50"}`}>
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
