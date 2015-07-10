var categoriesController = angular.module('categoriesController', []);

categoriesController.controller('categoryCardsController', ['$scope', 'Category', function($scope, Category) {
    /*var categories = [
       {id:1, title:'Full track Music', thumbPath:'/images/sample-1.jpg', url:'ftm'},
       {id:2, title:'Truetone', thumbPath:'/images/sample-1.jpg', url:'truetone'},
       {id:3, title:'Sticker', thumbPath:'/images/sample-1.jpg', url:'sticker'},
       {id:4, title:'Games', thumbPath:'/images/sample-1.jpg', url:'games'},
       {id:5, title:'Ebooks', thumbPath:'/images/sample-1.jpg', url:'ebooks'},
    ];*/
    var categories = Category.query();
    console.log(categories);

    $scope.categories = categories;
}]);
