(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);
	function HomeFactory($http, $q) {
		var o = {};

//GET REQUEST BY ID to display.
		o.getRequestById = function(id){
			console.log(id);
			var q = $q.defer();
			$http.get('/api/request/' + id).then(function(res){
				q.resolve(res.data);
			});
			return q.promise;
		};

//GET Request from Data Base.
		o.getAllRequests = function(){
			var q = $q.defer();
			$http.get('api/request').then(function(res){
				console.log(res.data);
				q.resolve(res.data);
			});
			return q.promise;
		};

// POST Request Service Form to the Data Base.
		o.createRequest = function(request){
			console.log(request);
			var q = $q.defer();
			$http.post('api/request', request).then(function(){
				q.resolve();
			});
			return q.promise;
		};



		return o;
	}
})();
