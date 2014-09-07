angular.module('storeApp', [])

  .controller('orderController', function($scope) {

  $scope.options = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 }
  ];
 
  $scope.deFiesta = $scope.options[0];
  $scope.fuegosBahia = $scope.options[0];
  $scope.asiEsRosa = $scope.options[0];
});
