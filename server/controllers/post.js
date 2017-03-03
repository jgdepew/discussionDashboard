var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
var Post = mongoose.model('Post')

module.exports = (function() {

	return {
		createPost: function(req, res) {
			var post = new Post(req.body);
			post.user_id = req.session.user._id
			post.save(function(err, post) {
				if (err) {
					return res.json(err);
				} else {
					return res.json({post: post})
				}
			})
			var topic = Topic.findOne({_id: req.body.topic_id}, function(err, topic) {
				if (err) {
					return res.json(err);
				} else {
					topic.posts.push(post);
					topic.save();
				}
			})
			var user = User.findOne({_id: req.session.user._id}, function(err, user){
				if(err) {
					return res.json(err);
				} else{
					user.posts.push(post);
					user.save();
				}
			})
		}
	}


})();