'use strict';

var cheesopedia = angular.module('cheesopedia', ['ngRoute']);

cheesopedia.config(function ($routeProvider) {
    $routeProvider
        .when('/view1', {
            controller: 'simpleController',
            templateUrl: 'partials/view1.html'
        })
        .when('/view2', {
            controller: 'simpleController',
            templateUrl: 'partials/view2.html'
        })
        .otherwise({
            redirectTo: '/view1'
        });
});