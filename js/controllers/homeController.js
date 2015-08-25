var homeController = angular.module('homeController', ['groupsetService']);

homeController.controller('homeCardsController', ['$scope', 'Groupset', function($scope, Groupset) {
    var home = Groupset.query({name:'home'});

    $scope.home = home;
}]);
