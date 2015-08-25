var ctdownload = angular.module('ctdownload', []);

ctdownload.directive('ctDownload', function() {
    return {
        restrict:'E',
        template:"<button></button>"
    };
});
