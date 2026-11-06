import { ArrowRight, Gift, Heart, ShieldCheck, Sparkles, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories, featuredProducts, products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

function ProductPreview({ product }) {
  const { addItem } = useCart();
  const { items: wishlist, toggleItem } = useWishlist();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <article className="group rounded-[28px] bg-white p-3 shadow-soft border border-[#F0E0E8]">
      <div className="relative overflow-hidden rounded-[24px]">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img src={product.images[0]} alt={`${product.name} — sample inspiration image`} loading="lazy" className="h-72 w-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-500" />
        </Link>
        <span className="absolute top-3 left-3 bg-[#F6DCE5] px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] text-[#59433F]">{product.badge}</span>
        <button type="button" onClick={() => toggleItem(product.id)} aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'} className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md">
          <Heart size={16} className={isWishlisted ? 'fill-[#D99AAE] text-[#D99AAE]' : 'text-[#59433F]'} />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-serif text-2xl text-[#59433F] mt-2">{product.name}</h3>
        <p className="mt-2 text-xs text-[#8A5B67]">{product.imageNote}</p>
        <div className="mt-3 text-lg font-semibold text-[#59433F]">{formatPrice(product.price)} <span className="text-xs font-normal">(launch price estimate)</span></div>
        <div className="mt-4 flex gap-2">
          <Link to={`/product/${product.id}`} className="flex-1 text-center bg-[#F6DCE5] text-[#59433F] px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#EBC7D3]">Discover</Link>
          <button type="button" disabled={product.launchStatus !== 'available'} onClick={() => addItem(product)} className="bg-[#59433F] text-white px-4 py-2.5 rounded-full text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">
            {product.launchStatus === 'available' ? 'Add to Cart' : 'Coming soon'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="pink-surface">
        <div className="container-app py-10 md:py-16 lg:py-20 grid lg:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A5B67] mb-4">A little boutique in the making</p>
            <h1 className="section-title text-5xl md:text-6xl text-[#59433F] leading-[1.05]">Little Things, Lovely Surprises.</h1>
            <p className="mt-5 text-lg text-[#59433F]/80 max-w-xl">We’re preparing our first two thoughtful finds: a mystery book moment and a glass tumbler for everyday sips.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="inline-flex items-center gap-2 bg-[#59433F] text-white px-6 py-3 rounded-full hover:bg-[#4C3733] transition-colors">Meet the first collection <ArrowRight size={16} /></Link>
              <a href="#our-story" className="inline-flex items-center gap-2 border border-[#D99AAE] bg-white/70 px-6 py-3 rounded-full text-[#59433F] hover:bg-white transition-colors">Our launch story</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[36px] overflow-hidden shadow-soft border border-[#F2E0E6]">
              <img src={products[0].images[1]} alt="Sample inspiration image for a bookish gift" className="w-full h-[420px] md:h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-5 left-5 bg-white/95 px-4 py-3 rounded-2xl shadow-soft border border-[#F2E0E6]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Our first little drop</p>
              <p className="font-serif text-2xl text-[#59433F]">Two thoughtful finds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-app py-16">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">The first collection</p>
          <h2 className="section-title text-4xl text-[#59433F] mt-2">Starting small, with lots of love</h2>
          <p className="mt-3 text-[#59433F]/70">Just two planned products for our first launch. More lovely things can join us later.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.slug}`} className="group block overflow-hidden rounded-[28px] bg-white shadow-soft border border-[#F0E0E8] transition-transform hover:-translate-y-1">
              <div className="h-64 overflow-hidden"><img src={category.image} alt={`${category.name} sample inspiration`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-5"><h3 className="font-serif text-2xl text-[#59433F] mb-2">{category.name}</h3><p className="text-sm text-[#59433F]/70">{category.description}</p><span className="mt-4 inline-flex items-center gap-2 text-[#8A5B67] font-medium">Take a peek <ArrowRight size={16} /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-app py-10">
        <div className="mb-8 text-center"><p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Coming soon</p><h2 className="section-title text-4xl text-[#59433F] mt-2">Our first two finds</h2></div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {products.filter((product) => featuredProducts.includes(product.id)).map((product) => <ProductPreview key={product.id} product={product} />)}
        </div>
        <p className="mt-5 text-center text-xs text-[#8A5B67]">Prices are estimates. Product photos are inspiration images, not photos of our actual inventory. Orders are not open yet.</p>
      </section>

      <section id="our-story" className="container-app py-16">
        <div className="rounded-[36px] bg-[#F8EFE7] p-8 md:p-12 grid lg:grid-cols-2 items-center gap-8">
          <div><p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">A little note from us</p><h2 className="section-title text-4xl text-[#59433F] mt-2">Small beginnings, meaningful gifts.</h2><p className="mt-4 text-[#59433F]/80">We’re a new small business building our first collection with care. We’ll share real product photos, final details and availability as soon as our products arrive and are ready to ship.</p><Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-[#D99AAE] text-white px-6 py-3 rounded-full hover:bg-[#C8899C]">Say hello <ArrowRight size={16} /></Link></div>
          <div className="grid grid-cols-2 gap-4">
            {[[Sparkles, 'Thoughtfully chosen'], [Gift, 'Gift-ready moments'], [Heart, 'A little joy'], [ShieldCheck, 'Clear, honest details']].map(([Icon, text]) => <div key={text} className="soft-card rounded-[24px] p-5 text-center"><div className="mx-auto w-14 h-14 rounded-full bg-[#F6DCE5] text-[#59433F] flex items-center justify-center mb-3"><Icon size={24} /></div><p className="font-medium text-sm">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="container-app py-10">
        <div className="rounded-[36px] bg-white p-8 md:p-12 text-center border border-[#F0E0E8] shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Follow along</p>
          <h2 className="section-title text-4xl text-[#59433F] mt-2">Be here for our first little launch.</h2>
          <p className="mt-3 text-[#59433F]/70">Follow us on Instagram for product reveals and launch updates.</p>
          <a href={`https://instagram.com/${String(import.meta.env.VITE_INSTAGRAM_USERNAME || 'thepaperaffair').replace(/^@/, '')}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#59433F] text-white px-6 py-3 rounded-full">Follow on Instagram <ArrowRight size={16} /></a>
        </div>
      </section>
    </>
  );
}
