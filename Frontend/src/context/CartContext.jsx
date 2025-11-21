import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from Local Storage on startup
    useEffect(() => {
        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to Local Storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        // Rule: Only 1 item allowed in cart
        if (cartItems.length >= 1) {
            alert("Limit Reached: You can only have 1 active subscription plan in your cart.");
            return false; // Indicate failure
        }

        // Check if item already exists (optional specific check)
        const exists = cartItems.find((item) => item.id === product.id);
        if (exists) {
            alert("This item is already in your cart.");
            return false;
        }

        setCartItems([product]); // Since max is 1, we could also just do [product]
        return true; // Indicate success
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);