
import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from 'react';

// Create a new context for shopping
const ShoppingContext = createContext();

// Custom hook to use the shopping context
export const useShopping = () => {
    return useContext(ShoppingContext);
};

// API call to fetch products
const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return await response.json();
};

const ShoppingProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        loadProducts();
    }, []);

    const addToCart = useCallback((product) => {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }, []);

    const removeFromCart = useCallback((productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }, []);

    const increaseQuantity = useCallback((productId) => {
        setCart((prevCart) => prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    }, []);

    const decreaseQuantity = useCallback((productId) => {
        setCart((prevCart) => prevCart.map((item) =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    }, []);

    const toggleCart = useCallback(() => {
        setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
    }, []);

    const value = useMemo(() => ({
        products,
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        toggleCart,
    }), [products, cart, isCartOpen, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, toggleCart]);

    return <ShoppingContext.Provider value={value}>{children}</ShoppingContext.Provider>;
};

export { ShoppingProvider };
