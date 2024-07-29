const express = require('express');

const clientRoutes = require('./routes/clientRoutes');

const router = express.Router();

// Use Routes
router.use('/clients', clientRoutes);

module.exports = router;
