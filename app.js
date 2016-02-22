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
		})

		.state('posts', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostsCtrl'
		});

		$urlRouterProvider.otherwise('home');
}])
.factory('posts', [function(){
	var o = {
		posts: []
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
		  		upvotes: 0,
		  		comments: [
		  		{ author: 'joe', body: 'cool post', upvotes: 0},
		  		{ author: 'bob', body: 'rock on', upvotes: 3}] 
		  	});
		  	$scope.title = '';
		  	$scope.link = '';
		};

		$scope.increaseUpvotes = function(post){
			post.upvotes += 1;
		}
	}])
	.controller('PostsCtrl', [
		'$scope', 
		'$stateParams',
		'posts',
		function($scope, $stateParams, posts){
			$scope.post = posts.post[$stateParams.id];
		}]);