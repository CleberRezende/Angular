angular.module('app').controller('zumbiCtrl', function ($scope, $rootScope) {

    $rootScope.$on('cep', function(event, data){
        $scope.ocorrencia.bairro = data.bairro;
    }); // FIM $rootScope

    $scope.ocorrencias = [];

    $scope.cadastrarZumbi = function (ocorrencia) {
        $scope.ocorrencias.push(angular.copy(ocorrencia));
    };
});