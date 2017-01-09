angular.module('app').directive('ngCepValidator', function(CepService, $rootScope){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel){
            $scope.$watch($attrs.ngModel, function(value){
                if(value){
                    if(value.match('/^[0-9]{5}-[0-9]{3}$/')){
                        // valid
                       CepService.get(value).then(function(response){
                            $rootScope.$broadcast('cep', response.data);
                        }); // $HTTP
                        ngModel.$setValidity($attrs.ngModel, false);
                    }
                    else{
                        // invalid
                        ngModel.$setValidity($attrs.ngModel, false);
                    }
                }
                else{
                    // invalid
                    ngModel.$setValidity($attrs.ngModel, false);
                }
            });
        } // FIM Link
    }; // FIM RETURN
}); // FIM angular.module('app').directive('ngCepValidator'...)

