(function() {
	'use strict';
	angular.module('app')
	.controller('CreateRequestController', CreateRequestController);
	function CreateRequestController(HomeFactory, $state) {
		var vm = this;
		vm.request = {};

// POST Request Service Form to the Data Base.
		vm.createRequest = function(){
			console.log(vm.request);
			HomeFactory.createRequest(vm.request).then(function(){
				$state.go('DisplayRequest');
			});
		};

	}
})();
