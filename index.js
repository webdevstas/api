const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/posts');
var cors = require('cors')

app.use(cors());
// app.use(bodyParser());

app.listen(33310);

// Get all
app.get('/api/posts', function(req, res){
    Post.find({}, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});

//Get one
app.get('/api/posts/:id', function(req, res){
    Post.findOne({id: req.params.id}, function(err, result){
        if (err) throw err;
        res.json(result);
    });
});