import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="container-app py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-[28px] bg-[#F8EFE7] p-8 shadow-soft border border-[#F0E0E8]">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67]">Contact</p>
          <h1 className="section-title text-4xl text-[#59433F] mt-3">We would love to hear from you.</h1>
          <p className="mt-4 text-[#59433F]/80">Whether you’re gifting someone special or need help with an order, we’re here for you.</p>
          <div className="mt-6 space-y-3 text-[#59433F]">
            <p>Email: hello@thepaperaffair.in</p>
            <p>WhatsApp: +91 98765 43210</p>
            <p>Instagram: @thepaperaffair</p>
            <p>Address: Bengaluru, India</p>
          </div>
        </div>

        <form className="rounded-[28px] bg-white p-8 shadow-soft border border-[#F0E0E8] space-y-4">
          <input placeholder="Your name" className="w-full rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
          <input type="email" placeholder="Email address" className="w-full rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
          <textarea rows="5" placeholder="Type your message here" className="w-full rounded-xl border border-[#E4D5DA] px-4 py-3 outline-none" />
          <button type="submit" className="bg-[#59433F] text-white px-6 py-3 rounded-full">Send Message</button>
        </form>
      </div>
    </div>
  );
}
