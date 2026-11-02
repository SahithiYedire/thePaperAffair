import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { siteConfig } from '../config/siteConfig';
import { formatPrice } from '../data/products';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= siteConfig.freeShippingThreshold ? 0 : siteConfig.shippingFee;
  const total = subtotal + shipping;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const required = Object.values(form).every((value) => value.trim() !== '');
    if (!required) {
      alert('Please fill in all checkout details.');
      return;
    }

    const order = {
      id: `TPA-${Date.now()}`,
      items,
      customer: form,
      total,
      status: 'Confirmed'
    };

    const previousOrders = JSON.parse(localStorage.getItem('tpa-order-history') || '[]');
    localStorage.setItem('tpa-order-history', JSON.stringify([order, ...previousOrders]));
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container-app py-16 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-[28px] p-10 shadow-soft border border-[#F0E0E8]">
          <h1 className="section-title text-4xl text-[#59433F]">Order confirmed</h1>
          <p className="mt-4 text-[#59433F]/80">Thank you for shopping with {siteConfig.brandName}. Your order is being prepared with care.</p>
          <p className="mt-4 text-sm text-[#8A5B67]">Development / Test Mode: this is a demo checkout flow. Live payment requires Razorpay keys and backend verification.</p>
          <button onClick={() => navigate('/account')} className="mt-6 bg-[#59433F] text-white px-6 py-3 rounded-full">View My Orders</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-app py-12">
      <h1 className="section-title text-4xl md:text-5xl text-[#59433F] mb-8">Checkout</h1>
      <div className="grid xl:grid-cols-[1.3fr_0.7fr] gap-8">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-[28px] bg-white p-6 shadow-soft border border-[#F0E0E8]">
          <div>
            <h2 className="font-serif text-3xl text-[#59433F] mb-4">Shipping Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" className="rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
              <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" className="rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
              <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
              <input name="address" value={form.address} onChange={handleChange} placeholder="House / Building Details" className="md:col-span-2 rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
              <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
              <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="PIN Code" className="rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-[#59433F] mb-4">Payment Method</h2>
            <div className="space-y-3 text-[#59433F]">
              {['UPI', 'Debit Card', 'Credit Card', 'Net Banking'].map((method) => (
                <label key={method} className="flex items-center gap-3 border border-[#E4D5DA] rounded-xl p-3 bg-[#FFF9F5]">
                  <input type="radio" name="payment" defaultChecked={method === 'UPI'} />
                  <span>{method}</span>
                </label>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#8A5B67]">Development/Test Mode: real payment processing is disabled until Razorpay keys and backend verification are configured.</p>
          </div>

          <button type="submit" className="w-full bg-[#D99AAE] text-white px-6 py-3 rounded-full hover:bg-[#C8899C] transition-colors">Place Order</button>
        </form>

        <aside className="rounded-[28px] bg-[#F8EFE7] p-6 shadow-soft border border-[#F0E0E8] h-fit">
          <h2 className="font-serif text-3xl text-[#59433F] mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm text-[#59433F]">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between gap-4">
                <span>{item.name} × {item.qty}</span>
                <span>{formatPrice(item.price * item.qty)}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-5 border-t border-[#E4D5DA] space-y-3 text-sm text-[#59433F]">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
            <div className="flex justify-between text-lg font-semibold"><span>Total</span><span>{formatPrice(total)}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
