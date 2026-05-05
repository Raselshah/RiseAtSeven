// components/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-grey-900 rounded-3xl m-2 p-6 md:p-10 text-white mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-medium">Stay updated with Rise news</h3>
          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-grey-800 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-mint transition-all duration-300"
            />
            <button className="absolute right-1 top-1 bg-mint text-grey-900 rounded-full w-10 h-10 hover:rotate-90 transition-all duration-300">
              <i className="fa-regular fa-arrow-up-right"></i>
            </button>
          </div>
          <div className="flex gap-3 mt-6">
            <a href="#" className="hover:text-mint transition-all duration-300"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="hover:text-mint transition-all duration-300"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="hover:text-mint transition-all duration-300"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-mint transition-all duration-300"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" className="hover:text-mint transition-all duration-300"><i className="fa-brands fa-tiktok"></i></a>
            <a href="#" className="hover:text-mint transition-all duration-300"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <div>
          <ul className="space-y-3">
            <li><Link href="/services" className="hover:text-mint transition-all duration-300">Services</Link></li>
            <li><Link href="/work" className="hover:text-mint transition-all duration-300">Work</Link></li>
            <li><Link href="/about" className="hover:text-mint transition-all duration-300">About</Link></li>
            <li><Link href="/culture" className="hover:text-mint transition-all duration-300">Culture</Link></li>
          </ul>
        </div>

        <div>
          <ul className="space-y-3">
            <li><Link href="/testimonials" className="hover:text-mint transition-all duration-300">Testimonials</Link></li>
            <li><Link href="/blog" className="hover:text-mint transition-all duration-300">Blog</Link></li>
            <li><Link href="/webinars" className="hover:text-mint transition-all duration-300">Webinars</Link></li>
            <li><Link href="/careers" className="hover:text-mint transition-all duration-300">Careers</Link></li>
          </ul>
        </div>

        <div>
          <ul className="space-y-3">
            <li><Link href="/contact/sheffield" className="hover:text-mint transition-all duration-300">Sheffield</Link></li>
            <li><Link href="/contact/manchester" className="hover:text-mint transition-all duration-300">Manchester</Link></li>
            <li><Link href="/contact/london" className="hover:text-mint transition-all duration-300">London</Link></li>
            <li><Link href="/contact/new-york" className="hover:text-mint transition-all duration-300">New York</Link></li>
            <li><Link href="/contact" className="hover:text-mint transition-all duration-300">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center mt-12 pt-6 border-t border-white/20 text-xs gap-4">
        <span>© {currentYear} Rise at Seven Ltd. All rights reserved</span>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-mint transition-all duration-300">Privacy Policy</Link>
          <Link href="/terms-conditions" className="hover:text-mint transition-all duration-300">Terms & conditions</Link>
        </div>
        <a href="https://madebyshape.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-all duration-300">
          Website MadeByShape
        </a>
      </div>
    </footer>
  );
}