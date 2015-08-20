var verificationController = angular.module('verificationController', ['verificationService']);

verificationController.controller('verify', ['$scope', 'Verify', function($scope, Verify) {
    $('#mobile-modal').openModal();

    $scope.msisdn;
    $scope.submit_mobile = function(clickEvent) {
        var verif = Verify.post({},{'msisdn':$scope.msisdn});
    };
}]);
