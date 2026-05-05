// components/Header.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | false>(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [hideAnnouncement, setHideAnnouncement] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveringLink, setHoveringLink] = useState<string | false>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setHideAnnouncement(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenu]);

  const menuItems = [
    { name: 'Services', href: '/services', hasMegaMenu: true, id: 'services' },
    { name: 'International', href: '/international', hasMegaMenu: true, id: 'international' },
    { name: 'About', href: '/about', hasMegaMenu: true, id: 'about' },
    { name: 'Work', href: '/work', hasMegaMenu: false, badge: '25' },
    { name: 'Careers', href: '/careers', hasMegaMenu: false },
    { name: 'Blog', href: '/blog', hasMegaMenu: false },
    { name: 'Webinar', href: '/webinars', hasMegaMenu: false },
  ];

  return (
    <>
      {/* Announcement Bar */}
     

      {/* Backdrop */}
      {(megaMenu || hoveringLink) && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-lg transition-all duration-400"
          onClick={() => {
            setMegaMenu(false);
            setHoveringLink(false);
          }}
        />
      )}

      {/* Main Header */}
      <div className={`w-[calc(100vw-32px)] fixed top-0 left-2 mx-auto z-50 transition-all  duration-500 ${hideHeader ? '-translate-y-full' : 'translate-y-0'} ${hideAnnouncement ? 'pt-0' : 'pt-12'}`}>
        <div className={`w-full flex items-center justify-between px-4 lg:px-3 transition-all duration-300 lg:rounded-full ${scrolled ? 'bg-white/60 backdrop-blur-lg py-3' : 'py-4'}`}>
          <Link href="/" className={`flex w-32 md:w-40 transition-colors duration-300 ${!scrolled && !megaMenu ? 'text-white' : 'text-black'}`}>
            <svg className="w-full h-full object-contain fill-current" viewBox="0 0 168 21">
              <path d="M91.3152 5.40061C91.3152 3.94241 92.5306 2.67359 93.9881 2.67359C95.7162 2.67359 96.797 3.83419 96.797 5.56225H99.7127C99.7127 2.1873 97.3096 0 93.9874 0C90.9371 0 88.3988 2.32257 88.3988 5.42766C88.3988 9.31596 90.883 10.2344 93.9874 11.4221C95.6627 12.07 97.2007 12.5563 97.2007 14.6895C97.2007 16.634 95.9867 18.0651 93.9874 18.0651C91.8813 18.0651 90.7477 16.3905 90.7477 14.446H87.832C87.832 18.0651 90.3426 20.7381 93.9874 20.7381C97.6323 20.7381 100.118 18.2816 100.118 14.6895C100.118 7.10161 91.3145 9.64061 91.3145 5.40061H91.3152Z"/>
              <path d="M109.209 4.99609C104.834 4.99609 101.539 8.53405 101.539 12.8539C101.539 17.1737 104.888 20.738 109.155 20.738C112.422 20.738 115.203 18.713 116.337 15.662H113.529C112.718 17.2278 111.017 18.1733 109.262 18.1733C106.806 18.1733 104.915 16.4182 104.348 14.0963H116.743C116.797 13.6371 116.823 13.1508 116.823 12.6922C116.823 8.47926 113.447 4.99609 109.209 4.99609ZM104.348 11.9361C104.509 9.47823 106.751 7.56147 109.181 7.56147C111.611 7.56147 113.853 9.47823 114.014 11.9361H104.348Z"/>
              <path d="M127.476 5.40039L123.575 16.0941L119.673 5.40039H116.676L122.617 20.3598H124.588L130.475 5.40039H127.476Z"/>
              <path d="M137.942 4.99609C133.567 4.99609 130.273 8.53405 130.273 12.8539C130.273 17.1737 133.621 20.738 137.888 20.738C141.155 20.738 143.936 18.713 145.071 15.662H142.262C141.453 17.2278 139.75 18.1733 137.996 18.1733C135.538 18.1733 133.649 16.4182 133.081 14.0963H145.476C145.53 13.6371 145.556 13.1508 145.556 12.6922C145.556 8.47926 142.182 4.99609 137.942 4.99609ZM133.081 11.9361C133.243 9.47823 135.484 7.56147 137.915 7.56147C140.347 7.56147 142.586 9.47823 142.749 11.9361H133.081Z"/>
              <path d="M147.473 8.21195V8.69013V20.3618H150.032V10.1815L167.216 20.3618V17.2405L147.473 5.40039V8.21195Z"/>
              <path d="M67.8431 7.50804H67.789C66.6818 5.80635 64.7103 4.99609 62.713 4.99609C58.1775 4.99609 54.7734 8.3981 54.7734 12.935C54.7734 17.4719 58.2296 20.7387 62.713 20.7387C64.7651 20.7387 66.7359 19.8473 67.789 18.0387H67.8431V20.3606H70.652V5.40122H67.8431V7.50804Z"/>
            </svg>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onMouseEnter={() => {
                  if (item.hasMegaMenu) {
                    setMegaMenu(item?.id || false);
                    setHoveringLink(item?.id || false);
                  }
                }}
                onMouseLeave={() => {
                  if (item.hasMegaMenu) {
                    setMegaMenu(false);
                    setHoveringLink(false);
                  }
                }}
                className={`group relative px-4 py-1 text-base font-medium tracking-tight transition-all duration-300 ${
                  !scrolled && !megaMenu ? 'text-white hover:text-grey-900' : 'text-grey-900'
                }`}
              >
                {item.name}
                {item.hasMegaMenu && <span className="ml-1">+</span>}
                {item.badge && (
                  <span className="absolute -top-2 -right-3 bg-mint text-grey-900 text-xs rounded-full px-1.5 py-0.5">{item.badge}</span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link 
              href="/connect" 
              className={`group inline-flex items-center gap-2 px-6 py-3 rounded-3xl font-medium text-base transition-all duration-300 hover:rounded-xl ${
                !scrolled && !megaMenu ? 'bg-white text-grey-900' : 'bg-grey-900 text-white'
              }`}
            >
              <span>Get in touch</span>
              <i className="fa-regular fa-arrow-up-right text-xs transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
            </Link>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden">
            <div className="flex w-5 h-4 flex-col justify-between">
              <div className={`w-5 h-0.5 transition-all duration-300 ${!scrolled && !megaMenu ? 'bg-white' : 'bg-grey-900'} ${mobileMenu ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 transition-all duration-300 ${!scrolled && !megaMenu ? 'bg-white' : 'bg-grey-900'} ${mobileMenu ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 transition-all duration-300 ${!scrolled && !megaMenu ? 'bg-white' : 'bg-grey-900'} ${mobileMenu ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mega Menu - Services */}
      {megaMenu === 'services' && (
        <div className="fixed left-1/2 -translate-x-1/2 top-28 z-45 w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 animate-fadeInUp">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-grey-400 text-sm font-medium mb-3">Core Services</div>
              <ul className="space-y-3">
                <li><Link href="/services/strategy-growth" className="text-xl font-medium hover:text-mint transition">Search & Growth Strategy</Link></li>
                <li><Link href="/services/onsite-seo" className="text-xl font-medium hover:text-mint transition">Onsite SEO</Link></li>
                <li><Link href="/services/content-experience" className="text-xl font-medium hover:text-mint transition">Content Experience</Link></li>
                <li><Link href="/services/b2b-marketing" className="text-xl font-medium hover:text-mint transition">B2B Marketing</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li><Link href="/services/digital-pr" className="text-xl font-medium hover:text-mint transition">Digital PR</Link></li>
                <li><Link href="/services/social" className="text-xl font-medium hover:text-mint transition">Social Media & Campaigns</Link></li>
                <li><Link href="/services/data-insights" className="text-xl font-medium hover:text-mint transition">Data & Insights</Link></li>
                <li><Link href="/services/social-seo" className="text-xl font-medium hover:text-mint transition">Social SEO/Search</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t">
            <Link href="/services" className="inline-flex items-center gap-2 bg-grey-900 text-white rounded-full px-6 py-2 text-sm hover:rounded-xl transition">View all services <i className="fa-regular fa-arrow-up-right"></i></Link>
          </div>
        </div>
      )}

      {/* Mega Menu - International */}
      {megaMenu === 'international' && (
        <div className="fixed left-1/2 -translate-x-1/2 top-24 z-45 w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 animate-fadeInUp">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/international/us-digital-pr" className="text-2xl font-medium hover:text-mint transition">US Digital PR</Link>
            <Link href="/spain-digital-pr" className="text-2xl font-medium hover:text-mint transition">Spain Digital PR</Link>
            <Link href="/germany-digital-pr" className="text-2xl font-medium hover:text-mint transition">Germany Digital PR</Link>
            <Link href="/netherlands-digital-pr" className="text-2xl font-medium hover:text-mint transition">Netherlands Digital PR</Link>
          </div>
        </div>
      )}

      {/* Mega Menu - About */}
      {megaMenu === 'about' && (
        <div className="fixed left-1/2 -translate-x-1/2 top-24 z-45 w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 animate-fadeInUp">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/about" className="text-2xl font-medium hover:text-mint transition">About Us</Link>
            <Link href="/meet-the-team" className="text-2xl font-medium hover:text-mint transition">Meet The Risers</Link>
            <Link href="/culture" className="text-2xl font-medium hover:text-mint transition">Culture</Link>
            <Link href="/testimonials" className="text-2xl font-medium hover:text-mint transition">Testimonials</Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 bg-grey-900/95 backdrop-blur-sm pt-24 px-6 overflow-y-auto lg:hidden animate-fadeInUp">
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-white text-4xl font-medium tracking-tight border-b border-white/10 pb-2 hover:border-mint transition-all duration-300"
                onClick={() => setMobileMenu(false)}
              >
                {item.name}
                {item.hasMegaMenu && <span className="ml-2 text-lg">+</span>}
                {item.badge && <span className="ml-2 text-sm bg-mint text-grey-900 rounded-full px-2 py-0.5">{item.badge}</span>}
              </Link>
            ))}
            <Link 
              href="/connect" 
              className="mt-8 bg-white text-grey-900 rounded-full px-6 py-4 text-center text-lg font-medium hover:bg-mint transition-all duration-300"
              onClick={() => setMobileMenu(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}