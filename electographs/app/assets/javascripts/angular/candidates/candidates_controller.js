(function(){
  'use strict';

  angular
  .module('app.candidates')
  .controller('CandidatesController', CandidatesController);

  CandidatesController.$inject = ['$routeParams','CandidatesFactory'];
  function CandidatesController($routeParams, CandidatesFactory){
    var vm = this;
    var Candidates = CandidatesFactory.get({}, function(data){
      vm.Candidates = data.candidates;
    });
    console.log(Candidates);
  }

})();