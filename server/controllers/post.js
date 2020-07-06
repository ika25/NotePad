const Post = require('../models/post');
const slugify = require('slugify');


exports.create = (req, res) => {
    //console.log(req.body);
    const { title, content, user } = req.body;
    const slug = slugify(title);
    // validate (Going use switch statament more flexible)
    /* if(!title || !content){
        return res.status(400).json({
            erro: 'Title and content is required'
        });
    }
    res.json({
        message: 'See your server console '
    }); */
    
    // validate
    switch (true) {
        case !title:
            return res.status(400).json({ error: 'Title is required' });
            break;
        case !content:
            return res.status(400).json({ error: 'Content is required' });
            break;
    }
    // create post
    Post.create({ title, content, user, slug }, (err, post) => {
        if (err) {
            console.log(err);
            res.status(400).json({ error: 'Duplicate post. Try another title' });
        }
        res.json(post);
    });
    
};

exports.list = (req, res) => {
    Post.find({})//we wnat to find all the post,this will give us all post from database.
        .limit(10)//here you can limit nu,ber of post you want to see in database.
        .sort({ createdAt: -1 })//here you can also sort by based onthe creative date. (ex new post will be first in oreder)
        .exec((err, posts) => {
            if (err) console.log(err);
            res.json(posts);
        });
};
