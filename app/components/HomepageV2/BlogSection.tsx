// components/BlogSection.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const posts = [
  {
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    author: 'Carrie Rose',
    readTime: '2 mins',
    category: 'News',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg',
    href: '/blog/ryan-mcnamara-promotion',
    authorImg: 'https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg',
  },
  {
    title: 'Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth',
    author: 'Ray Saddiq',
    readTime: '2 mins',
    category: 'Food/Hospitality/Drink',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg',
    href: '/blog/coneys-chooses-rise-at-seven',
    authorImg: 'https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/WhatsApp-Image-2025-06-23-at-22.50.52.jpeg',
  },
  {
    title: 'Rise at Seven Appointed by Langtins to drive demand for Noomz',
    author: 'Carrie Rose',
    readTime: '2 mins',
    category: 'Food/Hospitality/Drink',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/Noomz1-4.jpg',
    href: '/blog/noomz-chooses-rise-at-seven',
    authorImg: 'https://rise-atseven.transforms.svdcdn.com/production/images/blog/import/84b3917f166d7feb4c2376f78ce33ae432656999.jpg',
  },
];

export default function BlogSection() {
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
    <div ref={sectionRef} className="py-20 px-4 md:px-7 mx-auto opacity-0">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-grey-200 pb-4 mb-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium flex flex-wrap items-center gap-2">
          What&apos;s{' '}
          <span className="inline-block w-16 h-16 rounded-full overflow-hidden bg-grey-300">
            <img src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=80" className="w-full h-full object-cover" alt="" />
          </span>{' '}
          New
        </h2>
        <Link href="/blog" className="hidden md:flex gap-2 items-center group mt-4 md:mt-0">
          Explore More Thoughts
          <i className="fa-regular fa-arrow-up-right transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <Link 
            key={idx} 
            href={post.href} 
            className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
          >
            <div className="overflow-hidden">
              <img 
                src={post.image} 
                className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105" 
                alt={post.title} 
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                <span className="bg-grey-100 px-2 py-1 rounded-full">{post.category}</span>
                <div className="flex items-center gap-1">
                  <img src={post.authorImg} className="w-5 h-5 rounded-full object-cover -ml-1" alt="" />
                  <span className="text-grey-500">{post.author}</span>
                </div>
                <span className="text-grey-400"><i className="fa-regular fa-stopwatch mr-1"></i>{post.readTime}</span>
              </div>
              <h3 className="font-medium text-xl mt-3 leading-tight group-hover:text-mint transition-all duration-300">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link href="/blog" className="block w-full bg-white rounded-full py-3 text-center border border-grey-200 hover:bg-grey-50 transition-all duration-300">
          Explore More Thoughts <i className="fa-regular fa-arrow-up-right ml-1"></i>
        </Link>
      </div>
    </div>
  );
}