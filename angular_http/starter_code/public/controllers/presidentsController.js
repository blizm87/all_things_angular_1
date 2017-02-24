(function() {
  "use strict";

  angular
    .module('ThePresidentsApp')
    .controller('PresidentsController', PresidentsController);

  PresidentsController.$inject = ['$http'];
  function PresidentsController($http){
    var vm = this;
    vm.all = [];

    function getPresidents(){
      $http
        .get('/api/presidents')
        .then(function(response){
          vm.all = response.data.presidents;
      }, function(err) {
            console.log(err);
      });
    }
    getPresidents();
  }
})();
