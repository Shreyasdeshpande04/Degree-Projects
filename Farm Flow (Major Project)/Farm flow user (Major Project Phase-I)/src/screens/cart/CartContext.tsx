// CartContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  originalPrice?: number;
  offer?: string;
  deliveryDate?: string;
};

type CartContextType = {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

const SAMPLE_CART: CartItemType[] = [
  {
    id: '1',
    name: 'Fresh Apples (1kg)',
    price: 120,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80',
    originalPrice: 150,
    deliveryDate: 'Tomorrow',
  },
  {
    id: '2',
    name: 'Organic Bananas (1 dozen)',
    price: 80,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e16d?auto=format&fit=crop&w=400&q=80',
    originalPrice: 99,
    deliveryDate: 'Tomorrow',
  },
  {
    id: '3',
    name: 'Broccoli (500g)',
    price: 60,
    quantity: 3,
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    originalPrice: 80,
    deliveryDate: 'Tomorrow',
  },
];

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>(SAMPLE_CART);

  const addToCart = (item: CartItemType) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
