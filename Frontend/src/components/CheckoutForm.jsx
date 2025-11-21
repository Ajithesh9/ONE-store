import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import Cart
import { useAuth } from '../context/AuthContext'; // Import Auth

const CheckoutForm = ({ amount, clearCart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { cartItems } = useCart(); // Get the actual items
    const { user } = useAuth(); // Get user token

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);

        // 1. Confirm Payment with Stripe
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/dashboard`,
            },
            redirect: "if_required",
        });

        if (error) {
            setMessage(error.message);
            setIsProcessing(false);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {

            // 2. PAYMENT SUCCESS! Now Save Order to Database
            try {
                const orderData = {
                    orderItems: cartItems.map(item => ({
                        name: item.name,
                        price: item.price,
                        product: item.id,
                        image: "", // Optional: Add plan image URL if you have one
                    })),
                    paymentMethod: "Card",
                    itemsPrice: amount,
                    taxPrice: 0,
                    totalPrice: amount,
                };

                const res = await fetch('/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    },
                    body: JSON.stringify(orderData)
                });

                if (res.ok) {
                    setMessage("Payment & Order Successful!");
                    clearCart();
                    setTimeout(() => navigate('/dashboard'), 2000);
                } else {
                    setMessage("Payment successful, but order save failed. Contact support.");
                }

            } catch (err) {
                console.error("Order Save Error:", err);
                setMessage("Critical error saving order.");
            }

            setIsProcessing(false);
        } else {
            setMessage("Something went wrong.");
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <PaymentElement />
            <button
                disabled={isProcessing || !stripe || !elements}
                id="submit"
                className="w-full mt-6 bg-[#03DAC6] text-black font-bold py-3 rounded hover:bg-[#02b3a2] transition disabled:opacity-50"
            >
                {isProcessing ? "Processing..." : `Pay ₹${amount.toFixed(2)}`}
            </button>
            {message && <div className="mt-4 text-center font-semibold text-[#BB86FC]">{message}</div>}
        </form>
    );
};

export default CheckoutForm;