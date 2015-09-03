var ftmService = angular.module('ftmService', ['ngResource']);

ftmService.factory('Ftm', ['$resource', function($resource) {
    return $resource(celltickApp.apiBaseUrl+"/groupset/:name", {}, {
        query: {method:'GET', isArray:true}
    }, {stripTrailingSlashes:false});
}]);
