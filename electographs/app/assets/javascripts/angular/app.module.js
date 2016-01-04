(function(){
  'use strict';

  angular
  .module('app', [
    'ngRoute',
    'ngResource',
   'app.candidates'
  ])

  .config(configModule)


  configModule.$inject = ['$routeProvider'];

  function configModule($routeProvider) {
    //figure out which of the above three I actually need
    $routeProvider
      .otherwise({redirectTo: '/'});
  };
})();