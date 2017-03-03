app.controller('sessionController', function($scope, sessionFactory, $location, $routeParams) {
	$scope.login = function() {
		if(!$scope.user || $scope.user.name.length < 3) {
			alert('Invalid username');
		} else {
			sessionFactory.login($scope.user)
			$location.url('/dashboard')
		}
	}
	sessionFactory.checkuser(function(data){
		$scope.currUser = data.user;
		if(!$scope.currUser) {
			$location.url('/')
		} 
	})

	if($routeParams.id) {
		sessionFactory.getUser($routeParams.id, function(data) {
			$scope.user = data.data.user;
		})
	}
});