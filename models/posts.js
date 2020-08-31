const mongoose = require('../mongoose');


const postsSchema = new mongoose.Schema({
    id: {
        type: Number,
        index: true
    },
    userId: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    alias: {
        type: String
    },
    body: {
        type: String
    },
    thumbnail: {
        type: String,
    }
});

const Post = mongoose.model('Post', postsSchema);

module.exports = Post;