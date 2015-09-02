var homeController = angular.module('homeController', ['groupsetService', 'buyService']);

homeController.controller('homeCardsController', ['$scope', '$window', 'Groupset', 'Buy', function($scope, $window, Groupset, Buy) {
    $scope.verification = "pages/verification-modal.html";
    $scope.apiBaseUrl = celltickApp.apiBaseUrl;

    Groupset.query({name:'home'}).$promise.then(
        function(result) {
            $scope.categories = result;
        }, function(error) {
        }
    );
}]);
