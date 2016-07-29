var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/partials/myView',
            {
                controller: 'myController1',
                templateUrl: 'partials/myView.html'
            })
        .when('/partials/itemView/:modelID',
            {
                controller: 'myController2',
                templateUrl: 'partials/itemView.html'
            })
        .otherwise({ redirectTo: '/partials/myView' });
});