var verificationService = angular.module('verificationService', ['ngResource']);

verificationService.factory('Verify', ['$resource', function($resource) {
    return $resource('http://192.168.0.43:8000/verify/', {}, {
        post: {method:'POST', withCredentials:true}
    }, {stripTrailingSlashes:false});
}]);
