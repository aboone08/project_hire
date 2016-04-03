angular.module('contactApp', []);//this is the setter syntax that creates the application

angular.module('contactApp')//this is the getter syntax, used so a variable doesn't have to be made to store our angular applications.
  .controller('ContactController', ContactController);

ContactController.$inject = ['$scope', '$http', 'ContactService'];

function ContactController($scope, $http, ContactService){
  postContacts();
  $scope.contact.name = true;
  $scope.contact.email = true;
  $scope.contact.comment = true;


//Contact Form
  $scope.contact = function(){
    ContactService.create(contact)
                  .then(function(contact){
                    $scope.contact = {response};
                    postContacts();
                  });
  }
}
