var gameController = angular.module('gameController', []);

gameController.controller('gameListController', ['$scope', '$location', 'Game', function($scope, $location, Game) {
    var games = Game.query({data:"gameList"});

    $scope.itemList = games;

    $scope.view = function(clickEvent, item) {
       var contentId = item.id;
       $location.path("/game/"+contentId);
    };
}]);


gameController.controller('gameDetailController', ['$scope', '$routeParams', 'Game', function($scope, $routeParams, Game) {
    var game = Game.get({data:"gameInfo"}).$promise.then(function(data) {
        data.id = $routeParams.contentId;
        data.title += " " + $routeParams.contentId;
        $scope.detail = data;
    });
}]);
