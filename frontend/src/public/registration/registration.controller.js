(function() {
  'use strict';

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['UserService', '$scope'];

  function RegistrationController(UserService, $scope) {
    var $ctrl = this;

    $ctrl.submit = function(user) {
      UserService.registerUser(user)
        .then(function(response) {
          if (response.success) {
            console.log('Registration success');
          } else {
            console.log('error ', response.message);
          }
        });
    }
  }
})()
