var gameService = angular.module('gameService', ['ngResource']);

gameService.factory('Game', ['$resource', function($resource) {
    return $resource('/temp_data/:data.json', {}, {
        query: {method:'GET', isArray:true},
        get: {method:'GET'}
    });
}]);
