
app.controller('topicController', function($scope, topicFactory, $location, $routeParams) {

	topicFactory.checkUser(function(data){
		$scope.currUser = data.user;
		if(!$scope.currUser) {
			$location.url('/')
		} 
	})

	function getAllTopics(){
		topicFactory.getAllTopics(function(data) {
			$scope.topics = data;
		})
	}

	function getTopic() {
		topicFactory.getTopic($routeParams.id, function(data) {
			console.log(data.data.topic[0])
			$scope.topic = data.data.topic[0];
		})
	}

	getAllTopics();

	$scope.createTopic = function() {
		topicFactory.createTopic($scope.topic, getAllTopics);
		$location.url('/dashboard')
		$scope.topic = {};
	}

	$scope.createPost = function(topicId) {
		$scope.post.topic_id = topicId;
		topicFactory.createPost($scope.post, getTopic);
		$scope.post = {};
	}

	$scope.createComment = function(topicId, postId, comment){
		comment.topic_id = topicId;
		comment.post_id = postId;
		topicFactory.createComment(comment, getTopic);
	}

	if($routeParams.id) {
		topicFactory.getTopic($routeParams.id, function(data) {
			$scope.topic = data.data.topic[0];
			console.log($scope.topic)
		})
	}

});