const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController');

router.post('/', registerUser); // Calls registerUser logic
router.post('/login', authUser); // Calls authUser logic

module.exports = router;