angular.module('app').config(function ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'zumbis.html',
            controller: 'zumbiCtrl'
        }); // FIM .when

}); // FIM angular.module('app')