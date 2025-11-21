import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ amount, clearCart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your actual local URL
                return_url: `${window.location.origin}/dashboard`,
            },
            redirect: "if_required", // Prevents redirect if not needed (cleaner UX)
        });

        if (error) {
            setMessage(error.message);
            setIsProcessing(false);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setMessage("Payment Successful!");
            clearCart(); // Clear the cart context
            // Here you would typically call the "createOrder" backend API
            setTimeout(() => navigate('/dashboard'), 2000);
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
                {isProcessing ? "Processing..." : `Pay ₹${amount}`}
            </button>
            {message && <div className="mt-4 text-red-400 text-center">{message}</div>}
        </form>
    );
};

export default CheckoutForm;