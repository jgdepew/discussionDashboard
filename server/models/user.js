var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// require('post.js')
// require('topic.js')
// require('comment.js')

var UserSchema = mongoose.Schema({
	name        : String,
	created_at  :{ type: Date, default: Date.now },
	topics      :[{ type: mongoose.Schema.Types.Mixed, ref: "Topic" }],
	posts       :[{ type: mongoose.Schema.Types.Mixed, ref: "Post" }],
	comments    :[{ type: mongoose.Schema.Types.Mixed, ref: "Comment"}]
})
mongoose.model('User', UserSchema)