"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";

const VIDEOS = [
  { id: "HdV3fbnsBxGTqGhs02xBL023Njuo01CKTPfLOMCvj02kMTE", label: "Speaker 1" },
  { id: "xmy7Hfmwhjbcrio25900J1OhXVGldoZce02OKpoOINOqM", label: "Speaker 2" },
  { id: "ZCDG5qNaC02GoEiuaq6oFVUu7mXOyGJgXYrVFwQZPY2k", label: "Speaker 3" },
  { id: "GB01sPWkUqcq3a4Euhk01pzVlGoWaY01SQbIE002DaQrbPI", label: "Speaker 4" },
  { id: "IpjmtckTnJzwVNEIv3YT01WbTsPAqtPzlR02DMy4gD6JA", label: "Speaker 5" },
  { id: "bjA29v9I8dDjJoYQHsLzRK9yiNCpUGmX3As6GOmjjF4", label: "Speaker 6" },
  { id: "b01C02DcwOHKl7dcvxdKtbV7sXnw8iYi00t2qlgXdLw2Pg", label: "Speaker 7" },
];

function MuxPlayer({ playbackId }: { playbackId: string }) {
  const [playing, setPlaying] = useState(false);
  const thumbUrl = `https://image.mux.com/${playbackId}/thumbnail.jpg?time=2&width=400&height=225`;

  return (
    <div className="relative rounded-xl overflow-hidden bg-carbon-900 group cursor-pointer"
      style={{ aspectRatio: "16/9" }}
      onClick={() => setPlaying(true)}>
      {!playing ? (
        <>
          <img src={thumbUrl} alt="" className="w-full h-full object-cover" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-xl"
              style={{ background: "#9ef01a" }}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path d="M2 2L18 11L2 20V2Z" fill="#111827" />
              </svg>
            </div>
          </div>
          {/* Sponsored label */}
          <div className="absolute top-3 left-3">
            <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: "rgba(0,0,0,0.7)", color: "#9ef01a" }}>
              Sponsored
            </span>
          </div>
        </>
      ) : (
        <iframe
          src={`https://player.mux.com/${playbackId}?autoplay=1`}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default function SpeakerVideos() {
  return (
    <section id="speaker-videos" className="slide-section py-14 border-b border-carbon-100 bg-white">
      <span className="slide-number">10 / 15</span>
      <div className="wrap">
        <AnimatedSection>
          <Badge variant="success" className="mb-3">Sponsored Video Ads</Badge>
          <h2 className="font-black text-carbon-900 mb-2" style={{ fontSize: "clamp(22px, 3.5vw, 44px)", letterSpacing: "-1px" }}>
            Speaker Ads That Drive Registrations
          </h2>
          <p className="text-carbon-500 mb-8 max-w-2xl">
            Targeted video ads featuring our speakers run across social platforms — driving qualified, intent-rich registrations directly to the event funnel.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {VIDEOS.slice(0, 6).map((v, i) => (
              <div key={i} style={{ opacity: 1 }}>
                <MuxPlayer playbackId={v.id} />
              </div>
            ))}
          </div>
          {/* 7th video centered */}
          {VIDEOS.length > 6 && (
            <div className="flex justify-center">
              <div className="w-full md:w-1/3">
                <MuxPlayer playbackId={VIDEOS[6].id} />
              </div>
            </div>
          )}
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-6 rounded-xl p-5 flex flex-wrap items-center gap-4" style={{ background: "#f8fff0", border: "1px solid #b5f55a" }}>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-xs font-bold text-carbon-900">Geo-targeted ads</p>
                <p className="text-xs text-carbon-500">US, India, UAE, EU focus</p>
              </div>
            </div>
            <div className="w-px h-8 bg-carbon-200 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-xl">📊</span>
              <div>
                <p className="text-xs font-bold text-carbon-900">110K+ Unique Reach</p>
                <p className="text-xs text-carbon-500">Per campaign sprint</p>
              </div>
            </div>
            <div className="w-px h-8 bg-carbon-200 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-xl">✅</span>
              <div>
                <p className="text-xs font-bold text-carbon-900">UTM tracked registrations</p>
                <p className="text-xs text-carbon-500">Full attribution per partner</p>
              </div>
            </div>
            <div className="w-px h-8 bg-carbon-200 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-xl">🎬</span>
              <div>
                <p className="text-xs font-bold text-carbon-900">Custom video per speaker</p>
                <p className="text-xs text-carbon-500">Branded for each partner</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
