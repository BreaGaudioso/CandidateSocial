(function(){
  'use strict';

  angular
  .module('app.candidates')
  .controller('CandidatesController', CandidatesController);

  CandidatesController.$inject = ['$scope', '$routeParams','CandidatesFactory', 'TweetsFactory'];

  function CandidatesController($scope, $routeParams, CandidatesFactory, TweetsFactory){
    var vm = this;
    vm.population = 318900000;
    vm.electionVAP = 235248000;
    vm.electionVotes = 129085403;
    vm.percentVAPVotes = 54.87;  

   vm.aboutRender = function(){
    console.log('yo');
      vm.all = false;
      vm.about = true;
      vm.each = false;
    }
  vm.aboutRender()

    vm.allRender = function(){
      vm.all = true;
      vm.about=false;
      vm.each = false;
    }

//creates an array that shows you how many days ago this was created
  vm.longAgo = function(){CandidatesFactory.get({}).$promise.then(function(data){
    var array =[]
    data.candidates.forEach(function(candidate){
      var createdAt= (moment(candidate.acct_created_at, "YYYY-MM-DD").format('MMMM Do YYYY'));
      var daysAgo = moment().diff(candidate.acct_created_at, "days");
      var newObj = {name: candidate.name,
                    createdOn: createdAt,
                    daysFromNow: daysAgo,
                    graph: 'Ratings by how many days ago twitter was created'
                  }
      array.push(newObj);
    });
    vm.daysArray=array.sort(function(a,b){
      return parseFloat(b.daysFromNow) - parseFloat(a.daysFromNow);
    })
  })};


// sorts candidates and creates array for top followers
 vm.TopFollowers = function(){CandidatesFactory.get({}).$promise.then(function(data){
    vm.candidateFollowSort=data.candidates.sort(function(a,b){
      return parseFloat(b.followers_count) - parseFloat(a.followers_count);
    });
   var array =[]
    data.candidates.forEach(function(candidate){
      var newObj = {name: candidate.name,
                    number: candidate.followers_count,
                    graph: 'Ratings by followers'}
      array.push(newObj);
    });
    vm.followersArray=array.sort(function(a,b){
      return parseFloat(b.number) - parseFloat(a.number);
    });
  })};

//creates array for top following
  vm.TopFollowing = function(){CandidatesFactory.get({}).$promise.then(function(data){
    var array =[]
    data.candidates.forEach(function(candidate){
      var newObj = {name: candidate.name,
                    number: candidate.friends_count,
                    graph: 'Ratings by followings'}
      array.push(newObj);
    });
    vm.followingArray=array.sort(function(a,b){
      return parseFloat(b.number) - parseFloat(a.number);
    });
    $scope.dataData = vm.followingArray
    $scope.followingArray = vm.followingArray
  })};

//creates array for top tweets
  vm.TopTweeter = function(){CandidatesFactory.get({}).$promise.then(function(data){
    var array=[]
    data.candidates.forEach(function(candidate){
      var newObj = {name: candidate.name,
                    number: candidate.statuses_count,
                    graph: 'Ratings by total tweets'}
      array.push(newObj);
    });
    vm.topTweetArray=array.sort(function(a,b){
      return parseFloat(b.number) - parseFloat(a.number);
    });
  })};


// vm.dataSwitch = function(data){
//   $scope.dataData = vm.followersArray;
// }


//for bar graph on top ten tweets
    vm.topTweets = function(){TweetsFactory.get({}).$promise.then(function(data){
      var allSort=data.tweets.sort(function(a,b){
        return parseFloat(b.favorite_count) - parseFloat(a.favorite_count);
      });
      var topData = [];
      for (var i=0; i<10; i++){
        topData.push(allSort[i])
      }
      $scope.data = topData;
    })}

//everything needed for candidate show
    vm.showCandidate = function(candidateId){CandidatesFactory.get({},{'id': candidateId})
    .$promise.then(function(data){
      vm.each = true;
      vm.all = false;
      vm.about = false;
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

//function to get the top 5 tweets of each candidate 
    vm.FavorData = function(tweets){
      vm.data = [];
      for(var i=0; i<5; i++){
        vm.data.push(tweets[i]);
      }
      $scope.data = vm.data 
    };



//call these on page load
vm.TopFollowers()
vm.TopFollowing()
vm.TopTweeter()
vm.topTweets()



  }
})();


