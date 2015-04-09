'use strict';

blogApp.controller('PostCtrl', ['$scope', '$routeParams', 'PostsService', function ($scope, $routeParams, PostsService) {	
	PostsService.postById({id: $routeParams.id}, function (data) {
		$scope.post = data;
	});
}]);
