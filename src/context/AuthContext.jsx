import { useContext, useEffect, useMemo, useState, createContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('tpa-user') || 'null');
      return saved;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem('tpa-user', JSON.stringify(user));
    else localStorage.removeItem('tpa-user');
  }, [user]);

  const login = ({ name, email, password }) => {
    const role = email.toLowerCase().includes('admin') ? 'admin' : 'customer';
    const nextUser = { name: name || 'Lovely Customer', email, password, role };
    setUser(nextUser);
    return nextUser;
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
