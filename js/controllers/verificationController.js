var verificationController = angular.module('verificationController', ['verificationService']);

verificationController.controller('verify', ['$rootScope', '$scope', 'Verify', 'Authorize', function($rootScope, $scope, Verify, Authorize) {
    $scope.msisdn;
    $scope.verif_code;

    $scope.submit_mobile = function(clickEvent) {
        if($scope.msisdn == undefined || $scope.msisdn.length == 0) {
            $scope.$emit('raiseLabelError', 'Please enter your mobile number.');
            return;
        }

        Verify.post({},{'msisdn':$scope.msisdn}).$promise.then(
            function(result) {
                $('.mobile-modal').closeModal();
                $('.verif-modal').openModal();
            }, function(error) {
                //Handle error here.
                if(["AUTH41"].indexOf(error.data.code) != -1 && error.status == 422) {
                    $('.mobile-modal').closeModal();
                    $('.verif-modal').openModal();
                }else {
                    $rootScope.error = error;
                }
            }
        );
    };

    $scope.submit_verification = function(clickEvent) {
        if($scope.verif_code == undefined || $scope.verif_code.length == 0) {
            $scope.$emit('raiseLabelError', 'Please enter verfication code.');
            return;
        }

        Verify.post({}, {'verification_code':$scope.verif_code}).$promise.then(
            function(result) {
                $('.verif-modal').closeModal();
                Authorize.buy();
            }, function(error) {
                //Handle error here.
                var errorMsg;
                if(error.status == 400 && ["AUTH42"].indexOf(error.data.code) != -1){
                    errorMsg = "Invalid verification code.";
                }else if(error.status == 422) {
                    errorMsg = "Please enter verification code.";
                }
                $('label[for=verification_code]').attr({'data-error':errorMsg}).addClass('invalid');
                $('input#verification_code').addClass('invalid').focus();
            }
        );
    };

    $('input#verification_code').blur(function(event) {
        if(this.value.length == 0) {
            $(this).removeClass('invalid');
        }
    });
}]);
