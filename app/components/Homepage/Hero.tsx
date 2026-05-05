"use client";

import { useEffect, useRef } from "react";

const heroImages = [
  "https://rise-atseven.transforms.svdcdn.com/production/images/unnamed-6.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1750948726",
  "https://rise-atseven.transforms.svdcdn.com/production/images/RedBull-Instagram-Post-45.png?w=1890&h=2363&q=100&auto=format&fit=crop&dm=1753775231",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Emirates-airpline-in-flight.avif?w=1330&h=700&q=100&auto=format&fit=crop&dm=1750948034",
  "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-21.36.35.png?w=1198&h=1126&q=100&auto=format&fit=crop&dm=1751402284",
];

const platforms = [
  { name: "Google", icon: "fa-google" },
  { name: "ChatGPT", icon: "fa-openai" },
  { name: "TikTok", icon: "fa-tiktok" },
  { name: "YouTube", icon: "fa-youtube" },
  { name: "Pinterest", icon: "fa-pinterest" },
  { name: "Reddit", icon: "fa-reddit" },
  { name: "Amazon", icon: "fa-amazon" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * heroImages.length);
    if (bgRef.current) {
      bgRef.current.style.backgroundImage = `url(${heroImages[random]})`;
      bgRef.current.style.backgroundSize = "cover";
      bgRef.current.style.backgroundPosition = "center";
    }
  }, []);

  return (
    <section className="w-full  relative overflow-hidden p-2 h-screen-fix h-svh">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 rounded-3xl bg-[#111212] scale-105 "
        style={{ filter: "blur(2px)" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 rounded-3xl bg-[#111212]/40 z-10 " />

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 z-30 w-full p-7 flex items-end justify-between">
        <div className="hidden md:block text-white text-sm font-medium max-w-xs">
          Organic media planners creating, distributing & optimising{" "}
          <strong className="font-medium">search-first</strong> content for
          SEO, Social, PR, Ai and LLM search
        </div>
        <div className="text-white text-sm font-medium text-right">
          <strong>4 Global Offices serving</strong>
          <br />
          <strong>UK, USA (New York) & EU</strong>
        </div>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        {/* Award badges */}
        <div className="flex items-center gap-x-2 mb-6">
          <span className="text-white text-xs font-medium uppercase tracking-widest text-center">
            #1 Most recommended content marketing agency
          </span>
        </div>

        {/* Main heading */}
        <div className="text-center px-4">
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight leading-[0.9] mb-4">
            We Create
            <br />
            Category Leaders
          </h1>
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-tight mt-4">
            on every searchable platform
          </p>
        </div>

        {/* Platform logos */}
        <div className="hidden 2xl:flex items-center gap-x-14 mt-12">
          {platforms.map((p) => (
            <div key={p.name} className="text-white/70 hover:text-white transition-colors">
              <i className={`fab ${p.icon} text-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}