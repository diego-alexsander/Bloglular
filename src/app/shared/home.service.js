'use strict';

blogApp.factory('PostsService', function($resource){
	return $resource('http://jsonplaceholder.typicode.com/:comp/:id/:subComp/',
		{
			id: '@id'
		},{
			getComments: {
				method: 'GET',
				isArray: true,
				params: {
					comp: 'posts',
					subComp: 'comments'
				}
			},
			addComment: {
				method: 'POST',
				params: {
					comp: 'comments'
				}
			},
			getPosts: {
				method: 'GET',
				isArray: true,
				params: {
					comp: 'posts'
				}
			},
			getPostById: {
				method: 'GET',
				params: {
					comp: 'posts'
				}
			}
		}
	);
});