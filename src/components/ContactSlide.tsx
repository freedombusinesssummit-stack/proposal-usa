"use client";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

const CONTACTS = [
  {
    img: "/team/denis.jpeg",
    init: "DD",
    name: "Denys Dovgal",
    role: "CEO · Freedom Business Summit",
    lime: true,
    links: [
      { icon: "📧", label: "denis@fsummit.net", href: "mailto:denis@fsummit.net" },
      { icon: "💬", label: "WhatsApp: +1 415 316 36 38", href: "https://wa.me/14153163638" },
    ],
  },
  {
    img: "/team/eleonora.jpeg",
    init: "ED",
    name: "Eleonora Davtyan",
    role: "Partners & Sponsorships",
    lime: false,
    links: [
      { icon: "📧", label: "eleonora@fsummit.net", href: "mailto:eleonora@fsummit.net" },
    ],
  },
  {
    img: "/team/kristine.jpg",
    init: "KA",
    name: "Kristine Aghabekyan",
    role: "Partners & Sponsorships",
    lime: true,
    links: [
      { icon: "📧", label: "kristine@fsummit.net", href: "mailto:kristine@fsummit.net" },
      { icon: "💬", label: "WhatsApp: +374 98 625 147", href: "https://wa.me/37498625147" },
    ],
  },
];

export default function ContactSlide() {
  return (
    <section id="contact" className="py-14 bg-white">
      <div className="wrap">
        <AnimatedSection>
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ background: "#f3ffe3", color: "#3d8000", border: "1px solid #b5f55a" }}>Contact</span>
          <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Ready to Partner?</h2>
          <p className="text-carbon-500 mb-8 max-w-lg">We only work with <strong className="text-carbon-900">8–10 selected partners per event.</strong> Reach out now to secure your slot before the Early Bird deadline on May 10th.</p>
        </AnimatedSection>

        {/* Reasons */}
        <AnimatedSection delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-10">
            {[
              "Data-driven virtual summit — real intent signals",
              "100% global distribution and media exposure",
              "Full funnel intent tracking from day one",
              "Exclusivity per category and jurisdiction",
              "Decision-maker dominant audience (75% founders/execs)",
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
                <span className="font-bold flex-shrink-0 text-lg leading-none mt-0.5" style={{ color: "#70e000" }}>→</span>
                <p className="text-sm text-carbon-700 font-medium">{r}</p>
              </div>
            ))}
          </div>
          <a href="mailto:denis@fsummit.net"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-carbon-900 transition-all hover:opacity-90 hover:-translate-y-0.5 mb-12"
            style={{ background: "#9ef01a" }}>
            Become a Partner →
          </a>
        </AnimatedSection>

        {/* 3 contact cards — horizontal with real photos */}
        <AnimatedSection delay={150}>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {CONTACTS.map((c, i) => (
              <div key={i} className="rounded-xl border border-carbon-200 bg-white overflow-hidden hover:shadow-md transition-shadow" style={c.lime ? { borderLeft: "3px solid #9ef01a" } : {}}>
                {/* Photo */}
                <div className="relative w-full h-48 bg-carbon-100 overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div>
                      <p className="font-bold text-carbon-900 text-sm">{c.name}</p>
                      <p className="text-xs text-carbon-500">{c.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {c.links.map((l, j) => (
                      <a key={j} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-xs text-carbon-600 border border-carbon-200 hover:bg-carbon-50 transition-colors font-medium">
                        <span>{l.icon}</span> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Website */}
        <AnimatedSection delay={250}>
          <div className="rounded-xl flex items-center justify-between p-4" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
            <div>
              <p className="text-xs text-carbon-500 font-medium mb-0.5">Website</p>
              <p className="font-bold text-carbon-900">fsummit.net/usa</p>
            </div>
            <a href="https://fsummit.net" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-bold text-carbon-900 hover:opacity-90 transition-all"
              style={{ background: "#9ef01a" }}>
              Visit →
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="mt-14 border-t border-carbon-100">
        <div className="wrap">
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center font-black text-xs" style={{ background: "#9ef01a", color: "#111827" }}>FS</div>
              <span className="font-bold text-sm text-carbon-900">Freedom Business Summit</span>
            </div>
            <p className="text-xs text-carbon-400">© 2026 Freedom Business Summit · fsummit.net · All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
