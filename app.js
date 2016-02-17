var app = angular.module('meannit', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello World!';
	}]);