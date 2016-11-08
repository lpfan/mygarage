(function() {
  'use strict';

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['UserService', '$location'];

  function RegistrationController(UserService, $location) {
    var $ctrl = this;

    $ctrl.submit = function(user) {
      UserService.registerUser(user)
        .then(function(response) {
          if (response.status === 'success') {
            $location.path('/');
          }
        });
    };
  }
})();
