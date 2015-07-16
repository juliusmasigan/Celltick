var truetoneService = angular.module('truetoneService', ['ngResource']);

truetoneService.factory('Truetone', ['$resource', function($resource) {
    return $resource('/temp_data/:data.json', {}, {
        query: {method:'GET', isArray:true},
        get: {method:'GET'}
    });
}]);
