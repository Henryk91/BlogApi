var express = require('express');
var router = express.Router();

var Blog =require('../models/Blog');

// List Blogs
router.get('/', function(req, res, next){
	Blog.getBlogs(function(err, blogs){
		if(err){
			res.send(err);
		}
		res.json(blogs);
	}, 10);
});

// Single Blog
router.get('/:id', function(req, res, next){
	Vlog.getBlogById([req.params.id], function(err, blog){
		if(err){
			res.send(err);
		}
		res.json(blog);
	});
});

// Add Blog
router.post('/', function(req, res, next){
	var blog = req.body;
	var newBlog = new Blog(blog);

	newBlog.save(function(err, blog){
		if(err){
			res.send(err);
		}
		res.json(blog);
	});
});

//Update Blog
router.put('/:id', function(req, res, next){
	var query = {_id: [req.params.id]};
	var body = req.body;
	Blog.update(query, {$set:body}, {}, function(err, blog){
		if(err){
			res.send(err);
		}
		res.json(blog);
	});
});

// Delete Blog
router.delete('/:id', function(req, res, next){
	var query = {_id: [req.params.id]};
	Blog.deleteOne(query, function(err){
		if(err){
			res.send(err);
		}
		res.json({
			msg: "Success"
		});
	});
});


module.exports = router;
