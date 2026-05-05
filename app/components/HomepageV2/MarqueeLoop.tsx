// components/MarqueeLoop.tsx
'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function MarqueeLoop() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      ScrollTrigger.matchMedia({
        '(pointer: fine)': () => {
          gsap.to(containerRef.current, {
            xPercent: -20,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 100%',
              end: 'bottom -100%',
              scrub: true,
            },
          });
        },
      });
    }
  }, []);

  const items = [
    { text: 'Chasing Consumers', isImage: false },
    { text: '', isImage: true, src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png' },
    { text: 'Not Algorithms', isImage: false },
    { text: '', isImage: true, src: 'https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg' },
  ];

  // Repeat for seamless loop
  const allItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-10 relative">
      <div ref={containerRef} className="flex whitespace-nowrap">
        {allItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center gap-6 mx-4">
            {item.isImage ? (
              <span className="inline-block w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg">
                <img src={item.src} className="w-full h-full object-cover" alt="" />
              </span>
            ) : (
              <span className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight whitespace-nowrap text-grey-900">
                {item.text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}