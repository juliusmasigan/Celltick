var homeController = angular.module('homeController', ['groupsetService']);

homeController.controller('homeCardsController', ['$scope', 'Groupset', function($scope, Groupset) {
    Groupset.query({name:'home'}).$promise.then(
        function(result) {
            $scope.categories = result;
        }, function(error) {
        }
    );
}]);
