(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider) {
		$mdThemingProvider.theme('default')
		.primaryPalette('amber', {
			'default': '400', // by default use shade 400 from the pink palette for primary intentions
			'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
			'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
			'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
		})
		// If you specify less than all of the keys, it will inherit from the
		// default shades
		.accentPalette('blue-grey', {
			'default': '600' // use shade 200 for default, and keep all other shades the same
		});


		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('Login',{
			url:'/login',
			templateUrl:'views/login.html'
		}).state('Register',{
			url:'/register',
			templateUrl:'views/register.html'
		}).state('SideMenu',{
			url:'/sidemenu',
			templateUrl:'views/sidemenu.html'
		}).state('RequestService',{
			url:'/requestservice',
			templateUrl:'views/requestservice.html'
		}).state('ProvideService',{
			url:'/provideservice',
			templateUrl:'views/provideservice.html'
		});
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');
	}
})();
