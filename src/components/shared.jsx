import { ArrowRight, Heart, Instagram, Mail, MapPin, Menu, Phone, Search, ShoppingBag, User, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export function AnnouncementBar() {
  return <div className="bg-[#59433F] text-[#FFF9F5] text-center text-[10px] md:text-xs py-2 tracking-[0.18em] uppercase">{siteConfig.tagline}</div>;
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const itemCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Shop', to: '/shop' },
    { label: 'Blind Date With a Book', to: '/shop?category=books' },
    { label: 'Glass Tumbler', to: '/shop?category=drinkware' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFF9F5]/95 backdrop-blur-md border-b border-[#EBD7DE]">
      <div className="container-app flex items-center justify-between py-3">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#F6DCE5] flex items-center justify-center text-sm font-bold text-[#59433F]">{siteConfig.logoText}</div>
          <div className="min-w-0"><p className="font-serif text-lg sm:text-xl text-[#59433F] truncate">{siteConfig.brandName}</p><p className="text-[9px] uppercase tracking-[0.16em] text-[#8A5B67] truncate">{siteConfig.tagline}</p></div>
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-sm text-[#59433F]">{navItems.map((item) => <Link key={item.label} to={item.to} className="hover:text-[#8A5B67] transition-colors">{item.label}</Link>)}</nav>
        <div className="flex items-center gap-1 text-[#59433F]">
          <Link to="/wishlist" aria-label={`Wishlist, ${wishlistItems.length} saved`} className="relative p-2 rounded-full hover:bg-[#F6DCE5]"><Heart size={18} /><span className="absolute -top-0.5 -right-0.5 bg-[#D99AAE] text-[9px] text-white rounded-full h-4 min-w-4 px-1 flex items-center justify-center">{wishlistItems.length}</span></Link>
          <Link to="/account" aria-label="Account" className="p-2 rounded-full hover:bg-[#F6DCE5]"><User size={18} /></Link>
          <Link to="/cart" aria-label={`Cart, ${itemCount} items`} className="relative p-2 rounded-full hover:bg-[#F6DCE5]"><ShoppingBag size={18} /><span className="absolute -top-0.5 -right-0.5 bg-[#D99AAE] text-[9px] text-white rounded-full h-4 min-w-4 px-1 flex items-center justify-center">{itemCount}</span></Link>
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="lg:hidden p-2 rounded-full hover:bg-[#F6DCE5]">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {menuOpen && <nav className="lg:hidden border-t border-[#EBD7DE] bg-[#FFF9F5] px-4 py-3 flex flex-col">{navItems.map((item) => <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)} className="py-3 border-b last:border-0 border-[#F0E0E8] text-sm">{item.label}</Link>)}</nav>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 bg-[#59433F] text-[#FFF9F5]">
      <div className="container-app py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div><h3 className="font-serif text-2xl mb-3">{siteConfig.brandName}</h3><p className="text-sm text-[#F6DCE5]">Thoughtfully picked treasures, beautifully wrapped with love.</p></div>
        <div><h4 className="font-semibold mb-3 text-sm uppercase tracking-[0.2em] text-[#F6DCE5]">Explore</h4><ul className="space-y-2 text-sm text-[#F5E9ED]"><li><Link to="/shop">Our first collection</Link></li><li><Link to="/contact">Contact us</Link></li></ul></div>
        <div><h4 className="font-semibold mb-3 text-sm uppercase tracking-[0.2em] text-[#F6DCE5]">Policies</h4><ul className="space-y-2 text-sm text-[#F5E9ED]"><li>Shipping details shared before launch</li><li>Returns policy to be published before orders open</li></ul></div>
        <div><h4 className="font-semibold mb-3 text-sm uppercase tracking-[0.2em] text-[#F6DCE5]">Contact</h4><ul className="space-y-2 text-sm text-[#F5E9ED]"><li className="flex items-center gap-2"><Mail size={15} />{siteConfig.email}</li><li className="flex items-center gap-2"><Phone size={15} />{siteConfig.whatsappNumber}</li><li className="flex items-center gap-2"><MapPin size={15} />{siteConfig.address}</li><li className="flex items-center gap-2"><Instagram size={15} />{siteConfig.instagram}</li></ul></div>
      </div>
      <div className="border-t border-[#7B5B60] py-4 text-center text-sm text-[#F6DCE5]">© 2026 {siteConfig.brandName}. All rights reserved.</div>
    </footer>
  );
}
