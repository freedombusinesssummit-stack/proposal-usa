"use client";
import AnimatedSection from "./AnimatedSection";

export default function ContactSlide() {
  return (
    <section id="contact" className="py-14 bg-white">
      <div className="wrap">
        <AnimatedSection>
          <span className="section-label">Contact</span>
          <h2 className="text-3xl font-black text-carbon-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Ready to Partner?</h2>
          <p className="text-carbon-500 mb-8 max-w-lg">We only work with <strong className="text-carbon-900">8–10 selected partners per event.</strong> Reach out now to secure your slot before the Early Bird deadline on May 10th.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: reasons */}
          <AnimatedSection delay={80}>
            <div className="space-y-3 mb-8">
              {[
                "Data-driven virtual summit — real intent signals",
                "100% global distribution and media exposure",
                "Full funnel intent tracking from day one",
                "Exclusivity per category and jurisdiction",
                "Decision-maker dominant audience (75% founders/execs)",
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
                  <span className="font-bold flex-shrink-0" style={{ color: "#70e000" }}>→</span>
                  <p className="text-sm text-carbon-700 font-medium">{r}</p>
                </div>
              ))}
            </div>
            <a href="mailto:denis@fsummit.net" className="btn-green">Become a Partner →</a>
          </AnimatedSection>

          {/* Right: contact cards */}
          <AnimatedSection delay={150}>
            <div className="space-y-4">
              {/* Denys */}
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-carbon-900" style={{ background: "#9ef01a" }}>DD</div>
                  <div>
                    <p className="font-bold text-carbon-900">Denys Dovgal</p>
                    <p className="text-xs text-carbon-500">CEO · Freedom Business Summit</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="mailto:denis@fsummit.net" className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-carbon-600 border border-carbon-200 hover:bg-carbon-50 transition-colors font-medium">
                    <span>📧</span> denis@fsummit.net
                  </a>
                  <a href="https://wa.me/14153163638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-carbon-600 border border-carbon-200 hover:bg-carbon-50 transition-colors font-medium">
                    <span>💬</span> WhatsApp: +1 415 316 36 38
                  </a>
                </div>
              </div>

              {/* Eleonora */}
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-carbon-600 bg-carbon-100">ED</div>
                  <div>
                    <p className="font-bold text-carbon-900">Eleonora Davtyan</p>
                    <p className="text-xs text-carbon-500">Partners & Sponsorships</p>
                  </div>
                </div>
                <a href="mailto:promo@travelmba.net" className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-carbon-600 border border-carbon-200 hover:bg-carbon-50 transition-colors font-medium">
                  <span>📧</span> promo@travelmba.net
                </a>
              </div>

              {/* Kristine */}
              <div className="card" style={{ borderLeft: "3px solid #9ef01a" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-carbon-900" style={{ background: "#9ef01a" }}>KA</div>
                  <div>
                    <p className="font-bold text-carbon-900">Kristine Aghabekyan</p>
                    <p className="text-xs text-carbon-500">Partners & Sponsorships</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="mailto:kristine@fsummit.net" className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-carbon-600 border border-carbon-200 hover:bg-carbon-50 transition-colors font-medium">
                    <span>📧</span> kristine@fsummit.net
                  </a>
                  <a href="https://wa.me/37498625147" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-carbon-600 border border-carbon-200 hover:bg-carbon-50 transition-colors font-medium">
                    <span>💬</span> WhatsApp: +374 98 625 147
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="card-green flex items-center justify-between">
                <div>
                  <p className="text-xs text-carbon-500 font-medium mb-0.5">Website</p>
                  <p className="font-bold text-carbon-900">fsummit.net/usa</p>
                </div>
                <a href="https://fsummit.net" target="_blank" rel="noopener noreferrer" className="btn-green text-sm py-2 px-4">Visit →</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-14 border-t border-carbon-100">
        <div className="wrap">
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center font-black text-xs text-carbon-900" style={{ background: "#9ef01a" }}>FS</div>
              <span className="font-bold text-sm text-carbon-900">Freedom Business Summit</span>
            </div>
            <p className="text-xs text-carbon-400">© 2026 Freedom Business Summit · fsummit.net · All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
