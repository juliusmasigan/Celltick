var ctdownload = angular.module('ctdownload', ['buyService', 'verificationService']);

ctdownload.directive('ctDownload', ['$rootScope', '$window', 'Buy', 'Authorize', function($rootScope, $window, Buy, Authorize) {
    return {
        restrict:'E',
        template:"<button class='btn center-align' ng-click=$emit('buy')>Download for PHP {{content.price}}</button>",
        link:function($scope, elem, attrs) {
            $scope.buy = function(content) {
                cid = content.id.replace(/\-/g, "");
                Buy.get({content_id:cid}).$promise.then(
                    function(result) {
                        url = result.grant_url.replace(/\-/g, "");
                        /*var form = document.createElement('form');
                        form.setAttribute('method', "GET");
                        form.setAttribute('action', celltickApp.apiBaseUrl+"/download/"+url);
                        form.submit();*/
                        $window.location.href = $rootScope.apiBaseUrl+"/download/"+url;
                    }, function(error) {
                        if(error.status == 401) {
                            $('#mobile-modal').openModal();
                            Authorize.setScope($scope);
                        }
                    }
                );
            };

            $scope.$on('buy', function(event) {
                $scope.$eval($scope.buy($scope.content));
            });
        }
    };
}]);
