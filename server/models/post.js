//Post schema-before we can save post in database we should create schema for port, 
//schema is a definition of what a post will look like, such as post requires title content and user name who created this post, 
//we can use mangoose to define post schema. Having a schema is always good practice t work with the database. In models folder im going to create schema for post.
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true,
            lowercase: true
        },
        content: {
            type: {},
            required: true,
            min: 20,
            max: 2000000
        },
        user: {
            type: String,
            default: 'Admin'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
