import { Link } from 'react-router-dom';
import { Minus, Plus, Tag, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../config/siteConfig';
import { formatPrice } from '../data/products';

export default function CartPage() {
  const { items, updateQty, removeItem, clearCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + (Number(item.price) || 0) * (item.qty || 1), 0),
    [items]
  );

  const shipping = subtotal > siteConfig.freeShippingThreshold ? 0 : siteConfig.shippingFee;
  const discount = appliedCoupon === 'WELCOME10' ? subtotal * 0.1 : 0;
  const total = Math.max(0, subtotal + shipping - discount);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'WELCOME10') {
      setAppliedCoupon(coupon.trim().toUpperCase());
    } else {
      setAppliedCoupon('');
      alert('Coupon not valid. Try WELCOME10');
    }
  };

  return (
    <div className="container-app py-12">
      <h1 className="section-title text-4xl md:text-5xl text-[#59433F] mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="rounded-[28px] bg-white p-12 text-center shadow-soft border border-[#F0E0E8]">
          <p className="text-xl text-[#59433F]">Your cart is empty.</p>
          <Link to="/shop" className="mt-5 inline-block bg-[#59433F] text-white px-6 py-3 rounded-full">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid xl:grid-cols-[1.5fr_0.8fr] gap-8">
          <div className="space-y-5">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-4 rounded-[28px] bg-white p-4 shadow-soft border border-[#F0E0E8]">
                <img src={item.images[0]} alt={item.name} className="h-32 w-full md:w-32 object-cover rounded-[22px]" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-serif text-2xl text-[#59433F]">{item.name}</h2>
                      <p className="text-sm text-[#59433F]/70">{item.category}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-[#8A5B67] hover:text-[#59433F]"><Trash2 size={18} /></button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center border border-[#E4D5DA] bg-white rounded-full overflow-hidden">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-2 text-[#59433F]"><Minus size={14} /></button>
                      <span className="min-w-8 text-center text-sm">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-2 text-[#59433F]"><Plus size={14} /></button>
                    </div>
                    <div className="text-lg font-semibold">{formatPrice((item.price || 0) * item.qty)}</div>
                  </div>
                </div>
              </div>
            ))}

            <button onClick={clearCart} className="text-sm text-[#8A5B67] underline">Clear cart</button>
          </div>

          <aside className="rounded-[28px] bg-[#F8EFE7] p-6 shadow-soft border border-[#F0E0E8] h-fit">
            <h2 className="font-serif text-3xl text-[#59433F] mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm text-[#59433F]">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
              <div className="flex justify-between"><span>Discount</span><span>-{formatPrice(discount)}</span></div>
            </div>

            <div className="mt-6 flex gap-2">
              <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon code" className="flex-1 rounded-full border border-[#E4D5DA] bg-white px-4 py-2.5 outline-none" />
              <button onClick={applyCoupon} className="bg-[#59433F] text-white px-4 py-2.5 rounded-full">Apply</button>
            </div>

            <div className="mt-6 border-t border-[#E4D5DA] pt-4 flex justify-between text-lg font-semibold text-[#59433F]">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <Link to="/checkout" className="mt-6 block text-center bg-[#D99AAE] text-white px-6 py-3 rounded-full hover:bg-[#C8899C] transition-colors">Proceed to Checkout</Link>
          </aside>
        </div>
      )}
    </div>
  );
}
