(function() {
	'use strict';
	angular.module('app')
	.controller('DisplayRequestController', DisplayRequestController);
	function DisplayRequestController(HomeFactory, $state, $http) {
		var vm = this;

//Get all Requests from DataBase.
		HomeFactory.getAllRequests().then(function(res){
			 console.log(res);
				vm.requests = res;
			});


	}
})();
