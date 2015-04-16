'use strict';

blogApp.controller('PostCtrl', ['$scope', '$routeParams', 'PostsService', function ($scope, $routeParams, PostsService) {	
	PostsService.getPostById({id: $routeParams.id}, function (data) {
		$scope.post = data;
	});
}]);
