import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Import Cart Context
import { useAuth } from '../context/AuthContext'; // 2. Import Auth Context

const CheckoutForm = ({ amount, clearCart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { cartItems } = useCart(); // Get actual items from cart
    const { user } = useAuth();      // Get logged-in user info

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        setIsProcessing(true);

        // ---------------------------------------------------------
        // STEP 1: Confirm Payment with Stripe
        // ---------------------------------------------------------
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Return URL is fallback for some payment methods (like iDEAL)
                return_url: `${window.location.origin}/dashboard`,
            },
            redirect: "if_required", // We handle the redirect manually for cards
        });

        if (error) {
            // Payment Failed
            console.error("Stripe Payment Error:", error);
            setMessage(error.message);
            setIsProcessing(false);
        }
        else if (paymentIntent && paymentIntent.status === 'succeeded') {

            // ---------------------------------------------------------
            // STEP 2: Payment Success! Now Save Order to Database
            // ---------------------------------------------------------
            try {
                const orderData = {
                    orderItems: cartItems.map(item => ({
                        name: item.name,
                        price: Number(item.price), // Ensure Number
                        product: item.id,          // The Plan ID (e.g. 'gold')
                        image: "",                 // Optional image URL
                    })),
                    paymentMethod: "Card",
                    itemsPrice: Number(amount),    // Ensure Number
                    taxPrice: 0,
                    totalPrice: Number(amount),    // Ensure Number
                    isPaid: true,
                    paidAt: new Date().toISOString(),
                };

                const res = await fetch('/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}` // Auth Token
                    },
                    body: JSON.stringify(orderData)
                });

                const data = await res.json();

                if (res.ok) {
                    // Success: Clear UI and Redirect
                    setMessage("Payment & Order Successful!");
                    if (clearCart) clearCart(); // Clear the global cart state

                    // Wait 2 seconds so user sees success message, then go to dashboard
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 2000);
                } else {
                    // Backend Rejected the Order
                    console.error("Order Save Failed:", data);
                    setMessage(`Payment succeeded, but order saving failed: ${data.message}`);
                }

            } catch (err) {
                console.error("Network Error Saving Order:", err);
                setMessage(`Critical Error: ${err.message}`);
            }

            setIsProcessing(false);
        } else {
            // Catch-all for other statuses (processing, requires_action, etc.)
            setMessage("Payment status: " + (paymentIntent ? paymentIntent.status : "Unknown"));
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            {/* Stripe's Secure UI Element */}
            <PaymentElement />

            <button
                disabled={isProcessing || !stripe || !elements}
                id="submit"
                className="w-full mt-6 bg-[#03DAC6] text-black font-bold py-3 rounded hover:bg-[#02b3a2] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isProcessing ? "Processing Payment..." : `Pay ₹${amount.toFixed(2)}`}
            </button>

            {/* Status Message Area */}
            {message && (
                <div className={`mt-4 text-center font-medium p-3 rounded ${message.includes("Successful") ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                    {message}
                </div>
            )}
        </form>
    );
};

export default CheckoutForm;