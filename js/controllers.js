var ftmController = angular.module('ftmController', []);

ftmController.controller('ftmListController', ['$scope', function($scope) {
    var ftmList = [];
    for(i=1; i<=9; i++) {
        ftmList.push({
            'icon'  : '/images/sample-1.jpg',
            'title' : 'Sample'+i,
            'artist': 'Lorem Ipsum',
            'price' : 'P123.45',
        });
    }

    $scope.ftmList = ftmList;
}]);
