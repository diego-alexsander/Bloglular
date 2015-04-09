'use strict';

blogApp.controller('HomeCtrl', ['$scope', 'PostsService', function ($scope, PostsService) {	
	PostsService.listaPosts(function (data) {
		$scope.posts = data;
	});
}]);
