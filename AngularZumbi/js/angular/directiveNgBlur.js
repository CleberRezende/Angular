
angular.module('app').directive('ngBlur', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function ($scope, $element, $attrs, ngModel) {
            $element.on('blur', function () {
                if (ngModel.$invalid && ngModel.$dirty) {
                    $element.addClass('error');
                }
                else {
                    $element.removeClass('error');
                }
            }); // FIM $element.on
        } // FIM Link
    };// FIM RETURN
}); // FIM angular.module('app').directive('ngBlur' ...
