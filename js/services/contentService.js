var contentService = angular.module('contentService', ['ngResource']);

contentService.factory('Content', ['$resource', '$rootScope', function($resource, $rootScope) {
    return $resource($rootScope.apiBaseUrl+'/content/:id', {}, {
        get: {method:'GET'}
    });
}]);
