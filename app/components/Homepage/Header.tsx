"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const services = [
  { label: "Search & Growth Strategy", href: "/services/strategy-growth/" },
  { label: "Onsite SEO", href: "/services/onsite-seo/" },
  { label: "Content Experience", href: "/services/content-experience/" },
  { label: "B2B Marketing", href: "/services/b2b-marketing/" },
  { label: "Digital PR", href: "/services/digital-pr/" },
  { label: "Social Media & Campaigns", href: "/services/social/" },
  { label: "Data & Insights", href: "/services/data-insights/" },
  { label: "Social SEO/Search", href: "/services/social-seo-tiktok-youtube/" },
];

const international = [
  { label: "US Digital PR", href: "/international/us-digital-pr/" },
  { label: "Spain Digital PR", href: "/spain-digital-pr/" },
  { label: "Germany Digital PR", href: "/germany-digital-pr/" },
  { label: "Netherlands Digital PR", href: "/netherlands-digital-pr/" },
];

const about = [
  { label: "About Us", href: "/about/" },
  { label: "Meet The Risers", href: "/meet-the-team/" },
  { label: "Culture", href: "/culture/" },
  { label: "Testimonials", href: "/testimonials/" },
];

const navLinks = [
  { label: "Services", href: "/services/", hasMenu: true, menuKey: "services" },
  { label: "International", href: "/international/", hasMenu: true, menuKey: "international" },
  { label: "About", href: "/about/", hasMenu: true, menuKey: "about" },
  { label: "Work", href: "/work/", badge: "25" },
  { label: "Careers", href: "/careers/" },
  { label: "Blog", href: "/blog/" },
  { label: "Webinar", href: "/webinars/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 100);
      setHidden(current > 100 && current > lastScroll.current);
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const menuItems: Record<string, typeof services> = {
    services,
    international,
    about,
  };

  return (
    <>
   

      {/* Main header */}
      <div
        className={`fixed top-0 left-0 z-50 flex transition-all duration-700 h-[72px] lg:h-[88px] lg:p-3 w-full ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`w-full flex items-center justify-between relative z-20 px-4 transition-all lg:px-3 lg:rounded-full ${
            scrolled ? "bg-white/60 backdrop-blur-lg" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className={`flex w-32 ml-2 md:w-40 ${scrolled ? "text-black" : "text-white"}`}>
            <Logo className="w-full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:inline-flex relative ml-10">
            {navLinks.map((link) => (
              <div key={link.label} className="relative z-10">
                <Link
                  href={link.href}
                  className={`group inline-flex tracking-tight leading-tight py-1 font-medium relative duration-300 px-4 hover:text-[#111212] transition-colors ${
                    scrolled ? "text-[#111212]" : "text-white"
                  }`}
                  onMouseEnter={() => link.hasMenu ? setActiveMenu(link.menuKey!) : setActiveMenu(null)}
                  onMouseLeave={() => !link.hasMenu && setActiveMenu(null)}
                >
                  {link.label}
                  {link.hasMenu && <span className="hidden ml-1 pointer-events-none lg:inline">+</span>}
                  {link.badge && (
                    <span className="inline-flex pointer-events-none absolute top-0 right-0 -translate-y-2.5 rounded-full px-1.5 py-0.5 text-[10px] font-thin bg-[#b8f73d] text-[#111212] group-hover:-translate-y-4 transition-transform">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </div>
            ))}

            {/* Mega menus */}
            {Object.entries(menuItems).map(([key, items]) => (
              <div
                key={key}
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-3xl shadow-2xl min-w-[380px] transition-all duration-300 ${
                  activeMenu === key ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="p-8">
                  <div className="grid gap-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group text-xl font-medium tracking-tight text-[#111212] hover:opacity-70 transition-opacity block"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:inline-flex">
            <Link
              href="/connect-with-us/"
              className={`group inline-flex items-center gap-x-2 px-6 py-3 rounded-3xl font-medium text-base transition-all hover:rounded-xl ${
                scrolled
                  ? "bg-[#111212] text-white"
                  : "bg-white text-[#111212]"
              }`}
            >
              Get in touch
              <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-12 h-8"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex w-5 h-2 flex-col items-start justify-between">
              <div
                className={`w-full h-0.5 transition-transform duration-500 ${
                  mobileOpen ? "rotate-45 translate-y-[5px]" : ""
                } ${scrolled ? "bg-[#111212]" : "bg-white"}`}
              />
              <div
                className={`w-full h-0.5 transition-transform duration-500 ${
                  mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
                } ${scrolled ? "bg-[#111212]" : "bg-white"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 backdrop-blur-sm p-2 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full h-full bg-[#111212]/90 rounded-3xl px-4 py-4 flex flex-col items-start justify-between overflow-y-auto">
          <div className="w-full">
            <div className="flex items-center justify-between mb-10">
              <Link href="/" className="w-32 text-white" onClick={() => setMobileOpen(false)}>
                <Logo className="w-full" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-white"
              >
                <i className="fa-solid fa-xmark text-xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white text-4xl tracking-tight font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <Link
            href="/connect-with-us/"
            className="w-full mt-8 inline-flex items-center justify-center gap-x-2 px-6 py-3 rounded-3xl font-medium text-base bg-white text-[#111212]"
            onClick={() => setMobileOpen(false)}
          >
            Get in touch
            <i className="fa-regular fa-sharp fa-arrow-up-right text-xs" />
          </Link>
        </div>
      </div>
    </>
  );
}