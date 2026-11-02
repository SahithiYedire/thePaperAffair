import { ArrowRight, Gift, Heart, ShieldCheck, Sparkles, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories, featuredProducts, products, formatPrice } from '../data/products';

export default function HomePage() {
  return (
    <>
      <section className="pink-surface">
        <div className="container-app py-10 md:py-16 lg:py-20 grid lg:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A5B67] mb-4">Little things, lovely surprises.</p>
            <h1 className="section-title text-5xl md:text-6xl text-[#59433F] leading-[1.05]">Little Things, Lovely Surprises.</h1>
            <p className="mt-5 text-lg text-[#59433F]/80 max-w-xl">Thoughtfully picked treasures, beautifully wrapped with love.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="inline-flex items-center gap-2 bg-[#59433F] text-white px-6 py-3 rounded-full hover:bg-[#4C3733] transition-colors">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/shop?category=books" className="inline-flex items-center gap-2 border border-[#D99AAE] bg-white/70 px-6 py-3 rounded-full text-[#59433F] hover:bg-white transition-colors">
                Explore Collections
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[36px] overflow-hidden shadow-soft border border-[#F2E0E6]">
              <img src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=80" alt="Gifted lifestyle products" className="w-full h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-5 left-5 bg-white/90 px-4 py-3 rounded-2xl shadow-soft border border-[#F2E0E6]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Curated for</p>
              <p className="font-serif text-2xl text-[#59433F]">sweet everyday joy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-app py-16">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Shop by category</p>
          <h2 className="section-title text-4xl text-[#59433F] mt-2">Discover your kind of joy</h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.slug}`} className="group block overflow-hidden rounded-[28px] bg-white shadow-soft border border-[#F0E0E8] transition-transform hover:-translate-y-1">
              <div className="h-64 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl text-[#59433F] mb-2">{category.name}</h3>
                <p className="text-sm text-[#59433F]/70">{category.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#8A5B67] font-medium">
                  Explore <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-app py-16">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Featured picks</p>
          <h2 className="section-title text-4xl text-[#59433F] mt-2">Our most-loved pieces</h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.filter((product) => featuredProducts.includes(product.id)).map((product) => (
            <article key={product.id} className="group rounded-[28px] bg-white p-3 shadow-soft border border-[#F0E0E8]">
              <div className="relative overflow-hidden rounded-[24px]">
                <img src={product.images[0]} alt={product.name} className="h-72 w-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-500" />
                {product.badge && <span className="absolute top-3 left-3 bg-[#F6DCE5] px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] text-[#59433F]">{product.badge}</span>}
                <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow-md"><Heart size={16} className="text-[#59433F]" /></button>
              </div>
              <div className="p-3">
                <h3 className="font-serif text-2xl text-[#59433F] mt-2">{product.name}</h3>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-semibold text-[#59433F]">₹{product.price}</span>
                  {product.originalPrice && <span className="text-sm line-through text-[#8A5B67]">₹{product.originalPrice}</span>}
                </div>
                <div className="mt-4 flex gap-2">
                  <Link to={`/product/${product.id}`} className="flex-1 text-center bg-[#F6DCE5] text-[#59433F] px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#EBC7D3] transition-colors">View Details</Link>
                  <button className="bg-[#59433F] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#4C3733]">Add to Cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-app py-16">
        <div className="rounded-[36px] bg-[#F8EFE7] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Special collection</p>
            <h2 className="section-title text-4xl text-[#59433F] mt-2">Blind Date With a Book</h2>
            <p className="mt-4 text-[#59433F]/80">Discover a mystery English novel wrapped in kraft paper with a dusty-pink satin ribbon, a magnetic bookmark, a book-themed sticker sheet and a reading ritual card.</p>
            <p className="mt-4 text-sm text-[#59433F]/70">The title and cover stay a secret until you unbox it, making every reveal feel like a little treasure.</p>
            <Link to="/product/blind-date-book" className="mt-6 inline-flex items-center gap-2 bg-[#D99AAE] text-white px-6 py-3 rounded-full hover:bg-[#C8899C] transition-colors">
              Discover Your Mystery Book <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=1200&q=80" alt="Mystery book gift set" className="rounded-[30px] w-full h-[420px] object-cover" />
          </div>
        </div>
      </section>

      <section className="container-app py-16">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Why shop with us</p>
          <h2 className="section-title text-4xl text-[#59433F] mt-2">Thoughtful gifting, easy shopping</h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
          {[['Curated picks', Sparkles], ['Beautiful packaging', Gift], ['Little surprises', Heart], ['Secure checkout', ShieldCheck], ['Customer support', User]].map(([label, Icon]) => (
            <div key={label} className="soft-card rounded-[24px] p-5 text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-[#F6DCE5] text-[#59433F] flex items-center justify-center mb-4"><Icon size={24} /></div>
              <p className="font-medium text-[#59433F]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-app py-16">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Instagram</p>
          <h2 className="section-title text-4xl text-[#59433F] mt-2">A little peek into our world</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((item) => (
            <div key={item} className="overflow-hidden rounded-[26px] h-64 shadow-soft">
              <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80" alt="Instagram gallery" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#D99AAE] text-white px-6 py-3 rounded-full hover:bg-[#C8899C] transition-colors">
            Follow us on Instagram <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="container-app py-16">
        <div className="rounded-[36px] bg-[#F8EFE7] p-8 md:p-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Newsletter</p>
          <h2 className="section-title text-4xl text-[#59433F] mt-2">Be the first to know about our new arrivals and little surprises.</h2>
          <div className="mt-6 max-w-xl mx-auto flex flex-col md:flex-row gap-3">
            <input type="email" placeholder="Your email address" className="flex-1 rounded-full border border-[#E2CBD5] bg-white px-5 py-3 outline-none" />
            <button className="bg-[#59433F] text-white px-6 py-3 rounded-full hover:bg-[#4C3733]">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
