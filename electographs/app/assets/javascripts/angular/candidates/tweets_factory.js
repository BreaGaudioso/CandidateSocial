(function(){

  angular
  .module('app.candidates')
  .factory('TweetsFactory', TweetsFactory);

  TweetsFactory.$inject = ['$resource'];

  function TweetsFactory($resource){
    return $resource('/api/tweets');
  };

})();

