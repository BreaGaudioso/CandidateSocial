(function(){
  'use strict';

  angular
  .module('app.candidates')
  .config(ConfigCandidates);

  ConfigCandidates.$inject = ['$routeProvider'];

  function ConfigCandidates($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'CandidatesController',
      controllerAs: 'vm'
    })
    .when('/compare', {
      templateUrl: 'partials/compareCandidates.html',
      controller: 'CandidatesController',
      controllerAs: 'vm'
    })
    .when('/:candidate_id', {
      templateUrl: 'partials/show.html',
      controller: 'CandidatesController',
      controllerAs: 'vm'
    })
  }
}) ();