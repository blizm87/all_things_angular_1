(function() {
'use strict';

// all code will go in here...

angular.module('myApp', []) // first defined module
  .controller('MainController', function($scope){
    var vm = this;
    vm.title = 'My first ng';
    vm.names = ['Nicole', 'Layne', 'Winford', 'Mattie', 'Lawanda'];
    vm.extraNames = ['Diane', 'Santos', 'Liz', 'Gwyn'];
    vm.addName = function() {
      if (vm.extraNames.length) vm.names.push(vm.extraNames.shift());
    };
    vm.gem = {
      name: 'Pepsi',
      price: 3.50,
      desc: 'Soda'
    }

  });
})();
