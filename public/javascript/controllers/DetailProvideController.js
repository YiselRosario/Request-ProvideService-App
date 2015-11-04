(function() {
	'use strict';
	angular.module('app')
	.controller('DetailProvideController', DetailProvideController);
	function DetailProvideController(ProvideFactory, $state, $stateParams) {
		var vm = this;

//DISPLAY PROVIDE BY ID.
		if(!$stateParams.id) $state.go('Home'); //This means, is this Id exists, run the function inside.
		  ProvideFactory.getProvideById($stateParams.id).then(function(res){
		    vm.provide = res;   //at this point I am creating a new variable.
		  });

	}
})();
