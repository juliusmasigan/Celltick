var categoryService = angular.module('categoryService', ['ngResource']);

categoryService.factory('Category', ['$resource', function($resource) {
    return $resource('/temp_data/categories.json', {}, {
        query: {method:'GET', isArray:true}
    });
}]);
