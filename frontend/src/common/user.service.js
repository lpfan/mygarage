(function() {
  'use strict';
  angular.module('public')
    .service('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http) {
    var service = this;

    service.registerUser = function(userData) {
      return $http.post('/api/users', userData).then(function(response) {
        return response.data
      });
    }
  }
})()
