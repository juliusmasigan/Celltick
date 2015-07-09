var ftmController = angular.module('ftmController', []);
var stickerController = angular.module('stickerController', []);
var truetoneController = angular.module('truetoneController', []);

ftmController.controller('ftmListController', ['$scope', '$location', function($scope, $location) {
    var ftmList = [];
    for(i=1; i<=20; i++) {
        ftmList.push({
            'id'    : i,
            'icon'  : '/images/sample-1.jpg',
            'title' : 'FTM'+i,
            'artist': 'Lorem Ipsum',
            'price' : 'P123.45'
        });
    }

    $scope.ftmList = ftmList;
    $scope.click = function(clickEvent, id) {
       $location.path("/ftm/"+id);
    };
}]);

ftmController.controller('ftmDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.headerTitle = 'FULL TRACK MUSIC';
    $scope.detail = {
        'id'          : $routeParams.contentId,
        'title'       : 'FTM'+$routeParams.contentId,
        'artist'      : 'Lorem Ipsum',
        'price'       : 'P123.45',
        'thumb'       : '/images/sample-1.jpg',
        'description' : 'Lorem ipsum dolor sit amet, debitis suscipiantur te nec. Timeam voluptaria sea te, est eu adhuc dolore corpora, at hinc vitae nec. Per nostrum laboramus ne, postea pertinacia et vix. Duo dissentiunt signiferumque ne, eum vituperata quaerendum cu. Et nostrud splendide pro. Integre ocurreret appellantur vix et, quo cu aeterno utroque conceptam, ex duo partem platonem. Dolorem quaestio qui no. Duo no maluisset gubergren, vix ut illud nulla. Velit perpetua intellegam mea no. Ut mel doming evertitur deseruisse. Sit verear assentior eu, consul primis invenire eu has, eros dicta in est.'
    };

    $scope.download = function(clickEvent, id) {
        window.location.href = "/download.php?type=ftm&contentId="+id;
    };
}]);



stickerController.controller('stickerListController', ['$scope', '$location', function($scope, $location) {
    var stickerList = [];
    for(i=1; i<=5; i++) {
        stickerList.push({
            'id'    : i,
            'icon'  : '/images/sample-1.jpg',
            'title' : 'Sticker'+i,
            'artist': 'Lorem Ipsum',
            'price' : 'P2.00'
        });
    }

    $scope.stickerList = stickerList;
    $scope.click = function(clickEvent, id) {
       $location.path("/sticker/"+id);
    };
}]);

stickerController.controller('stickerDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.headerTitle = 'STICKER';
    $scope.detail = {
        'id'          : $routeParams.contentId,
        'title'       : 'Sticker'+$routeParams.contentId,
        'price'       : 'P2.00',
        'thumb'       : '/images/sample-1.jpg',
        'description' : 'Lorem ipsum dolor sit amet, debitis suscipiantur te nec. Timeam voluptaria sea te, est eu adhuc dolore corpora, at hinc vitae nec. Per nostrum laboramus ne, postea pertinacia et vix. Duo dissentiunt signiferumque ne, eum vituperata quaerendum cu. Et nostrud splendide pro. Integre ocurreret appellantur vix et, quo cu aeterno utroque conceptam, ex duo partem platonem. Dolorem quaestio qui no. Duo no maluisset gubergren, vix ut illud nulla. Velit perpetua intellegam mea no. Ut mel doming evertitur deseruisse. Sit verear assentior eu, consul primis invenire eu has, eros dicta in est.'
    };

    $scope.download = function(clickEvent, id) {
        window.location.href = "/download.php?type=sticker&contentId="+id;
    };
}]);



truetoneController.controller('truetoneListController', ['$scope', '$location', function($scope, $location) {
    var truetoneList = [];
    for(i=1; i<=5; i++) {
        truetoneList.push({
            'id'    : i,
            'icon'  : '/images/sample-1.jpg',
            'title' : 'Truetone'+i,
            'artist': 'Lorem Ipsum',
            'price' : 'P2.00'
        });
    }

    $scope.truetoneList = truetoneList;
    $scope.click = function(clickEvent, id) {
       $location.path("/truetone/"+id);
    };
}]);

truetoneController.controller('truetoneDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.headerTitle = 'TRUETONE';
    $scope.detail = {
        'id'          : $routeParams.contentId,
        'title'       : 'Truetone'+$routeParams.contentId,
        'artist'      : 'Lorem Ipsum',
        'price'       : 'P2.00',
        'thumb'       : '/images/sample-1.jpg',
        'description' : 'Lorem ipsum dolor sit amet, debitis suscipiantur te nec. Timeam voluptaria sea te, est eu adhuc dolore corpora, at hinc vitae nec. Per nostrum laboramus ne, postea pertinacia et vix. Duo dissentiunt signiferumque ne, eum vituperata quaerendum cu. Et nostrud splendide pro. Integre ocurreret appellantur vix et, quo cu aeterno utroque conceptam, ex duo partem platonem. Dolorem quaestio qui no. Duo no maluisset gubergren, vix ut illud nulla. Velit perpetua intellegam mea no. Ut mel doming evertitur deseruisse. Sit verear assentior eu, consul primis invenire eu has, eros dicta in est.'
    };

    $scope.download = function(clickEvent, id) {
        window.location.href = "/download.php?type=truetone&contentId="+id;
    };
}]);
