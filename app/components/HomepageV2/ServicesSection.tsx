// components/ServicesSection.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const services = [
  { name: 'Digital PR', href: '/services/digital-pr', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png' },
  { name: 'Organic Social & Content', href: '/services/social', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png' },
  { name: 'Search & Growth Strategy', href: '/services/strategy-growth', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png' },
  { name: 'Content Experience', href: '/services/content-experience', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg' },
  { name: 'Data & Insights', href: '/services/data-insights', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG' },
  { name: 'Onsite SEO', href: '/services/onsite-seo', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png' },
  { name: 'B2B Marketing', href: '/services/b2b-marketing', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A6875.jpg' },
  { name: 'Social SEO/Search', href: '/services/social-seo', image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-09-24-at-11.47.25.png' },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="px-4 md:px-7 w-full  mx-auto opacity-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-grey-200 pb-5">
        <div className="col-span-11 md:col-span-9">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight flex flex-wrap items-center gap-3">
            Our{' '}
            <span className="inline-block w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-grey-300">
              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=100"
                className="w-full h-full object-cover"
                alt=""
              />
            </span>{' '}
            Services
          </h2>
        </div>
        <div className="col-span-12 md:col-span-3 md:flex md:items-center md:justify-end">
          <Link href="/services" className="hidden md:inline-flex items-center gap-2 group">
            View All Services
            <i className="fa-regular fa-arrow-up-right transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-8">
        {services.map((service, idx) => (
          <Link
            key={idx}
            href={service.href}
            className="group border-t border-grey-200 py-5 px-2 text-2xl md:text-3xl lg:text-4xl font-medium flex justify-between items-center hover:bg-grey-200 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden md:hidden">
                <img src={service.image} className="w-full h-full object-cover" alt="" />
              </div>
              <span>{service.name}</span>
            </div>
            <i className="fa-regular fa-arrow-up-right opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"></i>
          </Link>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link href="/services" className="block w-full bg-white rounded-full py-3 text-center border border-grey-200">
          View All Services <i className="fa-regular fa-arrow-up-right ml-1"></i>
        </Link>
      </div>
    </div>
  );
}