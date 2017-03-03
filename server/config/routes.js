require('path');
var user = require('./../controllers/user.js');
var topics = require('./../controllers/topic.js');
var post = require('./../controllers/post.js')
var comment = require('./../controllers/comment.js')

module.exports = function(app) {
	app.post('/login', user.login);
	app.get('/checkuser', user.checkUser);
	app.get('/logout', user.logout);
	app.get('/user/:id', user.showUser);

	app.get('/topics', topics.getAllTopics)
	app.get('/topic/:id', topics.showTopic)
	app.post('/topics', topics.createTopic)

	app.post('/post', post.createPost);

	app.post('/comment', comment.createComment);
}