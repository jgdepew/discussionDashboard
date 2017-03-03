var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// require('user.js')
// require('topic.js')
// require('comment.js')

var PostSchema = mongoose.Schema({
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "User"},
	topic_id    :{ type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
	comments    :[{ type: mongoose.Schema.Types.Mixed, ref: "Comment"}],
	post        :String,
	upvote      :Number,
	downvote    :Number,
	created_at  :{ type: Date, default: Date.now }
})
mongoose.model('Post', PostSchema);