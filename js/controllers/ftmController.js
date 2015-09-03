var ftmController = angular.module('ftmController', ['groupsetService']);

ftmController.controller('ftmListController', ['$scope', '$location', 'Groupset', function($scope, $location, Groupset) {
    $scope.theme = 'blue-gradient';
    $scope.header = "Full Track Music";
    var ftms = Groupset.query({name:"ftm"}).$promise.then(
        function(result) {
            $scope.pageItems = result;
        }, function(error) {
        }
    );

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
