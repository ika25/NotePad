const express = require('express');

const router = express.Router();

// import controller methods
const { create, list } = require('../controllers/post');

router.post('/post', create);
router.get('/posts', list);//we want to list out all the post list its input from post controler

module.exports = router;