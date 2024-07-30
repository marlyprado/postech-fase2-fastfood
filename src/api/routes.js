const express = require('express');

const clientRoutes = require('./routes/clientRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const router = express.Router();

// Use Routes
router.use('/clients', clientRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
