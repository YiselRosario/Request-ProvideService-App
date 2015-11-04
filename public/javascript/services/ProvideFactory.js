(function() {
	'use strict';
	angular.module('app')
	.factory('ProvideFactory', ProvideFactory);
	function ProvideFactory($http, $q) {
		var o = {};


//DELETE Provide from the database.
		o.deleteProvide = function(id){
			console.log(id);
			var q = $q.defer();
			$http.delete('/api/provide/' + id).then(function(){
				q.resolve();
			});
			return q.promise;
		};

//PUT-EDIT PROVIDE by id.
		o.editProvide = function(newProvideObj, provideId){
			var q = $q.defer();
			newProvideObj.provideId = provideId;
			$http.put('/api/provide/', newProvideObj).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

//GET PROVIDE BY ID to display.
		o.getProvideById = function(id){
			console.log(id);
			var q = $q.defer();
			$http.get('/api/provide/' + id).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

//GET PROVIDE PROFILE from Data Base.
		o.getAllProvides = function(){
			var q = $q.defer();
			$http.get('api/provide').then(function(res){
				console.log(res.data);
				q.resolve(res.data);
			});
			return q.promise;
		};

// POST Provide Service Form to the Data Base.
		o.createProvide = function(provide){
			console.log(provide);
			var q = $q.defer();
			$http.post('api/provide', provide).then(function(){
				q.resolve();
			});
			return q.promise;
		};



		return o;
	}
})();
