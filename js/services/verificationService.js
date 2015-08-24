var verificationService = angular.module('verificationService', ['ngResource']);

verificationService.factory('Verify', ['$resource', function($resource) {
    return $resource('http://192.168.0.43:8000/verify/', {}, {
        post: {
            method:'POST', 
            withCredentials:true,
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
