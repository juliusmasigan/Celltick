var ftmService = angular.module('ftmService', ['ngResource']);

ftmService.factory('Ftm', ['$resource', function($resource) {
    return $resource('/temp_data/:data.json', {}, {
        query: {method:'GET', isArray:true},
        get: {method:'GET'}
    });
}]);
