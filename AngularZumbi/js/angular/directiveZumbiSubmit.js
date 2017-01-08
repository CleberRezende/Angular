angular.module('app').directive('ngZumbiSubmit', function () {
    return {
        restrict: 'E',
        require: '^form',
        scope: {
            submit: '&'
        },
        template: '<button type="submit" class="btn btn-primary"> SALVAR </button>',
        link: function ($scope, $element, $attrs, formCtrl) {
            $element.on('click', function () {
                if (formCtrl.$valid) {
                    $scope.submit();
                }
                else {
                    alert('Formulário inválido')
                }
            }); // $element.on('click')
        } // FIM Link
    }// FIM RETURN
}); // FIM angular.module('app').directive('ngZumbiSubmit' ...