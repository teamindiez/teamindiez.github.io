(function () {
    'use strict';
 var app = angular.module('Indiez', ['ngRoute', 'ngCookies'])
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/landingpage', {
                controller: 'LpController',
                templateUrl: 'templates/landingpage.html'
               
            })
            

            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'templates/home.html'
               
            })
             .when('/pro', {
                controller: 'ProController',
                templateUrl: 'templates/pro.html'
               
            })
            .otherwise({ redirectTo: '/landingpage' });
    }

    

})();