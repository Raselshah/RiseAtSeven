// components/LegacySection.tsx
'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const legacyItems = [
  {
    title: 'Pioneers',
    description: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search.",
    subDescription: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg',
    bgColor: 'bg-black',
    textColor: 'text-white',
  },
  {
    title: 'Award Winning',
    description: 'A roll top bath full of 79 awards. Voted The Drum\'s best agency outside of London.',
    subDescription: 'We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG',
    bgColor: 'bg-mint',
    textColor: 'text-grey-900',
  },
  {
    title: 'Speed',
    description: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster.",
    subDescription: "We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png',
    bgColor: 'bg-white',
    textColor: 'text-grey-900',
  },
];

export default function LegacySection() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      
      const cards = cardsRef.current.filter(Boolean);
      
      gsap.to(cards, {
        yPercent: -100,
        rotate: -50,
        stagger: 1,
        ease: 'power2.inOut',
        duration: 3,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 30%',
          end: 'bottom -50%',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="py-20 text-center relative overflow-hidden hidden md:block">
      <h2 className="text-2xl mb-12">Legacy In The Making</h2>
      <div ref={triggerRef} className="relative h-[600px] w-full max-w-2xl mx-auto">
        {legacyItems.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className={`absolute w-full ${item.bgColor} ${item.textColor} rounded-3xl p-8 shadow-2xl transition-all duration-500`}
            style={{
              zIndex: legacyItems.length - idx,
              top: idx * 15,
              transform: `rotate(${idx * 4}deg)`,
            }}
          >
            <img
              src={item.image}
              className="w-24 h-24 rounded-xl mx-auto mb-6 object-cover"
              alt={item.title}
            />
            <h3 className="text-3xl md:text-4xl font-medium">{item.title}</h3>
            <p className="mt-4 text-sm md:text-base max-w-md mx-auto">{item.description}</p>
            <p className="mt-2 text-sm opacity-80 max-w-md mx-auto">{item.subDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}