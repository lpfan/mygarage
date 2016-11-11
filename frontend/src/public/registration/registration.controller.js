(function() {
  'use strict';

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['UserService', '$location', '$scope`'];

  function RegistrationController(UserService, $location, $scope) {
    var $ctrl = this;

    $ctrl.submit = function(user) {
      UserService.registerUser(user)
        .then(function(response) {
          if (response.status === 'success') {
            $scope.informMessage = 'Registration successful'
            $location.path('/');
          } else {
            $scope.informMessage = response.message;
          }
        });
    };
  }
})();
