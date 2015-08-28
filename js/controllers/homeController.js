var homeController = angular.module('homeController', ['groupsetService', 'buyService']);

homeController.controller('homeCardsController', ['$scope', '$window', 'Groupset', 'Buy', function($scope, $window, Groupset, Buy) {
    $scope.verification = "pages/verification-modal.html";
    $scope.apiBaseUrl = celltickApp.apiBaseUrl;

    $scope.buy = function(content) {
        cid = content.id.replace(/\-/g, "");
        Buy.get({content_id:cid}).$promise.then(
            function(result) {
                url = result.grant_url.replace(/\-/g, "");
                var form = document.createElement('form');
                form.setAttribute('method', "GET");
                form.setAttribute('action', celltickApp.apiBaseUrl+"/download/"+url);
                form.submit();
                //$window.location.href = celltickApp.apiBaseUrl+"/download/"+url;
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
