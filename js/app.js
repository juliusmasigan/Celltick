var celltickApp = angular.module('celltickApp', [
    'ngRoute', 
    'homeController',
    'ftmController',
    'truetoneController',
    'stickerController',
    'verificationController',
    'gameController',
    'ebookController',
    'groupsetService',
    'buyService',
    'truetoneService',
    'stickerService',
    'gameService',
    'ebookService',
    'headroom',
    'switchview',
    'ctdownload',
    'ctswiper'
]);

celltickApp.config(['$routeProvider', '$httpProvider', '$resourceProvider', 
function($routeProvider, $httpProvider, $resourceProvider) {
    $routeProvider.when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'homeCardsController'
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

    //Uses session credential in cookie.
    $httpProvider.defaults.withCredentials = true;

    //Prevents stripping the slashes in the request url.
    $resourceProvider.defaults.stripTrailingSlashes = false;

}]).run(['$rootScope', function($rootScope) {
    $rootScope.apiBaseUrl = "http://192.168.0.43:8000";
    $rootScope.verificationTpl = "pages/verification-modal.html";
    $rootScope.descriptionTpl = "pages/description-modal.html";
}]);


$(function() {
    $('nav .button-collapse').sideNav();
});
