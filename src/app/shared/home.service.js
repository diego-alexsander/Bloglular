'use strict';

blogApp.factory('PostsService', function($resource){
	return $resource('http://jsonplaceholder.typicode.com/:entity/:id',
		{
			id: '@id',
			entity: '@entity'
		},{
			listaPosts: {
				method: 'GET',
				isArray: true,
				params: {
					entity: 'posts'
				}
			},
			postById: {
				method: 'GET',
				params: {
					entity: 'posts',
					id: 'id'
				}
			}
		}
	);
});