var verificationService = angular.module('verificationService', ['ngResource']);

verificationService.factory('Verify', ['$resource', function($resource) {
    return $resource(celltickApp.apiBaseUrl+'/verify/', {}, {
        post: {
            method:'POST', 
            interceptor: {
                response: function(response) {
                    var result = response.resource;
                    result.status = response.status;
                    return result;
                }
            }
        }
    }, {stripTrailingSlashes:false});
}]);
