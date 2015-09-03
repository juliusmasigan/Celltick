var buyService = angular.module('buyService', ['ngResource']);

buyService.factory('Buy', ['$resource', '$rootScope', function($resource, $rootScope) {
    return $resource($rootScope.apiBaseUrl+"/buy/:content_id", {}, {
        get: {method:'GET'}
    });
}]);
