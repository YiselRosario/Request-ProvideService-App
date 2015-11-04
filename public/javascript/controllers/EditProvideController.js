(function() {
	'use strict';
	angular.module('app')
	.controller('EditProvideController', EditProvideController);
	function EditProvideController(ProvideFactory, $state, $stateParams) {
		var vm = this;
    vm.newProvide = {};

//EDIT PROVIDE by Id.
    vm.editProvide = function(){
        ProvideFactory.editProvide(vm.newProvide, $stateParams.id).then(function(res){
          console.log(res);
          vm.newProvide = null;
          $state.go('DisplayProvide');
        });
      };


// //DISPLAY Provide BY ID.
// 		if(!$stateParams.id) $state.go('Home'); //This means, is this Id exists, run the function inside.
// 		  HomeFactory.getRequestById($stateParams.id).then(function(res){
// 		    vm.request = res;   //at this point I am creating a new variable.
// 		  });




	}
})();
