var celltickApp = angular.module('celltickApp', [
    'ngRoute', 
    'ftmController'
]);

celltickApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ftm', {
        templateUrl : 'pages/ftmList.html',
        controller  : 'ftmListController'
    }).when('/ftm/:contentId', {
        templateUrl : 'pages/contentDetails.html',
        controller  : 'ftmDetailController'
    });
}]);
