angular.module('contactApp',[]);

angular.module('contactApp')
  .controller('ContactController', ContactController);

ContactController.$inject = ['$scope', '$http', 'ContactService'];
