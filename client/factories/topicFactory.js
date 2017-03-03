app.factory('topicFactory', ['$http', '$location', '$routeParams', function($http, $location, $routeParams){

	var factory = {};

	factory.checkUser = function(callback) {
		$http.get('/checkuser').then(function(data) {
			callback(data.data);
		})
	}

	factory.createTopic = function(topic, callback) {
		$http.post('/topics', topic).then(function(data) {
			callback(data)
		})
	}

	factory.createPost = function(post, callback) {
		$http.post('/post', post).then(function(data) {
			callback(data)
		})
		$location.url('/topic/'+$routeParams.id)
	}

	factory.createComment = function(comment, callback) {
		$http.post('/comment', comment).then(function(data) {
			callback(data)
		})
		$location.url('/topic/'+$routeParams.id)
	}

	factory.getAllTopics = function(callback){
	    $http.get('/topics').then(function(data){
	        callback(data.data.topics);
	    })
	}

	factory.getTopic = function(id, callback) {
		$http.get('/topic/' + id).then(function(data) {
			callback(data);
		})
	}


	return factory;
}])