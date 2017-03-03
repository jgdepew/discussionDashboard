var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// require('post.js')
// require('user.js')
// require('comment.js')

var TopicSchema = mongoose.Schema({
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "User" },
	category    :String,
	title       :String,
	description :String,
	created_at  :{ type: Date, default: Date.now },
	posts       :[{ type: mongoose.Schema.Types.ObjectId, ref: "Post"}]
}) 
mongoose.model('Topic', TopicSchema);