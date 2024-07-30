const express = require('express');

const clientRoutes = require('./routes/clientRoutes');
const productRoutes = require('./routes/productRoutes');

const router = express.Router();

// Use Routes
router.use('/clients', clientRoutes);
router.use('/products', productRoutes);

module.exports = router;
