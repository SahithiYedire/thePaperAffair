import { useContext, useEffect, useMemo, useState, createContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('tpa-cart') || '[]');
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('tpa-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product, qty = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: Math.min(item.qty + qty, product.stock || 99) } : item
        );
      }
      return [...current, { ...product, qty }];
    });
  };

  const updateQty = (id, qty) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, Math.min(qty, item.stock || 99)) } : item
      )
    );
  };

  const removeItem = (id) => setItems((current) => current.filter((item) => item.id !== id));
  const clearCart = () => setItems([]);

  const value = useMemo(() => ({ items, addItem, removeItem, updateQty, clearCart }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
