var switchview = angular.module('switchview', []);

switchview.directive('switchView', function() {
    return {
        link: function(scope, elem, attrs) {
            scope.switchLayout = function(event, layout) {
                scope.layout = layout;
            };

            scope.$watch('layout', function(value) {
                if(scope.layout == attrs.switchView) {
                    elem.show();
                }else {
                    elem.hide();
                }
            });
        }
    };
});
