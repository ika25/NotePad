const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


// app
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());


// route middleware
app.get ('*', (re, res) => {
    res.json({
        data:'You reached nodejs api for react node app YES'
    })
});

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));