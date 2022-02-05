(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {
    
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI States
    $stateProvider

    // Home Page
    .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
    })

    // Category Page
    .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.template.html'
    })

    // Item Page
    .state('items', {
        url: '/items',
        templateUrl: 'src/menuapp/templates/items.template.html'
    })

};

})();