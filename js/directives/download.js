var ctdownload = angular.module('ctdownload', []);

ctdownload.directive('ctDownload', function() {
    return {
        restrict:'E',
        template:"<button class='btn' ng-click=$emit('buy')>Download for PHP {{price}}</button>",
        link:function($scope, elem, attrs) {
            $scope.price = $scope.content.price;
            $scope.$on('buy', function() {
                $scope.$eval($scope.buy($scope.content));
            });
        }
    };
});
