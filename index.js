const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Post = require('./models/posts')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.listen(33310);

// Get all
app.get('/api/posts', function(req, res){
    Post.find({}, function(err, result){
        if (err) throw err
        res.json(result)
    });
});

//Get one
app.get('/api/posts/:id', function(req, res){
    Post.findOne({id: req.params.id}, function(err, result){
        if (err) throw err
        res.json(result)
    });
});

// Add Post
app.put('/api/posts/', function(req, res){
    const body = req.body;
    var post = new Post(body)
    post.save(function (err) {
        if (err) throw err
    })
    res.end('OK')
})

//Delete post
app.delete('/api/posts/:id', function(req, res){
    Post.deleteOne({id: req.params.id}, function(err){
        if (err) throw err
    })
    res.end('OK')
})