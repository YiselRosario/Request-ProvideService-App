(function() {
	'use strict';
	angular.module('app')
	.controller('DisplayProvideController', DisplayProvideController);
	function DisplayProvideController(ProvideFactory, $state, $http) {
		var vm = this;

		//Get all Provide from DataBase.
				ProvideFactory.getAllProvides().then(function(res){
					 console.log(res);
						vm.provides = res;
					});

		// //DELETE Provide from the database. DELETE BUTTON ON DISPLAY REST POSTS.
		// 	vm.deleteRequest = function(requestId){
		// 		HomeFactory.deleteRequest(requestId).then(function(){
		// 			vm.requests.splice(vm.requests.indexOf(requestId), 1);
		// 		});
		// 	};



	}
})();
