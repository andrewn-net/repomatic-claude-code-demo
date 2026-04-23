'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product } from '@/lib/products';

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'summit-supply:cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  function addItem(product: Product, quantity = 1) {
    setItems((current) => {
      const existing = current.find((i) => i.product.slug === product.slug);
      if (existing) {
        return current.map((i) =>
          i.product.slug === product.slug
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        );
      }
      return [...current, { product, quantity }];
    });
  }

  function removeItem(slug: string) {
    setItems((current) => current.filter((i) => i.product.slug !== slug));
  }

  function updateQuantity(slug: string, quantity: number) {
    if (quantity <= 0) return removeItem(slug);
    setItems((current) =>
      current.map((i) =>
        i.product.slug === slug ? { ...i, quantity } : i,
      ),
    );
  }

  function clear() {
    setItems([]);
  }

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clear, itemCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
