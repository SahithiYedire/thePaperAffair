import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { products } from '../data/products';

export default function AdminDashboardPage() {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  const stats = {
    products: products.length,
    stock: products.reduce((sum, item) => sum + item.stock, 0),
    orders: 42,
    revenue: '₹1,24,500'
  };

  return (
    <div className="container-app py-12">
      <h1 className="section-title text-4xl text-[#59433F] mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-5">
        {Object.entries(stats).map(([label, value]) => (
          <div key={label} className="rounded-[24px] bg-white p-5 shadow-soft border border-[#F0E0E8]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A5B67] mb-2">{label}</p>
            <h3 className="font-serif text-3xl text-[#59433F]">{value}</h3>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[28px] bg-[#F8EFE7] p-6 shadow-soft border border-[#F0E0E8]">
        <h2 className="font-serif text-3xl text-[#59433F] mb-4">Manage Products</h2>
        <div className="space-y-3">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between rounded-[20px] bg-white p-4 border border-[#F0E0E8]">
              <div>
                <p className="font-medium text-[#59433F]">{product.name}</p>
                <p className="text-sm text-[#59433F]/70">Stock: {product.stock}</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-[#F6DCE5] text-[#59433F] px-3 py-2 rounded-full text-sm">Edit</button>
                <button className="bg-[#59433F] text-white px-3 py-2 rounded-full text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
