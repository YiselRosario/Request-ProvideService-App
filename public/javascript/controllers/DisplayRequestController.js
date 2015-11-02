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

//DELETE Review from the database. DELETE BUTTON ON DISPLAY REST POSTS.
	vm.deleteRequest = function(requestId){
		HomeFactory.deleteRequest(requestId).then(function(){
			vm.requests.splice(vm.requests.indexOf(requestId), 1);
		});
	};


	}
})();
