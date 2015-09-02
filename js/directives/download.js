var ctdownload = angular.module('ctdownload', ['buyService']);

ctdownload.directive('ctDownload', ['$window', 'Buy', function($window, Buy) {
    return {
        restrict:'E',
        template:"<button class='btn center-align' ng-click=$emit('buy')>Download for PHP {{price}}</button>",
        link:function($scope, elem, attrs) {
            $scope.price = $scope.content.price;
            $scope.buy = function(content) {
                cid = content.id.replace(/\-/g, "");
                Buy.get({content_id:cid}).$promise.then(
                    function(result) {
                        url = result.grant_url.replace(/\-/g, "");
                        /*var form = document.createElement('form');
                        form.setAttribute('method', "GET");
                        form.setAttribute('action', celltickApp.apiBaseUrl+"/download/"+url);
                        form.submit();*/
                        $window.location.href = celltickApp.apiBaseUrl+"/download/"+url;
                    }, function(error) {
                        if(error.status == 401) {
                            $('#mobile-modal').openModal();
                        }
                    }
                );
            };

            $scope.$on('buy', function() {
                $scope.$eval($scope.buy($scope.content));
            });
        }
    };
}]);
