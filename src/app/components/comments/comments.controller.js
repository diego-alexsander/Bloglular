'use strict';

blogApp.controller('CommentsCtrl', ['$scope', '$routeParams', 'PostsService', function ($scope, $routeParams, PostsService) {	

	PostsService.getComments({id: $routeParams.id}, function (data) {
		$scope.comments = data;
	});

	$scope.addComment = function(event){

		PostsService.addComment({name: $scope.title, userId: $scope.userId, body: $scope.body}, function(res){
			$scope.comments.push(res);
		});		

	};

}]);
