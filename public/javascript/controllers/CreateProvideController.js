(function() {
	'use strict';
	angular.module('app')
	.controller('CreateProvideController', CreateProvideController);
	function CreateProvideController(ProvideFactory, $state, $http) {
		var vm = this;
		vm.provide = {};

		vm.createProvide = function(){
			console.log(vm.provide);
			ProvideFactory.createProvide(vm.provide).then(function(){
				$state.go('DisplayProvide');
			});
		};


	}
})();
