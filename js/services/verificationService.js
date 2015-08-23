var verificationService = angular.module('verificationService', ['ngResource']);

verificationService.factory('Verify', ['$resource', function($resource) {
    return $resource('http://localhost:8000/verify/', {}, {
        post: {
            method:'POST', 
            withCredentials:true,
        }
    }, {stripTrailingSlashes:false});
}]);
