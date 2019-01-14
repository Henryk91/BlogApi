var mongoose = require('mongoose');

// Blog Schema
var BlogSchema = mongoose.Schema({
	userId: {
		type: Number
	},
	title: {
		type: String
	},
	body: {
		type: String
	}
});

var Blog = module.exports = mongoose.model('Blog', BlogSchema);

module.exports.getBlogs = function(callback, limit){
	Blog.find(callback).limit(limit);
} 

module.exports.getBlogById = function(id, callback){
	Blog.findById(id, callback);
};
