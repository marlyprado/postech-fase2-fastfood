const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// start
const app = express();

// add-ons
app.use(bodyParser.json());

// routes
const routes = require('./api/routes');
app.use('/', routes);

// run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
