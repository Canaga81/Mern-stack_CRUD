const express = require('express');
const app = express();
const dotenv = require('dotenv/config');
const PORT = process.env.PORT || 8008;
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute.js');
const cors = require('cors');

//^ middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//^ routes
app.use('/api/products', productRoute);

//! Database
mongoose.connect('mongodb+srv://mernstackcrud:mern123@merncrud.u8klqgr.mongodb.net/?retryWrites=true&w=majority&appName=mernCrud').then(() => {
    
    console.log('Connected to Database !');
    
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });

}).catch(() => {
    console.log('Connectin Failed !');
})