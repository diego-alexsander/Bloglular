'use strict';

blogApp.controller('HomeCtrl', ['$scope', 'PostsService', function ($scope, PostsService) {	
	PostsService.getPosts(function (data) {
		$scope.posts = data;
	});
}]);
