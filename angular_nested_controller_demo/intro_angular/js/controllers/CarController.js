angular.module('IntroAngular')
  .controller('CarController', CarController);

function CarController ($scope){
  var vm = this;
  vm.test = 'Goodbye World';
  $scope.car = [
    {make: "Grand Am", model: "Pontiac", num: 1},
    {make: "Toyota", model: "Camry", num: 2},
    {make: "Dodge", model: "Charger", num: 3}
  ]
}
