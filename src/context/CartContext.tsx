import React, { createContext, useState, ReactNode } from "react";
import { CartItem, Product } from "../types";

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    increaseQty: (id: number) => void;
    decreaseQty: (id: number) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    increaseQty: () => {},
    decreaseQty: () => {},
    clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart(prev => {
           const existing = cart.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }
            return [...prev, { ...product, quantity: 1 }]; 
        });
    };

    const increaseQty = (id: number) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id: number) => {
        setCart(prev =>
            prev
                .map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
            );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};