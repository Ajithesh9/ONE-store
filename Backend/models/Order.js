const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Connects this order to the User model
    },
    orderItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        product: { type: String, required: true }, // e.g., 'gold-plan'
        image: { type: String },
      },
    ],
    paymentMethod: {
      type: String,
      required: true,
      default: 'Card',
    },
    paymentResult: { // Data from Stripe/PayPal
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: { // For us, this means "PDF Sent"
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;