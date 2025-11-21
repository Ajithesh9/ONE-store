require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Routes Imports
const userRoutes = require('./routes/userRoutes');
// Make sure orderRoutes is imported if you created it previously
// const orderRoutes = require('./routes/orderRoutes'); 
const paymentRoutes = require('./routes/paymentRoutes'); // NEW: Import Payment

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Mount Routes
app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes); 
app.use('/api/payment', paymentRoutes); // NEW: Mount Payment Route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));