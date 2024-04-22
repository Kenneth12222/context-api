

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a new context for shopping
const ShoppingContext = createContext();

// Custom hook to use the shopping context
export const useShopping = () => {
    return useContext(ShoppingContext);
};

const ShoppingProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    const addToCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }]);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map((item) =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    // Value provided by the context
    const value = {
        products,
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        toggleCart,
    };

    return <ShoppingContext.Provider value={value}>{children}</ShoppingContext.Provider>;
};

export { ShoppingProvider };


