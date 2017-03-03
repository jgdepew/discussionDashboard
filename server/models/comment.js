var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// require('user.js')
// require('topic.js')
// require('post.js')

var CommentSchema = mongoose.Schema({
	user     :{ type: mongoose.Schema.Types.Object, ref: "User"},
	topic_id    :{ type: mongoose.Schema.Types.ObjectId, ref: "Topic"},
	post_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Post"},
	comment     :String,
	created_at  :{ type: Date, default: Date.now}
})

mongoose.model('Comment', CommentSchema);