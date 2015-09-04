var materializeToast = angular.module('materializeToast', []);

materializeToast.service('Toast', ['$rootScope', function($rootScope) {
    $rootScope.$watch('error', function(newVal, oldVal, $scope) {
    });
}]);
