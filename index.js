const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Post = require('./models/posts')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.listen(33310);

// Get all
app.get('/api/posts', function (req, res) {
    Post.find({}, function (err, result) {
        if (err) throw err
        res.json(result)
    });
});

//Get one
app.get('/api/posts/:alias', function (req, res) {
    Post.findOne({ alias: req.params.alias }, function (err, result) {
        if (err) throw err
        res.json(result)
    });
});

// Add Post
app.put('/api/posts/', function (req, res) {
    const body = req.body;
    var post = new Post(body)
    try {
        post.save(function (err) {
            if (err) {
                console.log(err)
            } else console.log('OK')
        })
    } catch (err) {
        throw err
    }
    res.end('OK')
})

//Delete post
app.delete('/api/posts/:alias', cors({ origin: 'http://localhost:3000' }), function (req, res) {
    Post.deleteOne({ alias: req.params.alias }, function (err) {
        if (err) throw err
    })
    res.end('OK')
})
