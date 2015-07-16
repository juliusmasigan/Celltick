var ebookService = angular.module('ebookService', ['ngResource']);

ebookService.factory('Ebook', ['$resource', function($resource) {
    return $resource('/temp_data/:data.json', {}, {
        query: {method:'GET', isArray:true},
        get: {method:'GET'}
    });
}]);
