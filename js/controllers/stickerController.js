var stickerController = angular.module('stickerController', ['groupsetService']);

stickerController.controller('stickerListController', ['$scope', '$location', 'Groupset', function($scope, $location, Groupset) {
    $scope.theme = 'orange-gradient';
    $scope.header = "Sticker";
    var stickers = Groupset.query({name:"sticker"}).$promise.then(
        function(result) {
            $scope.pageItems = result;
        }, function(error) {
        }
    );

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
