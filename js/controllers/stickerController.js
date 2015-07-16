var stickerController = angular.module('stickerController', []);

stickerController.controller('stickerListController', ['$scope', '$location', 'Sticker', function($scope, $location, Sticker) {
    var stickers = Sticker.query({data:"stickerList"});

    $scope.itemList = stickers;

    $scope.view = function(clickEvent, item) {
       var contentId = item.id;
       $location.path("/sticker/"+contentId);
    };
}]);


stickerController.controller('stickerDetailController', ['$scope', '$routeParams', 'Sticker', function($scope, $routeParams, Sticker) {
    var sticker = Sticker.get({data:"stickerInfo"}).$promise.then(function(data) {
        data.id = $routeParams.contentId;
        data.title += " " + $routeParams.contentId;
        $scope.detail = data;
    });
}]);
