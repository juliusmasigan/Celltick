var ftmController = angular.module('ftmController', []);

ftmController.controller('ftmListController', ['$scope', '$location', function($scope, $location) {
    var itemList = [];
    for(i=1; i<=20; i++) {
        itemList.push({
            'id'    : i,
            'icon'  : '/images/sample-1.jpg',
            'title' : 'Sample'+i,
            'artist': 'Lorem Ipsum',
            'price' : 'P123.45'
        });
    }

    $scope.itemList = itemList;

    $scope.view = function(clickEvent, item) {
       var contentId = item.id;
       $location.path("/ftm/"+contentId);
    };
}]);


ftmController.controller('ftmDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.headerTitle = 'FULL TRACK MUSIC';
    $scope.detail = {
        'title'       : 'Sample'+$routeParams.contentId,
        'artist'      : 'Lorem Ipsum',
        'price'       : 'P123.45',
        'thumb'       : '/images/sample-1.jpg',
        'description' : 'Lorem ipsum dolor sit amet, debitis suscipiantur te nec. Timeam voluptaria sea te, est eu adhuc dolore corpora, at hinc vitae nec. Per nostrum laboramus ne, postea pertinacia et vix. Duo dissentiunt signiferumque ne, eum vituperata quaerendum cu. Et nostrud splendide pro. Integre ocurreret appellantur vix et, quo cu aeterno utroque conceptam, ex duo partem platonem. Dolorem quaestio qui no. Duo no maluisset gubergren, vix ut illud nulla. Velit perpetua intellegam mea no. Ut mel doming evertitur deseruisse. Sit verear assentior eu, consul primis invenire eu has, eros dicta in est.'
    };
}]);
