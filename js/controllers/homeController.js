var homeController = angular.module('homeController', ['groupsetService']);

homeController.controller('homeCardsController', ['$scope', 'Groupset', '$rootScope', function($scope, Groupset, $rootScope) {
    Groupset.query({name:'home'}).$promise.then(
        function(result) {
            $scope.categories = result;
        }, function(error) {
            $rootScope.error = error;
        }
    );
}]);
