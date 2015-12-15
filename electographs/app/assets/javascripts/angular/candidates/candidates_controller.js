(function(){
  'use strict';

  angular
  .module('app.candidates')
  .controller('CandidatesController', CandidatesController);

  CandidatesController.$inject = ['$routeParams','CandidatesFactory'];

  function CandidatesController($routeParams, CandidatesFactory){
    var vm = this;
    vm.population = 318900000;
    vm.electionVAP = 235248000;
    vm.electionVotes = 129085403;
    vm.percentVAPVotes = 54.87;

    var Candidates = CandidatesFactory.get({}, function(data){
      vm.Candidates = data.candidates;
    });
    
    //puts five most favored tweets in an array

    vm.showCandidate = function(candidateId){CandidatesFactory.get({},{'id': candidateId})
    .$promise.then(function(data){
      vm.chosenCandidate = data.candidate;
      vm.tweets = data.candidate.tweets;
      vm.followHandle = data.candidate.handle.substring(1);
      vm.acctCreatedAt = (moment(data.candidate.acct_created_at, "YYYY-MM-DD").format('MMMM Do YYYY'));
      vm.longAgo = moment().diff(data.candidate.acct_created_at, "days");
      vm.tweetsPerDay = data.candidate.statuses_count / vm.longAgo;
      vm.FavorData(vm.tweets);
    });
    }

    vm.FavorData = function(tweets){
      vm.data = [];
      for(var i=0; i<5; i++){
        vm.data.push(tweets[i]);
      }
      console.log(vm.data);
    };

  }
})();
