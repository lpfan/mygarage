(function() {
  'use strict';

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$scope'];

  function RegistrationController($scope) {
    var $ctrl = this;

    $ctrl.submit = function(user) {}
  }
})()
