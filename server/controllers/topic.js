var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')

module.exports = (function() {
	return {
		createTopic: function(req, res) {
			var topic = new Topic(req.body);
			topic.user_id = req.session.user._id
			topic.save(function(err, topic) {
				if(err){
					return res.json(err);
				} else {
					return res.json({topic: topic})
				}
			})
			var user = User.findOne({_id: req.session.user._id}, function(err, user){
				if(err) {
					return res.json(err);
				} else{
					user.topics.push(topic);
					user.save();
				}
			})
		},
		showTopic: function(req, res) {
			Topic.findOne({_id: req.params.id}, function(err, topic){
				if(err){
					return res.json(err);
				} else {
					return res.json({topic: topic})
				}
			})
		},
		getAllTopics: function(req, res) {
			Topic.find({}, function(err, topics) {
				if (err) {
					return res.json(err)
				} else { 
					// return res.json({topics: topics})
				}
			}).populate('user_id').exec(function(err, topics){
		    	return res.json({topics: topics});
	    	})
		},
		showTopic: function(req, res) {
			Topic.find({_id: req.params.id}, function(err, topic) {
				if (err) {
					return res.json({err: err})
				} 
			}).populate('user_id').populate({path: 'posts', populate: {path: 'comments', path: 'user_id'}}).exec(function(err, topic){
		    	return res.json({topic: topic});
	    	})
		}
	}
})();





