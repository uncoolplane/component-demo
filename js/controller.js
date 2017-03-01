angular.module('component-demo').controller('mainCtrl', function($scope) {
  $scope.modal1Title = "Animals Modal";
  $scope.modal1Message = "Hey, I like animals";

  $scope.modal2Title = "Cars Modal";
  $scope.modal2Message = "Hey, I like cars";

  $scope.success = function() {
    console.log('success');
  }

  $scope.cancel = function() {
    console.log('cancel');
  }
})
