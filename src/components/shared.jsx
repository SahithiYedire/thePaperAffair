import { ArrowRight, ChevronRight, Heart, Instagram, Mail, MapPin, Menu, Minus, Phone, Plus, Search, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, User, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export function AnnouncementBar() {
  return (
    <div className="bg-[#59433F] text-[#FFF9F5] text-center text-[10px] md:text-xs py-2 tracking-[0.18em] uppercase">
      {siteConfig.tagline}
    </div>
  );
}

export function Navbar() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Shop All', to: '/shop' },
    { label: 'Books', to: '/shop?category=books' },
    { label: 'Drinkware', to: '/shop?category=drinkware' },
    { label: 'Stationery', to: '/shop?category=stationery' },
    { label: 'Accessories', to: '/shop?category=accessories' },
    { label: 'Gift Hampers', to: '/shop?category=gift-hampers' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F5]/90 backdrop-blur-md border-b border-[#EBD7DE]">
      <div className="container-app flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F6DCE5] flex items-center justify-center text-sm font-bold text-[#59433F]">
            {siteConfig.logoText}
          </div>
          <div>
            <p className="font-serif text-xl text-[#59433F]">{siteConfig.brandName}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A5B67]">{siteConfig.tagline}</p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6 text-sm text-[#59433F]">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="hover:text-[#8A5B67] transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-[#59433F]">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-[#F6DCE5] transition-colors"><Search size={18} /></button>
          <Link to="/account" aria-label="Account" className="p-2 rounded-full hover:bg-[#F6DCE5] transition-colors"><User size={18} /></Link>
          <Link to="/cart" aria-label="Cart" className="relative p-2 rounded-full hover:bg-[#F6DCE5] transition-colors">
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 bg-[#D99AAE] text-[10px] text-white rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67] mb-2">{eyebrow}</p>}
      <h2 className="section-title text-3xl md:text-4xl text-[#59433F]">{title}</h2>
      {subtitle && <p className="mt-3 text-[#59433F]/70 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-[#59433F] text-[#FFF9F5]">
      <div className="container-app py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-2xl mb-3">{siteConfig.brandName}</h3>
          <p className="text-sm text-[#F6DCE5]">Thoughtfully picked treasures, beautifully wrapped with love.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-[0.2em] text-[#F6DCE5]">About</h4>
          <ul className="space-y-2 text-sm text-[#F5E9ED]">
            <li><Link to="/shop">Shop All</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">Shipping Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-[0.2em] text-[#F6DCE5]">Support</h4>
          <ul className="space-y-2 text-sm text-[#F5E9ED]">
            <li>Return & Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-[0.2em] text-[#F6DCE5]">Contact</h4>
          <ul className="space-y-2 text-sm text-[#F5E9ED]">
            <li className="flex items-center gap-2"><Mail size={15} /> {siteConfig.email}</li>
            <li className="flex items-center gap-2"><Phone size={15} /> {siteConfig.whatsappNumber}</li>
            <li className="flex items-center gap-2"><MapPin size={15} /> {siteConfig.address}</li>
            <li className="flex items-center gap-2"><Instagram size={15} /> {siteConfig.instagram}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#7B5B60] py-4 text-center text-sm text-[#F6DCE5]">
        © 2026 {siteConfig.brandName}. All rights reserved.
      </div>
    </footer>
  );
}
