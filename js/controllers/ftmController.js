var ftmController = angular.module('ftmController', ['groupsetService', 'contentService']);

ftmController.controller('ftmListController', ['$scope', '$location', 'Groupset', 'Content', function($scope, $location, Groupset, Content) {
    $scope.theme = 'blue-gradient';
    $scope.header = "Full Track Music";
    var ftms = Groupset.query({name:"ftm"}).$promise.then(
        function(result) {
            $scope.pageItems = result;
        }, function(error) {
        }
    );

    $scope.view = function(clickEvent, content) {
        Content.get({id:id}).$promise.then(
            function(result) {
                
            },
            function(error) {
            }
        );
        $scope.title = content.title;
        $('#description-modal').openModal();
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
