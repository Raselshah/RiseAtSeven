"use client";

import Link from "next/link";

export default function AgencyIntro() {
  return (
    <section className="w-full py-12 xl:py-24">
      <div className="w-full px-4 md:px-7">
        <div className="w-full flex justify-between items-start flex-col-reverse md:flex-row gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">
          {/* Left: description */}
          <div className="w-full mb-1 md:mt-2 md:mb-0 max-w-sm xl:max-w-xl">
            <p className="text-[#111212] text-lg lg:text-xl xl:text-2xl font-medium tracking-tight leading-tight">
              A global team of search-first content marketers engineering
              semantic relevancy & category signals for both the internet and
              people
            </p>
          </div>

          {/* Right: big heading + CTAs */}
          <div className="w-full grid max-w-xl xl:max-w-2xl gap-y-3 md:gap-y-7">
            <h2 className="text-[#111212] text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[0.9]">
              Driving Demand &
              <br />
              Discovery
            </h2>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about/"
                className="group inline-flex items-center gap-x-2 px-6 py-3 rounded-3xl font-medium text-base bg-white text-[#111212] hover:rounded-xl transition-all"
              >
                Our Story
                <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" />
              </Link>
              <Link
                href="/services/"
                className="group inline-flex items-center gap-x-2 font-medium text-base text-[#111212] hover:opacity-70 transition-opacity"
              >
                Our Services
                <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}