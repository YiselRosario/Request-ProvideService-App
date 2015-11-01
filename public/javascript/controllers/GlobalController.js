(function() {
  "use strict";
  angular.module('app')
  .controller('GlobalController', GlobalController);
  function GlobalController(UserFactory, $state, $http, $mdSidenav, $timeout) {
    var vm = this;
    vm.isLogin = true; //switch between the login and register view on the login_register.html page
    vm.user = {};
    vm.status = UserFactory.status;

//Left Side Menu Button
		vm.toggleLeft = function () {
			$mdSidenav('left').toggle();
		};

// Left SideNav Close button
    vm.closeLeft = function () {
      $mdSidenav('left').toggle();
    };

//SideNav Functionality Button on Index page
    vm.toggleRight = function () {
      $mdSidenav('right').toggle();
    };

    vm.toggleRightRegister = function () {
      $mdSidenav('right').toggle();
    };
//SideNav Close button
    vm.close = function () {
      $mdSidenav('right').toggle();
    };

//Loggin, Register and logout User.
    vm.logout = function() {
      UserFactory.logout();
      $state.go('Home');
    };

    vm.registerUser = function() {
      UserFactory.registerUser(vm.user).then(function() {
        $state.go('Home');
      });
    };

    vm.loginUser = function() {
      UserFactory.loginUser(vm.user).then(function() {
        $state.go('Home');
        vm.user = {};
      });
    };


  }
})();
