import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Heart, Minus, Plus, ShieldCheck, Star, Truck } from 'lucide-react';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === id) || products[0];
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.details?.color?.[0] || 'Default');
  const { addItem } = useCart();

  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <div className="container-app py-12">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-[#8A5B67] mb-6">
        <ArrowLeft size={16} /> Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="overflow-hidden rounded-[30px] bg-white shadow-soft border border-[#F0E0E8] p-3">
            <img src={selectedImage} alt={product.name} className="w-full h-[500px] object-cover rounded-[24px]" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {product.images.map((image) => (
              <button key={image} onClick={() => setSelectedImage(image)} className={`overflow-hidden rounded-[20px] border ${selectedImage === image ? 'border-[#D99AAE]' : 'border-[#F0E0E8]'}`}>
                <img src={image} alt={product.name} className="h-28 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">{product.category}</p>
          <h1 className="section-title text-4xl md:text-5xl text-[#59433F] mt-2">{product.name}</h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1 text-[#D99AAE]">{[...Array(5)].map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
            <span className="text-sm text-[#59433F]/70">4.9 rating · 120 reviews</span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-3xl font-semibold text-[#59433F]">{formatPrice(product.price)}</span>
            {product.originalPrice && <span className="text-xl line-through text-[#8A5B67]">{formatPrice(product.originalPrice)}</span>}
          </div>

          <p className="mt-6 text-[#59433F]/80">{product.description}</p>

          <div className="mt-8">
            <p className="text-sm font-medium mb-2">Choose a colour</p>
            <div className="flex flex-wrap gap-2">
              {(product.details?.color || ['Default']).map((option) => (
                <button key={option} onClick={() => setSelectedVariant(option)} className={`px-4 py-2 rounded-full border ${selectedVariant === option ? 'bg-[#59433F] text-white border-[#59433F]' : 'bg-white border-[#E4D5DA] text-[#59433F]'}`}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="inline-flex items-center border border-[#E4D5DA] bg-white rounded-full overflow-hidden">
              <button onClick={() => setQty((current) => Math.max(1, current - 1))} className="p-3 text-[#59433F]"><Minus size={16} /></button>
              <span className="min-w-10 text-center font-medium">{qty}</span>
              <button onClick={() => setQty((current) => Math.min(product.stock || 99, current + 1))} className="p-3 text-[#59433F]"><Plus size={16} /></button>
            </div>
            <button onClick={() => addItem({ ...product, stock: product.stock || 99 }, qty)} className="flex-1 bg-[#59433F] text-white px-6 py-3 rounded-full hover:bg-[#4C3733] transition-colors">
              Add to Cart
            </button>
            <button className="p-3 rounded-full border border-[#E4D5DA] bg-white text-[#59433F]"><Heart size={18} /></button>
          </div>

          <div className="mt-8 space-y-4 rounded-[28px] bg-[#F8EFE7] p-5">
            <div className="flex items-center gap-3 text-[#59433F]"><CheckCircle2 className="text-[#D99AAE]" size={20} /><span>{product.stock} items in stock</span></div>
            <div className="flex items-center gap-3 text-[#59433F]"><Truck className="text-[#D99AAE]" size={20} /><span>{product.shippingInfo}</span></div>
            <div className="flex items-center gap-3 text-[#59433F]"><ShieldCheck className="text-[#D99AAE]" size={20} /><span>Secure packaging and customer-friendly support</span></div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="section-title text-4xl text-[#59433F] mb-6">Related products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <a key={related.id} href={`/product/${related.id}`} className="group rounded-[28px] bg-white p-3 shadow-soft border border-[#F0E0E8]">
              <img src={related.images[0]} alt={related.name} className="h-64 w-full object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-500" />
              <div className="p-3">
                <h3 className="font-serif text-2xl text-[#59433F]">{related.name}</h3>
                <p className="mt-3 text-lg font-semibold">{formatPrice(related.price)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
