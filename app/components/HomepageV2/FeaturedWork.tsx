"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const works = [
  {
    id: 1,
    title: "SIXT",
    year: "[2023-2025]",
    href: "/work/sixt/",
    color: "#cb7b3a",
    category: "Car rental",
    result: "An extra 3m clicks regionally through SEO",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
  },
  {
    id: 2,
    title: "Dojo - B2B",
    year: "[2021-2025]",
    href: "/work/dojo/",
    color: "#fdd8c4",
    category: "Card Machines",
    result: "A B2B success story for Dojo card machines",
     image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
  },
  {
    id: 3,
    title: "Magnet Trade - B2B",
    year: "[2023-2024]",
    href: "/work/magnet-trade-b2b/",
    color: "#d8c4fd",
    category: "B2B",
    result: "A full service SEO success story 170%+ increase",
     image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
  },
  {
    id: 4,
    title: "JD Sports",
    year: "[2025]",
    href: "/work/jd-sports-/",
    color: "#3a8ccb",
    category: "Trainers",
    result: "65% up YoY in clicks for JDSports FR, IT, ES",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
  },
  {
    id: 5,
    title: "Parkdean Resorts",
    year: "[2019-2025]",
    href: "/work/parkdean-resorts-easter-breaks/",
    color: "#d2b59d",
    category: "Easter Breaks",
    result: "Dominating Google and AI search",
      image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
  },
  {
    id: 6,
    title: "Revolution Beauty",
    year: "[2022-2025]",
    href: "/work/revolution-beauty/",
    color: "#fecacc",
    category: "Beauty Dupes",
    result: "Building the UK's leading beauty dupe brand",
  image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
  },
  {
    id: 7,
    title: "PrettyLittleThing",
    year: "[2021-2023]",
    href: "/work/prettylittlething/",
    color: "#fecacc",
    category: "Outfits",
    result: "Driving discovery for everything 'outfits' for PLT",
    image: "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=2000&h=1500&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=2414c4f856c059625e43608b5128cfd5",
  },
  
];

export default function FeaturedWork() {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  return (
    <section className="w-full  pb-12 xl:pb-10">
      <div className="w-[calc(100%-32px)]  mx-auto ">
        <div className="rounded-3xl overflow-hidden bg-[#111212] px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10 py-8 lg:py-0  ">
          <div className="w-full   grid grid-cols-1  ">
          {/* Left: scrolling work titles (desktop) */}
          <div className="hidden lg:flex flex-col items-start col-span-6 h-[96vh] pt-24 pb-32 gap-y-20">
            <p className="text-white text-lg font-medium tracking-tight">Featured Work</p>

            <div className="relative flex-1 overflow-hidden w-full pr-5">
              {/* Gradient fades */}
              <div className="absolute top-0 left-0 w-full h-1/4 z-20 pointer-events-none bg-gradient-to-b from-[#111212] to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1/4 z-20 pointer-events-none bg-gradient-to-t from-[#111212] to-transparent" />

              <div className="flex flex-col gap-y-2">
                {works.map((work) => (
                  <Link
                    key={work.id}
                    href={work.href}
                    className={`flex items-start gap-x-2 transition-transform duration-300 ${
                      hoveredWork === work.id ? "translate-x-3" : ""
                    }`}
                    onMouseEnter={() => setHoveredWork(work.id)}
                    onMouseLeave={() => setHoveredWork(null)}
                  >
                    <span className="text-white text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-none">
                      {work.title}
                    </span>
                    <span className="text-white text-xs font-medium mt-2">
                      {work.year}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: work cards */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 pt-7 pb-14 space-y-5 lg:space-y-7   overflow-y-scroll max-h-[calc(100vh-100px)] hide_scrollbar">
            <p className="text-white text-lg font-medium lg:hidden">Featured Work</p>

            {works.map((work) => (
              <Link
                key={work.id}
                href={work.href}
                className="grid rounded-2xl overflow-hidden group cursor-pointer block"
                onMouseEnter={() => setHoveredWork(work.id)}
                onMouseLeave={() => setHoveredWork(null)}
              >
                {/* Image */}
                <div className="col-start-1 row-start-1 transition-transform duration-500 group-hover:scale-105">
                  <div className="relative overflow-hidden w-full" style={{ paddingTop: "75%" }}>
                    <img
                      src={work.image}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Category badge */}
                <div className="col-start-1 row-start-1 p-3 z-20 flex justify-end items-start">
                  <div className="inline-flex items-center rounded-full text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2 px-3">
                    <i className="fa-regular fa-sharp fa-magnifying-glass" />
                    <span>{work.category}</span>
                    <i className="fa-regular fa-sharp fa-chart-line-up" />
                  </div>
                </div>

                {/* Mobile title overlay */}
                <div className="col-start-1 row-start-1 p-3 z-20 relative flex justify-start items-end lg:hidden">
                  <div className="relative z-20">
                    <span className="text-white text-xs font-medium">{work.year}</span>
                    <h3 className="text-white text-3xl font-medium tracking-tight">{work.title}</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-70" />
                </div>

                {/* Hover overlay */}
                <div
                  className="col-start-1 row-start-1 flex flex-col items-start justify-between z-40 p-3 lg:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: work.color, color: "#111212" }}
                >
                  <h3 className="text-current text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight leading-none">
                    {work.result}
                  </h3>
                  <div className="w-full flex items-end justify-end">
                    <div className="inline-flex items-center rounded-full text-current bg-black/10 text-sm gap-x-3 py-2 px-3">
                      <i className="fa-regular fa-sharp fa-magnifying-glass" />
                      <span>{work.category}</span>
                      <i className="fa-regular fa-sharp fa-chart-line-up" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-7">
          <Link
            href="/work/"
            className="group inline-flex items-center gap-x-2 px-6 py-3 rounded-3xl font-medium text-base bg-white text-[#111212] hover:rounded-xl transition-all"
          >
            Explore Our Work
            <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}