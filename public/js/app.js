var contactApp = angular.module('contactApp', []);//this is the setter syntax that creates the application

contactApp.controller('ContactController', ['$scope', function($scope) {
  $scope.contact = function(submitContact);
}]);

angular.module('contactApp')//this is the getter syntax, used so a variable doesn't have to be made to store our angular applications.
  .controller('ContactController', ContactController);

ContactController.$inject = ['$scope', '$http', 'ContactService'];

function ContactController($scope, $http, ContactService){
  postContacts();

//Contact Form
  $scope.contact = function(){
    ContactService.create(contact)
                  .then(function(contact){
                    $scope.contact = {response};
                    postContacts();
                  });
  }
}
