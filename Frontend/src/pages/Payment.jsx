import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CheckoutForm from '../components/CheckoutForm';
import { useNavigate } from 'react-router-dom';

// Initialize Stripe outside render to avoid recreation
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Payment = () => {
    const { cartItems, clearCart } = useCart();
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();

    // Calculate total amount
    const totalAmount = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

    useEffect(() => {
        if (!user) navigate('/login');
        if (cartItems.length === 0) navigate('/cart');

        // Create PaymentIntent on Backend
        if (totalAmount > 0) {
            fetch("/api/payment/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user?.token}`
                },
                body: JSON.stringify({ amount: totalAmount }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret))
                .catch((err) => console.error("Error creating payment intent:", err));
        }
    }, [cartItems, user, totalAmount, navigate]);

    const options = {
        clientSecret,
        theme: 'night', // Matches your dark theme
        appearance: {
            theme: 'night',
            variables: {
                colorPrimary: '#BB86FC',
                colorBackground: '#1E1E1E',
                colorText: '#ffffff',
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#0C0E12] pt-28 px-6 text-white flex justify-center">
            <div className="w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-[#BB86FC] text-center">Checkout</h1>

                <div className="bg-[#1E1E1E] p-8 rounded-xl border border-gray-800 shadow-xl">
                    <div className="mb-6 border-b border-gray-700 pb-4">
                        <p className="text-gray-400">Total to Pay</p>
                        <p className="text-3xl font-bold text-white">₹{totalAmount.toFixed(2)}</p>
                    </div>

                    {clientSecret && (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm amount={totalAmount} clearCart={clearCart} />
                        </Elements>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Payment;