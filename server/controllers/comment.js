var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
var Comment = mongoose.model('Comment')
var Post = mongoose.model('Post')

module.exports = (function() {

	return {
		createComment: function(req, res) {
			var comment = new Comment(req.body);
			comment.user = req.session.user
			comment.save(function(err, comment) {
				if (err) {
					return res.json(err);
				} else {
					return res.json({comment: comment})
				}
			})
			var user = User.findOne({_id: req.session.user._id}, function(err, user){
				if(err) {
					return res.json(err);
				} else{
					user.comments.push(comment);
					user.save();
				}
			})
			var post = Post.findOne({_id: req.body.post_id}, function(err, post) {
				if (err) {
					return res.json(err);
				} else {
					post.comments.push(comment);
					post.save();
				}	
			})
		}
	}

})();