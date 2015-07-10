var celltickApp = angular.module('celltickApp', [
    'ngRoute', 
    'categoriesController',
    'ftmController',
    'categoryService'
]);

celltickApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'pages/catCards.html',
        controller  : 'categoryCardsController'
    }).when('/ftm', {
        templateUrl : 'pages/contentList.html',
        controller  : 'ftmListController'
    }).when('/ftm/:contentId', {
        templateUrl : 'pages/contentDetail.html',
        controller  : 'ftmDetailController'
    });
}]);
