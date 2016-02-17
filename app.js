var app = angular.module('meannit', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello World! Woot';
		$scope.posts = [
		{title: 'post1', upvotes: 5},
		{title: 'post2', upvotes: 1},
		{title: 'post3', upvotes: 12},
		{title: 'post4', upvotes: 76},]
	}]);