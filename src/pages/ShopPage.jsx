import { Link, useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { categories, products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('newest');
  const [priceCap, setPriceCap] = useState(3000);
  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    let list = category === 'all' ? products : products.filter((product) => product.category === category);
    list = list.filter((product) => Number(product.price) <= Number(priceCap));
    if (sortBy === 'price-low') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') list = [...list].reverse();
    return list;
  }, [category, priceCap, sortBy]);

  const title = category === 'all' ? 'Our first collection' : categories.find((item) => item.slug === category)?.name || 'Our first collection';

  return (
    <div className="container-app py-12">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">A small first collection</p>
        <h1 className="section-title text-4xl md:text-5xl text-[#59433F] mt-2">{title}</h1>
        <p className="mt-3 text-[#59433F]/70">We’re starting with two planned products. More collections will arrive as our little business grows.</p>
      </div>

      <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          <button onClick={() => setSearchParams({})} className={`rounded-full px-4 py-2 text-sm ${category === 'all' ? 'bg-[#59433F] text-white' : 'bg-white border border-[#E4D5DA] text-[#59433F]'}`}>Both products</button>
          {categories.map((item) => <button key={item.id} onClick={() => setSearchParams({ category: item.slug })} className={`rounded-full px-4 py-2 text-sm ${category === item.slug ? 'bg-[#59433F] text-white' : 'bg-white border border-[#E4D5DA] text-[#59433F]'}`}>{item.name}</button>)}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <label className="sr-only" htmlFor="sort-products">Sort products</label>
          <select id="sort-products" value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="rounded-full border border-[#E4D5DA] bg-white px-4 py-2.5 outline-none"><option value="newest">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option></select>
          <label className="sr-only" htmlFor="price-cap">Maximum price</label>
          <input id="price-cap" type="range" min="200" max="3000" step="100" value={priceCap} onChange={(event) => setPriceCap(Number(event.target.value))} className="w-36 accent-[#D99AAE]" />
          <span className="text-sm">Up to ₹{priceCap}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredProducts.map((product) => (
          <article key={product.id} className="group rounded-[28px] bg-white p-3 shadow-soft border border-[#F0E0E8]">
            <div className="relative overflow-hidden rounded-[24px]">
              <Link to={`/product/${product.id}`}><img src={product.images[0]} alt={`${product.name} — sample inspiration image`} loading="lazy" className="h-72 w-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-500" /></Link>
              <span className="absolute top-3 left-3 bg-[#F6DCE5] px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] text-[#59433F]">{product.badge}</span>
            </div>
            <div className="p-3">
              <h2 className="font-serif text-2xl text-[#59433F] mt-2">{product.name}</h2>
              <p className="mt-2 text-xs text-[#8A5B67]">{product.imageNote}</p>
              <div className="mt-3 text-lg font-semibold text-[#59433F]">{formatPrice(product.price)} <span className="text-xs font-normal">(launch price estimate)</span></div>
              <div className="mt-4 flex gap-2">
                <Link to={`/product/${product.id}`} className="flex-1 text-center bg-[#F6DCE5] text-[#59433F] px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#EBC7D3]">Learn more</Link>
                <button type="button" disabled={product.launchStatus !== 'available'} onClick={() => addItem(product)} className="bg-[#59433F] text-white px-4 py-2.5 rounded-full text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50">{product.launchStatus === 'available' ? 'Add to Cart' : 'Coming soon'}</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-[#8A5B67]">Prices are estimates, not final offers. Orders are not open until products and final details are confirmed.</p>
    </div>
  );
}
