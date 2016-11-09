(function() {
  'use strict';

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['UserService', '$location', '$scope'];

  function RegistrationController(UserService, $location, $scope) {
    var $ctrl = this;

    $ctrl.submit = function(user) {
      UserService.registerUser(user)
        .then(function(response) {
          $scope.registrationStatus = response.status;
          $scope.informationMessage = response.message;
        });
      if ($scope.registrationStatus === 'success') {
        $location.path('/');
      }
    };
  }
})();
