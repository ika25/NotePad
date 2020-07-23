const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const postRoutes = require('./routes/post');

// app
const app = express();//epress application is invoked and availablein the app veriable.

//Coonecting to Mongo DB
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

// middlewares(baisacly piece of code that runs in the middle).
app.use(cors());
app.use(morgan('dev'));//using morgan in developmetn mode.
app.use(bodyParser.json());//without bodyParser wouldnt be able to recieve the request body data sent from client to server.


// route middleware
app.use('/api', postRoutes);


// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));