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

		// HomeFactory.getAllRequests().then(function(res){
		// 	 console.log(res);
		// 		vm.requests = res;
		// 	});

// //REMOVE-DELETE Review by id from the database.
// 			vm.deleteRequest = function(requestId){
// 				console.log(requestId);
// 				HomeFactory.deleteRequest(requestId).then(function(){
// 					vm.request.splice(vm.request.indexOf(requestId), 1);
// 					$state.go('Home');
// 				});
// 			};

	}
})();
