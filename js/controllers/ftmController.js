var ftmController = angular.module('ftmController', []);

ftmController.controller('ftmListController', ['$scope', '$location', 'Ftm', function($scope, $location, Ftm) {
    var ftms = Ftm.query({data:"ftmList"});
    $scope.header = "Full Track Music";
    $scope.itemList = ftms;

    $scope.view = function(clickEvent, item) {
       var contentId = item.id;
       $location.path("/ftm/"+contentId);
    };
}]);


ftmController.controller('ftmDetailController', ['$scope', '$routeParams', 'Ftm', function($scope, $routeParams, Ftm) {
    var ftm = Ftm.get({data:"ftmInfo"}).$promise.then(function(data) {
        data.id = $routeParams.contentId;
        data.title += " " + $routeParams.contentId;
        data.artist += " " + $routeParams.contentId;
        $scope.detail = data;
    });
}]);
