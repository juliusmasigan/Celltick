var categoriesController = angular.module('categoriesController', []);

categoriesController.controller('categoryCardsController', ['$scope', 'Category', function($scope, Category) {
    var categories = Category.query();

    $scope.categories = categories;
}]);
