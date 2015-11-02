(function() {
	'use strict';
	angular.module('app')
	.controller('DetailRequestController', DetailRequestController);
	function DetailRequestController(HomeFactory, $state, $stateParams) {
		var vm = this;

//DISPLAY REQUEST BY ID.
		if(!$stateParams.id) $state.go('Home'); //This means, is this Id exists, run the function inside.
		  HomeFactory.getRequestById($stateParams.id).then(function(res){
		    vm.request = res;   //at this point I am creating a new variable.
		  });




	}
})();
