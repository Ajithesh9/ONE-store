import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate Total
  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);

  return (
    <div className="min-h-screen bg-[#0C0E12] pt-28 px-6 md:px-12 text-white font-sans">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold mb-8 text-[#BB86FC]">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-[#1E1E1E] rounded-xl border border-gray-800">
            <p className="text-gray-400 text-lg mb-4">Your cart is empty.</p>
            <Link
              to="/#pricing"
              className="inline-block px-6 py-3 bg-[#BB86FC] text-black font-bold rounded hover:bg-[#9e6be0] transition"
            >
              Browse Plans
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-[#1E1E1E] p-6 rounded-xl border border-gray-800 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ color: item.color }}>
                      {item.name} Plan
                    </h3>
                    <p className="text-gray-400 text-sm">{item.period} Billing</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-bold text-white">₹{item.price}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-3 text-red-400 hover:text-red-300 flex items-center text-sm transition"
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#1E1E1E] p-6 rounded-xl border border-gray-800 sticky top-28">
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-4">Order Summary</h3>

                <div className="flex justify-between mb-6 text-xl font-bold text-white border-t border-gray-700 pt-4">
                  <span>Total</span>
                  <span className="text-[#03DAC6]">₹{total}</span>
                </div>

                {/* THIS BUTTON REDIRECTS TO PAYMENT PAGE */}
                <button
                  className="w-full py-3 bg-[#03DAC6] text-black font-bold rounded hover:bg-[#02b3a2] transition"
                  onClick={() => navigate('/payment')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;