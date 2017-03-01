angular.module('component-demo').component('modal', {
  templateUrl: '../views/modal.html',
  bindings : {
    //< - single way binding, = - double way binding (performance if use, don't), @ - string, & - function
    name: "@",
    title: "<",
    message: "=",
    cancelClickHandler: '&',
    successClickHandler: '&'
  },
  controller: function($scope) {
    console.log('bindings', $scope);
  },
  controllerAs: '$ctrl' //default controller, but you could name something else
})


//<modal title="" message=""></modal>  -- single word
//<confirmation-modal></confirmation-modal> -- camel case word
