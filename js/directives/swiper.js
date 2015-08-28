var ctswiper = angular.module('ctswiper', []);
var swiper;

ctswiper.directive('swiper', ['$timeout', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            $timeout(function() {
                swiper = new Swiper(element, {
                    pagination:element.find('div[swiper-pagination]'),
                    autoplay:5000
                });
            }, 0);
        }
    }
}]);
