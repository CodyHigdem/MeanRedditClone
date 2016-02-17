var app = angular.module('meannit', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello World! Woot';
		$scope.posts = [
		{title: 'post1', upvotes: 5},
		{title: 'post2', upvotes: 1},
		{title: 'post3', upvotes: 12},
		{title: 'post4', upvotes: 76},];
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