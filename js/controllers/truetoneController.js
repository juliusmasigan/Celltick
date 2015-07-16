var truetoneController = angular.module('truetoneController', []);

truetoneController.controller('truetoneListController', ['$scope', '$location', 'Truetone', function($scope, $location, Ftm) {
    var truetones = Ftm.query({data:"truetoneList"});

    $scope.itemList = truetones;

    $scope.view = function(clickEvent, item) {
       var contentId = item.id;
       $location.path("/truetone/"+contentId);
    };
}]);


truetoneController.controller('truetoneDetailController', ['$scope', '$routeParams', 'Truetone', function($scope, $routeParams, Ftm) {
    var truetone = Ftm.get({data:"truetoneInfo"}).$promise.then(function(data) {
        data.id = $routeParams.contentId;
        data.title += " " + $routeParams.contentId;
        data.artist += " " + $routeParams.contentId;
        $scope.detail = data;
    });
}]);
