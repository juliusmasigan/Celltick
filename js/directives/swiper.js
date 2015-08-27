var ctswiper = angular.module('ctswiper', []);
var swiper;

ctswiper.directive('swiper', ['$timeout', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            $timeout(function() {
                swiper = new Swiper('.swiper-container', {pagination:'.swiper-pagination'});
            }, 0);
        }
    }
}]);
