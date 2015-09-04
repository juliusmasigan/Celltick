var labelError = angular.module('labelError', []);

labelError.directive('withError', ['$rootScope', function($rootScope) {
    return {
        link: function($scope, element, attrs) {
            var labelEl = element.parents().find('label[for='+attrs.id+']');
            $scope.$on('raiseLabelError', function(event, error) {
                labelEl.attr({'data-error':error})
                    .addClass('invalid');
                element.addClass('invalid').focus();
            });

            element.on('blur', function(event) {
                labelEl.attr('data-error','');
                element.removeClass('invalid');
            });
        }
    };
}]);
