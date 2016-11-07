(function() {
  'use strict';

  angular.module('public')
    .config(routesConfig);

  routesConfig.$inject = ['$stateProvider'];

  function routesConfig($stateProvider) {
    $stateProvider
      .state('public', {
        abstract: true,
        templateUrl: 'src/public/public.html'
      })
      .state('public.home', {
        url: '/',
        templateUrl: 'src/public/home/home.html'
      })
  }
})()
