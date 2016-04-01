angular.module('contactApp',[

]);

angular.module('contactApp')
  .controller('ContactController', ContactController);

ContactController.$inject = ['$scope', '$http', 'ContactService'];

function ContactController($scope, $http, ContactService){
  getContacts();
  $scope.isEditing = false;
}
