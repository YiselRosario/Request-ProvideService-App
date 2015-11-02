(function() {
	'use strict';
	angular.module('app')
	.factory('ProvideFactory', ProvideFactory);
	function ProvideFactory($http, $q) {
		var o = {};


// //DELETE review from the database.
// 		o.deleteRequest = function(id){
// 			console.log(id);
// 			var q = $q.defer();
// 			$http.delete('/api/request/' + id).then(function(){
// 				q.resolve();
// 			});
// 			return q.promise;
// 		};
//
// //PUT-EDIT Request by id.
// 		o.editRequest = function(newRequestObj, requestId){
// 			var q = $q.defer();
// 			newRequestObj.requestId = requestId;
// 			$http.put('/api/request/', newRequestObj).then(function(res){
// 				q.resolve(res.data);
// 			});
// 			return q.promise;
// 		};
//
// //GET REQUEST BY ID to display.
// 		o.getRequestById = function(id){
// 			console.log(id);
// 			var q = $q.defer();
// 			$http.get('/api/request/' + id).then(function(res){
// 				q.resolve(res.data);
// 			});
// 			return q.promise;
// 		};
//
//GET Request from Data Base.
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
