"use client";
import AnimatedSection from "./AnimatedSection";

export default function ContactSlide() {
  return (
    <section id="contact" className="py-14 bg-white">
      <div className="wrap">
        <AnimatedSection>
          <span className="section-label">Contact</span>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2" style={{ letterSpacing: "-0.5px" }}>Ready to Partner?</h2>
          <p className="text-gray-500 mb-8 max-w-lg">We only work with <strong className="text-gray-900">8–10 selected partners per event.</strong> Reach out now to secure your slot before the Early Bird deadline on May 10th.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={80}>
            <div className="space-y-3 mb-6">
              {["Data-driven virtual summit — real intent signals","100% global distribution and media exposure","Full funnel intent tracking from day one","Exclusivity per category and jurisdiction","Decision-maker dominant audience (75% founders/execs)"].map((r, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="font-bold text-green-600 flex-shrink-0 mt-0.5 text-sm">→</span>
                  <p className="text-sm text-gray-600 font-medium">{r}</p>
                </div>
              ))}
            </div>
            <a href="mailto:denis@fsummit.net" className="btn-green">Become a Partner →</a>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="space-y-4">
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white bg-green-600">DD</div>
                  <div>
                    <p className="font-bold text-gray-900">Denys Dovgal</p>
                    <p className="text-xs text-gray-500">CEO · Freedom Business Summit</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="mailto:denis@fsummit.net" className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors font-medium">
                    <span>📧</span> denis@fsummit.net
                  </a>
                  <a href="https://wa.me/14153163638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors font-medium">
                    <span>💬</span> WhatsApp: +1 415 316 36 38
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-gray-600 bg-gray-100">ED</div>
                  <div>
                    <p className="font-bold text-gray-900">Eleonora Davtyan</p>
                    <p className="text-xs text-gray-500">Partners & Sponsorships</p>
                  </div>
                </div>
                <a href="mailto:promo@travelmba.net" className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors font-medium">
                  <span>📧</span> promo@travelmba.net
                </a>
              </div>
              <div className="card-green flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Website</p>
                  <p className="font-bold text-gray-900">fsummit.net/usa</p>
                </div>
                <a href="https://fsummit.net" target="_blank" rel="noopener noreferrer" className="btn-green text-sm">Visit →</a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <div className="mt-14 border-t border-gray-100">
        <div className="wrap">
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-white font-black text-xs bg-green-600">FS</div>
              <span className="font-bold text-sm text-gray-900">Freedom Business Summit</span>
            </div>
            <p className="text-xs text-gray-400">© 2026 Freedom Business Summit · fsummit.net · All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
