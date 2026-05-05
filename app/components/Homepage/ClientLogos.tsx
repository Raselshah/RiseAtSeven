"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const clients = [
  { name: "SIXT", type: "text" },
  { name: "DPD", type: "text" },
  { name: "Red Bull", type: "text" },
  { name: "JD Sports", type: "text" },
  { name: "Deliveroo", type: "text" },
  { name: "Bupa", type: "text" },
  { name: "Revolution Beauty", type: "text" },
  { name: "Parkdean Resorts", type: "text" },
  { name: "PrettyLittleThing", type: "text" },
  { name: "Lloyds Pharmacy", type: "text" },
  { name: "Pooky", type: "text" },
  { name: "Emirates", type: "text" },
];

export default function ClientLogos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    animRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      animRef.current?.kill();
    };
  }, []);

  const logos = [...clients, ...clients];

  return (
    <section className="w-full pt-6 xl:pt-12 overflow-hidden">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 w-full gap-y-2 items-center">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <p className="text-[#111212] text-sm font-medium tracking-tight">
              The agency behind ...
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10 relative overflow-hidden">
            {/* Blur edges */}
            <div className="absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#f4f4f2] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[#f4f4f2] to-transparent pointer-events-none" />

            <div ref={trackRef} className="flex items-center gap-x-12 py-4" style={{ width: "max-content" }}>
              {logos.map((client, i) => (
                <div
                  key={i}
                  className="shrink-0 flex items-center justify-center w-24 lg:w-28"
                >
                  <span className="text-[#111212] text-sm font-semibold tracking-tight whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}