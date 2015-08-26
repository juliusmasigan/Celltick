var homeController = angular.module('homeController', ['groupsetService']);

homeController.controller('homeCardsController', ['$scope', 'Groupset', function($scope, Groupset) {
    var swiper = new Swiper('.swiper-container', {pagination:'.swiper-pagination'});

    Groupset.query({name:'home'}).$promise.then(
        function(result) {
            $scope.categories = result;
        }, function(error) {
        }
    );
}]);
