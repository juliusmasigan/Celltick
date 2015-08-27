var buyService = angular.module('buyService', []);

buyService.factory('Buy', ['$resource', function($resource) {
    return $resource(celltickApp.apiBaseUrl+"/buy/:content_id", {}, {
        get: {method:'GET'}
    }, {stripTrailingSlashes:false});
}]);
