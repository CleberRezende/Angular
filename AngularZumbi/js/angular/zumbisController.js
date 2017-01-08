angular.module('app').controller('zumbiCtrl', function ($scope) {

    $scope.ocorrencias = [];

    $scope.cadastrarZumbi = function (ocorrencia) {
        $scope.ocorrencias.push(angular.copy(ocorrencia));
    }
});