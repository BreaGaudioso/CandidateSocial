(function(){

  angular
  .module('app.candidates')
  .factory('CandidatesFactory', CandidatesFactory);

  CandidatesFactory.$inject = ['$resource'];

  function CandidatesFactory($resource){
    return $resource('/api/candidates/:id', {id: '@id'});
  };

})();

