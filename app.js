var app = angular.module('meannit', ['ui.router'])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});

		$urlRouterProvider.otherwise('home');
}])
.factory('posts', [function(){
	var o = {
		posts: [{title: 'post hello', link: '', upvotes: 1}]
	};
	return o;
}])

app.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
		$scope.test = 'Hello World! Woot';
		$scope.posts = posts.posts;
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === '') { return; }
		  	$scope.posts.push({
		  		title: $scope.title, 
		  		link: $scope.link,
		  		upvotes: 0});
		  	$scope.title = '';
		  	$scope.link = '';
		};

		$scope.increaseUpvotes = function(post){
			post.upvotes += 1;
		}
	}]);