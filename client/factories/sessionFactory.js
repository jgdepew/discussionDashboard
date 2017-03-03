app.factory('sessionFactory', ['$http', '$location', '$routeParams', function($http, $location, $routeParams){

	var factory = {};

	var users = [];

	factory.login = function(user) {
		$http.post('/login', user).then(function(data) {
			if(data.data.status) {
				$location.url('/dashboard')
			} else{
				alert("something went wrong");
			}
		})
	}

	factory.checkuser = function(callback) {
		$http.get('/checkUser').then(function(data) {
			callback(data.data);
		})
	}

	factory.getUser = function(id, callback) {
		$http.get('/user/' + id).then(function(data) {
			callback(data)
		})
	}

	return factory;
}])