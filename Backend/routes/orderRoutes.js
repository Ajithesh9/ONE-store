const express = require('express');
const router = express.Router();
const { addOrderItems, getMyOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

// Post a new order (Protected)
router.route('/').post(protect, addOrderItems);

// Get user's order history (Protected)
router.route('/myorders').get(protect, getMyOrders);

module.exports = router;