var homeController = angular.module('homeController', ['groupsetService']);

homeController.controller('homeCardsController', ['$scope', 'Groupset', function($scope, Groupset) {
    $scope.verification = "pages/verification-modal.html";

    $scope.buy = function(clickEvent, content) {
        console.log(content);
    };

    Groupset.query({name:'home'}).$promise.then(
        function(result) {
            $scope.categories = result;
        }, function(error) {
        }
    );
}]);
