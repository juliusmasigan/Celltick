var celltickApp = angular.module('celltickApp', [
    'ngRoute', 
    'ftmController',
    'stickerController',
    'truetoneController',
]);

celltickApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'pages/home.html'
    }).when('/ftm', {
        templateUrl : 'pages/ftmList.html',
        controller  : 'ftmListController'
    }).when('/ftm/:contentId', {
        templateUrl : 'pages/contentDetails.html',
        controller  : 'ftmDetailController'
    }).when('/sticker', {
        templateUrl : 'pages/stickerList.html',
        controller  : 'stickerListController'
    }).when('/sticker/:contentId', {
        templateUrl : 'pages/contentDetails.html',
        controller  : 'stickerDetailController'
    }).when('/truetone', {
        templateUrl : 'pages/truetoneList.html',
        controller  : 'truetoneListController'
    }).when('/truetone/:contentId', {
        templateUrl : 'pages/contentDetails.html',
        controller  : 'truetoneDetailController'
    });
}]);
