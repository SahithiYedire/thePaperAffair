import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      alert('Please enter your email and password.');
      return;
    }

    login(form);
    navigate('/account');
  };

  return (
    <div className="container-app py-16">
      <div className="max-w-xl mx-auto rounded-[28px] bg-white p-8 shadow-soft border border-[#F0E0E8]">
        <h1 className="section-title text-4xl text-[#59433F] mb-6">Login or create your account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
          <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="Email Address" className="w-full rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
          <input value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" placeholder="Password" className="w-full rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
          <button type="submit" className="w-full bg-[#59433F] text-white px-6 py-3 rounded-full">Continue</button>
        </form>

        <p className="mt-4 text-sm text-[#59433F]/70">Need guest checkout? <Link to="/checkout" className="text-[#8A5B67] underline">Continue as guest</Link></p>
      </div>
    </div>
  );
}
