const mongoose = require('../mongoose');


const postsSchema = new mongoose.Schema({
    userId: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    alias: {
        type: String, 
        required: true,
        unique: true
    },
    body: {
        type: String
    }
});

const Post = mongoose.model('Post', postsSchema);

module.exports = Post;