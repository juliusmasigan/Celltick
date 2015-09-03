var groupsetService = angular.module('groupsetService', ['ngResource']);

groupsetService.factory('Groupset', ['$resource', '$rootScope', function($resource, $rootScope) {
    return $resource($rootScope.apiBaseUrl+'/groupset/:name', {}, {
        query: {method:'GET', isArray:true}
    });
}]);
