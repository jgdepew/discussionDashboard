var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: "sessionController"
	})
	.when('/user/:id', {
		templateUrl: 'partials/user.html',
		controller: 'sessionController'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'topicController'
	})
	.when('/topic/:id', {
		templateUrl: 'partials/topic.html',
		controller: 'topicController'
	})
	.otherwise({
		redirectTo: "/"
	})
})