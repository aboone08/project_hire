angular.module('contactApp')
      .factory('ContactService', ContactService);

ContactService.$inject = ['$http'];

function ContactService($http){
  return {
    submit: submitContact,
    name: name,
    email: email,
    comment: comment
  }

  function  submitContact(){
    return $http.post('/submit/contact')
      .then(function(response){
        return response.message;
      });
    }
}
