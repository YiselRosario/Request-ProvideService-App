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

		//DELETE Provide from the database. DELETE BUTTON ON DISPLAY REST POSTS.
			vm.deleteProvide = function(provideId){
				ProvideFactory.deleteProvide(provideId).then(function(){
					vm.provides.splice(vm.provides.indexOf(provideId), 1);
				});
			};



	}
})();
