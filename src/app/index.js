'use strict';

var blogApp = angular.module('blog', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute']);
  
  blogApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/home-blog.html',
        controller: 'HomeCtrl'
      })
      .when('/post/:id', {
        templateUrl: 'app/components/post/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
