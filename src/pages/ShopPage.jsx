import { useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { categories, products, formatPrice } from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('newest');
  const [priceCap, setPriceCap] = useState(3000);

  const filteredProducts = useMemo(() => {
    let list = category === 'all' ? products : products.filter((product) => product.category === category);
    list = list.filter((product) => Number(product.price) <= Number(priceCap));
    if (sortBy === 'price-low') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') list = [...list].reverse();
    return list;
  }, [category, priceCap, sortBy]);

  return (
    <div className="container-app py-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Shop</p>
          <h1 className="section-title text-4xl text-[#59433F] mt-2">{category === 'all' ? 'Shop All' : categories.find((item) => item.slug === category)?.name || 'Shop'}</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="rounded-full border border-[#E4D5DA] bg-white px-4 py-2.5 outline-none">
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <input type="range" min="200" max="3000" step="100" value={priceCap} onChange={(e) => setPriceCap(Number(e.target.value))} className="w-40 accent-[#D99AAE]" />
          <span className="self-center text-sm text-[#59433F]">Up to ₹{priceCap}</span>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button onClick={() => setSearchParams({})} className={`rounded-full px-4 py-2 text-sm ${category === 'all' ? 'bg-[#59433F] text-white' : 'bg-white border border-[#E4D5DA] text-[#59433F]'}`}>
          All
        </button>
        {categories.map((item) => (
          <button key={item.id} onClick={() => setSearchParams({ category: item.slug })} className={`rounded-full px-4 py-2 text-sm ${category === item.slug ? 'bg-[#59433F] text-white' : 'bg-white border border-[#E4D5DA] text-[#59433F]'}`}>
            {item.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <article key={product.id} className="group rounded-[28px] bg-white p-3 shadow-soft border border-[#F0E0E8]">
            <div className="relative overflow-hidden rounded-[24px]">
              <img src={product.images[0]} alt={product.name} className="h-72 w-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-500" />
              {product.badge && <span className="absolute top-3 left-3 bg-[#F6DCE5] px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] text-[#59433F]">{product.badge}</span>}
            </div>
            <div className="p-3">
              <h3 className="font-serif text-2xl text-[#59433F] mt-2">{product.name}</h3>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-lg font-semibold text-[#59433F]">{formatPrice(product.price)}</span>
                {product.originalPrice && <span className="text-sm line-through text-[#8A5B67]">{formatPrice(product.originalPrice)}</span>}
              </div>
              <div className="mt-4 flex gap-2">
                <a href={`/product/${product.id}`} className="flex-1 text-center bg-[#F6DCE5] text-[#59433F] px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#EBC7D3]">View Details</a>
                <button className="bg-[#59433F] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#4C3733]">Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
