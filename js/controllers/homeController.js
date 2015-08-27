var homeController = angular.module('homeController', ['groupsetService', 'buyService']);

homeController.controller('homeCardsController', ['$scope', 'Groupset', 'Buy', function($scope, Groupset, Buy) {
    $scope.verification = "pages/verification-modal.html";
    $scope.apiBaseUrl = celltickApp.apiBaseUrl;

    $scope.buy = function(clickEvent, content) {
        cid = content.id.replace(/\-/g, "");
        Buy.get({content_id:cid}).$promise.then(
            function(result) {
                console.log(result);
            }, function(error) {
                if(error.status == 401) {
                    $('#mobile-modal').openModal();
                }
            }
        );
    };

    Groupset.query({name:'home'}).$promise.then(
        function(result) {
            $scope.categories = result;
        }, function(error) {
        }
    );
}]);
