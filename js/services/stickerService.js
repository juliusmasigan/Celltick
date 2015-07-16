var stickerService = angular.module('stickerService', ['ngResource']);

stickerService.factory('Sticker', ['$resource', function($resource) {
    return $resource('/temp_data/:data.json', {}, {
        query: {method:'GET', isArray:true},
        get: {method:'GET'}
    });
}]);
