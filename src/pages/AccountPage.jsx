import { useAuth } from '../context/AuthContext';

export default function AccountPage() {
  const { user, logout } = useAuth();
  const orders = JSON.parse(localStorage.getItem('tpa-order-history') || '[]');

  return (
    <div className="container-app py-12">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="section-title text-4xl text-[#59433F]">My Account</h1>
        {user && <button onClick={logout} className="text-[#8A5B67] underline">Logout</button>}
      </div>

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
        <div className="rounded-[28px] bg-white p-6 shadow-soft border border-[#F0E0E8]">
          <h2 className="font-serif text-3xl text-[#59433F]">Profile</h2>
          <div className="mt-5 space-y-2 text-[#59433F]">
            <p><strong>Name:</strong> {user?.name || 'Guest Customer'}</p>
            <p><strong>Email:</strong> {user?.email || 'guest@example.com'}</p>
            <p><strong>Role:</strong> {user?.role || 'Guest'}</p>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#F8EFE7] p-6 shadow-soft border border-[#F0E0E8]">
          <h2 className="font-serif text-3xl text-[#59433F]">Order History</h2>
          {orders.length === 0 ? (
            <p className="mt-4 text-[#59433F]/70">No orders yet. Start shopping and your order history will appear here.</p>
          ) : (
            <div className="mt-6 space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="rounded-[22px] bg-white p-4 border border-[#F0E0E8]">
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">{order.id}</span>
                    <span className="text-[#8A5B67]">{order.status}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#59433F]/70">Items: {order.items.length}</p>
                  <p className="mt-1 text-sm text-[#59433F]/70">Total: ₹{order.total}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
