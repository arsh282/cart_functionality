import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add item to cart with a unique ID
    const addToCart = (product) => {
        setCart([...cart, { ...product, cartId: Date.now().toString() }]); 
    };

    // Remove item from cart using cartId instead of product id
    const removeFromCart = (cartId) => {
        setCart(cart.filter(item => item.cartId !== cartId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};