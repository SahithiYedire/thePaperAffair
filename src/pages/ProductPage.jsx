import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Heart, Minus, Plus, ShieldCheck, Truck } from 'lucide-react';
import { useState } from 'react';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === id);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product?.details?.color?.[0] || 'Details coming soon');
  const { addItem } = useCart();
  const { items: wishlist, toggleItem } = useWishlist();

  if (!product) {
    return <div className="container-app py-20 text-center"><h1 className="section-title text-4xl">Product not found</h1><Link to="/shop" className="mt-5 inline-block text-[#8A5B67] underline">Back to our collection</Link></div>;
  }

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id);
  const isAvailable = product.launchStatus === 'available';

  return (
    <div className="container-app py-12">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-[#8A5B67] mb-6"><ArrowLeft size={16} /> Back</button>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="overflow-hidden rounded-[30px] bg-white shadow-soft border border-[#F0E0E8] p-3"><img src={selectedImage} alt={`${product.name} — sample inspiration image`} className="w-full h-[420px] md:h-[500px] object-cover rounded-[24px]" /></div>
          <p className="mt-3 text-xs text-[#8A5B67]">{product.imageNote}</p>
          <div className="mt-4 grid grid-cols-3 gap-3">{product.images.map((image) => <button key={image} type="button" onClick={() => setSelectedImage(image)} aria-label="Show product image" className={`overflow-hidden rounded-[20px] border ${selectedImage === image ? 'border-[#D99AAE]' : 'border-[#F0E0E8]'}`}><img src={image} alt="Sample inspiration thumbnail" className="h-28 w-full object-cover" /></button>)}</div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">{product.badge}</p>
          <h1 className="section-title text-4xl md:text-5xl text-[#59433F] mt-2">{product.name}</h1>
          <div className="mt-5 text-3xl font-semibold text-[#59433F]">{formatPrice(product.price)} <span className="text-sm font-normal">estimated launch price</span></div>
          <p className="mt-6 text-[#59433F]/80">{product.description}</p>
          <div className="mt-8"><p className="text-sm font-medium mb-2">Planned options</p><div className="flex flex-wrap gap-2">{(product.details?.color || ['Details coming soon']).map((option) => <button key={option} type="button" onClick={() => setSelectedVariant(option)} className={`px-4 py-2 rounded-full border ${selectedVariant === option ? 'bg-[#59433F] text-white border-[#59433F]' : 'bg-white border-[#E4D5DA] text-[#59433F]'}`}>{option}</button>)}</div></div>
          <div className="mt-8 flex items-center gap-3">
            {isAvailable && <div className="inline-flex items-center border border-[#E4D5DA] bg-white rounded-full overflow-hidden"><button type="button" onClick={() => setQty((current) => Math.max(1, current - 1))} aria-label="Decrease quantity" className="p-3"><Minus size={16} /></button><span className="min-w-10 text-center font-medium">{qty}</span><button type="button" onClick={() => setQty((current) => Math.min(product.stock, current + 1))} aria-label="Increase quantity" className="p-3"><Plus size={16} /></button></div>}
            <button type="button" disabled={!isAvailable} onClick={() => addItem(product, qty)} className="flex-1 bg-[#59433F] text-white px-6 py-3 rounded-full hover:bg-[#4C3733] disabled:cursor-not-allowed disabled:opacity-60">{isAvailable ? 'Add to Cart' : 'Launching soon — orders not open'}</button>
            <button type="button" onClick={() => toggleItem(product.id)} aria-label={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'} className="p-3 rounded-full border border-[#E4D5DA] bg-white"><Heart size={18} className={wishlist.includes(product.id) ? 'fill-[#D99AAE] text-[#D99AAE]' : ''} /></button>
          </div>
          <div className="mt-8 space-y-4 rounded-[28px] bg-[#F8EFE7] p-5">
            <div className="flex items-center gap-3"><CheckCircle2 className="text-[#D99AAE]" size={20} /><span>{isAvailable ? `${product.stock} in stock` : 'Not available to order yet — we are waiting for our first inventory.'}</span></div>
            <div className="flex items-center gap-3"><Truck className="text-[#D99AAE]" size={20} /><span>{product.shippingInfo}</span></div>
            <div className="flex items-center gap-3"><ShieldCheck className="text-[#D99AAE]" size={20} /><span>Final product details and actual product photographs will be added before launch.</span></div>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && <div className="mt-16"><h2 className="section-title text-4xl text-[#59433F] mb-6">You may also like</h2><div className="grid md:grid-cols-2 gap-6">{relatedProducts.map((related) => <Link key={related.id} to={`/product/${related.id}`} className="group rounded-[28px] bg-white p-3 shadow-soft border border-[#F0E0E8]"><img src={related.images[0]} alt={`${related.name} — sample inspiration image`} className="h-64 w-full object-cover rounded-[22px]" /><div className="p-3"><h3 className="font-serif text-2xl text-[#59433F]">{related.name}</h3><p className="mt-3 text-lg font-semibold">{formatPrice(related.price)} estimated</p></div></Link>)}</div></div>}
    </div>
  );
}
