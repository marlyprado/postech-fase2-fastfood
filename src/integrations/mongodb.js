const mongoose = require('mongoose');
require('dotenv').config();


const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(r => {
            console.log('MongoDB connected...');
        }).catch(err => {
            console.error(err.message);
            process.exit(1); // Exit process with failure
        });
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
