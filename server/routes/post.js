const express = require('express');

const router = express.Router();

// import controller methods
const { create, list, read, update, remove } = require('../controllers/post');

router.post('/post', create);
router.get('/posts', list);//we want to list out all the post list its input from post controler
router.get('/post/:slug', read);// reads single post
router.put('/post/:slug', update);
router.delete('/post/:slug', remove);

module.exports = router;