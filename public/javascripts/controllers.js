'use strict';

angular.module('pea.controllers', []).
  controller('AppCtrl', function ($scope, persona, $rootScope, $http, $location) {
    $rootScope.isAuthenticated = false;

    if (localStorage.getItem('personaEmail')) {
      if (!$rootScope.email) {
        $http({
          url: '/login',
          method: 'GET'
        }).success(function (data) {

          $rootScope.isAuthenticated = true;
          $rootScope.email = data.email;
        }).error(function (data) {

          localStorage.removeItem('personaEmail')
          console.log('Login failed because ' + data);
        });
      }
    }

    $rootScope.login = function () {
      persona.login();
    };

    $rootScope.logout = function () {
      persona.logout();
    }
  }).

  controller('HomeCtrl', function ($scope, persona, $http) {
    console.log('home view');
  }).

  controller('GifsCtrl', function ($scope, $http, $rootScope) {
    $scope.gifs=[];
    console.log('gifs view');

    if($rootScope.isAuthenticated){
      $http({
          method:'GET',
            url:'/api/get_gifs'
        }).success(function(data){
          $scope.gifs = data.gifs
        }).error(function(err, data){
          console.log('error getting gifs');
      });
    }
  })
