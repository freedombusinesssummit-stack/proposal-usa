"use client";
import AnimatedSection from "./AnimatedSection";

export default function ContactSlide() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
      style={{ background: "#0A0A0A" }}
    >
      {/* Lime orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(173,255,47,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-3 mb-12">
            <span
              className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
              style={{ background: "#ADFF2F", color: "#0A0A0A" }}
            >
              Contacts
            </span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
              Slide 13
            </span>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <AnimatedSection animation="fade-up" delay={100}>
              <h2
                className="font-black tracking-tighter mb-6"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                Ready to
                <br />
                <span style={{ color: "#ADFF2F" }}>Partner?</span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-10"
                style={{ color: "rgba(255,255,255,0.55)", maxWidth: "480px" }}
              >
                We only work with <strong className="text-white">8–10 selected partners per event.</strong> Reach out now to secure your slot before the Early Bird deadline on May 10th.
              </p>
            </AnimatedSection>

            {/* Key reasons */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-3 mb-10">
                {[
                  "Data-driven virtual summit — real intent signals",
                  "100% global distribution and media exposure",
                  "Full funnel intent tracking from day one",
                  "Exclusivity per category and jurisdiction",
                  "Decision-maker dominant audience (75% founders/execs)",
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-black text-sm mt-0.5" style={{ color: "#ADFF2F" }}>→</span>
                    <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{r}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA button */}
            <AnimatedSection animation="fade-up" delay={350}>
              <a
                href="mailto:denis@fsummit.net"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-black text-base transition-all duration-200 hover:scale-105 lime-glow"
                style={{ background: "#ADFF2F", color: "#0A0A0A" }}
              >
                Become a Partner
                <span className="text-xl">→</span>
              </a>
            </AnimatedSection>
          </div>

          {/* Contact cards */}
          <div className="space-y-4">
            <AnimatedSection animation="slide-right" delay={200}>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg"
                    style={{ background: "#ADFF2F", color: "#0A0A0A" }}
                  >
                    DD
                  </div>
                  <div>
                    <p className="font-black text-white text-lg">Denys Dovgal</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>CEO · Freedom Business Summit</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href="mailto:denis@fsummit.net"
                    className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all hover:bg-white/5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <span>📧</span> denis@fsummit.net
                  </a>
                  <a
                    href="https://wa.me/14153163638"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all hover:bg-white/5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <span>💬</span> WhatsApp: +1 415 316 36 38
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={300}>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                  >
                    ED
                  </div>
                  <div>
                    <p className="font-black text-white text-lg">Eleonora Davtyan</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>Partners & Sponsorships</p>
                  </div>
                </div>
                <a
                  href="mailto:promo@travelmba.net"
                  className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all hover:bg-white/5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <span>📧</span> promo@travelmba.net
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={400}>
              <div
                className="rounded-2xl p-6 flex items-center justify-between"
                style={{
                  background: "rgba(173,255,47,0.06)",
                  border: "1px solid rgba(173,255,47,0.2)",
                }}
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Website</p>
                  <p className="font-black text-white">fsummit.net/usa</p>
                </div>
                <a
                  href="https://fsummit.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
                  style={{ background: "#ADFF2F", color: "#0A0A0A" }}
                >
                  Visit →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="w-full mt-auto"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-black font-black text-xs"
              style={{ background: "#ADFF2F" }}
            >
              FS
            </div>
            <span className="font-black text-sm text-white">FREEDOM SUMMIT</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 Freedom Business Summit · fsummit.net · All Rights Reserved · Copyrighted
          </p>
        </div>
      </div>
    </section>
  );
}
