(function(){
  'use strict';
  
  angular
  .module('app.candidates')
  .controller('CandidatesController', CandidatesController);

  CandidatesController.$inject = ['$scope', '$routeParams','CandidatesFactory', 'TweetsFactory'];

  function CandidatesController($scope, $routeParams, CandidatesFactory, TweetsFactory){
    var vm = this;
    vm.all = false;
    vm.population = 318900000;
    vm.electionVAP = 235248000;
    vm.electionVotes = 129085403;
    vm.percentVAPVotes = 54.87;

    var Candidates = CandidatesFactory.get({}, function(data){
      vm.Candidates = data.candidates;
    });

  vm.TopFollowers = function(){CandidatesFactory.get({}).$promise.then(function(data){
    vm.candidateFollowSort=data.candidates.sort(function(a,b){
      return parseFloat(b.followers_count) - parseFloat(a.followers_count);
    });
    console.log(vm.candidateFollowSort);
  })};

vm.TopFollowers();
    vm.TopTweets = function(){TweetsFactory.get({}).$promise.then(function(data){
      var allSort=data.tweets.sort(function(a,b){
        return parseFloat(b.favorite_count) - parseFloat(a.favorite_count);
      });
      var topData = [];
      for (var i=0; i<10; i++){
        topData.push(allSort[i])
      }
      $scope.data = topData;
    })}

    vm.showCandidate = function(candidateId){CandidatesFactory.get({},{'id': candidateId})
    .$promise.then(function(data){
      vm.chosenCandidate = data.candidate;
      vm.twitterDescription = data.candidate.description
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
      $scope.data = vm.data 
    };
  }
})();
