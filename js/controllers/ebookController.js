var ebookController = angular.module('ebookController', []);

ebookController.controller('ebookListController', ['$scope', '$location', 'Ebook', function($scope, $location, Ebook) {
    var ebooks = Ebook.query({data:"ebookList"});

    $scope.itemList = ebooks;

    $scope.view = function(clickEvent, item) {
       var contentId = item.id;
       $location.path("/ebook/"+contentId);
    };
}]);


ebookController.controller('ebookDetailController', ['$scope', '$routeParams', 'Ebook', function($scope, $routeParams, Ebook) {
    var ebook = Ebook.get({data:"ebookInfo"}).$promise.then(function(data) {
        data.id = $routeParams.contentId;
        data.title += " " + $routeParams.contentId;
        $scope.detail = data;
    });
}]);
