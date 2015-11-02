(function() {
	'use strict';
	angular.module('app')
	.controller('EditRequestController', EditRequestController);
	function EditRequestController(HomeFactory, $state, $stateParams) {
		var vm = this;
    vm.newRequest = {};

//EDIT request by Id.
    vm.editRequest = function(){
        HomeFactory.editRequest(vm.newRequest, $stateParams.id).then(function(res){
          console.log(res);
          vm.newReview = null;
          $state.go('DisplayRequest');
        });
      };


//DISPLAY REQUEST BY ID.
		if(!$stateParams.id) $state.go('Home'); //This means, is this Id exists, run the function inside.
		  HomeFactory.getRequestById($stateParams.id).then(function(res){
		    vm.request = res;   //at this point I am creating a new variable.
		  });




	}
})();
