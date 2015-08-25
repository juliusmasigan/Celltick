var groupsetService = angular.module('groupsetService', ['ngResource']);

groupsetService.factory('Groupset', ['$resource', function($resource) {
    return $resource(celltickApp.apiBaseUrl+'/groupset/:name', {}, {
        query: {method:'GET', isArray:true}
    }, {stripTrailingSlashes:false});
}]);
