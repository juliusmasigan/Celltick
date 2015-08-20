var celltickApp = angular.module('celltickApp', [
    'ngRoute', 
    'verificationController',
    'categoriesController',
    'ftmController',
    'truetoneController',
    'stickerController',
    'gameController',
    'ebookController',
    'categoryService',
    'ftmService',
    'truetoneService',
    'stickerService',
    'gameService',
    'ebookService',
    'headroom',
    'switchview'
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
    }).when('/truetone', {
        templateUrl : 'pages/contentList.html',
        controller  : 'truetoneListController'
    }).when('/truetone/:contentId', {
        templateUrl : 'pages/contentDetail.html',
        controller  : 'truetoneDetailController'
    }).when('/sticker', {
        templateUrl : 'pages/contentList.html',
        controller  : 'stickerListController'
    }).when('/sticker/:contentId', {
        templateUrl : 'pages/contentDetail.html',
        controller  : 'stickerDetailController'
    }).when('/game', {
        templateUrl : 'pages/contentList.html',
        controller  : 'gameListController'
    }).when('/game/:contentId', {
        templateUrl : 'pages/contentDetail.html',
        controller  : 'gameDetailController'
    }).when('/ebook', {
        templateUrl : 'pages/contentList.html',
        controller  : 'ebookListController'
    }).when('/ebook/:contentId', {
        templateUrl : 'pages/contentDetail.html',
        controller  : 'ebookDetailController'
    }).when('/verify', {
        templateUrl : 'pages/verification-modal.html',
        controller  : 'verify'
    });
}]);

celltickApp.apiBaseUrl = "http://localhost:8000"
