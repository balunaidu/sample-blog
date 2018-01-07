'use strict';
(function(){
	angular.module('myApp')
	
	.controller('regCtrl', function($scope, $state, $http) {
    if (localStorage.getItem('authToken')) {
        
            $state.go('pages')
        
        
    }   
     $scope.isSubmitDisabled = true;
    $scope.isRequires = true;
    $scope.isReg = function(user) {
        if ($scope.myForm.$valid) {
            if ($scope.user.password === $scope.user.rpassword) {

                $scope.isSubmitDisabled = false;
            }
        } else {
            $scope.isSubmitDisabled = true;
        }
    }
    $scope.cancel = function() {
        $state.go("login")
    }
    $scope.regFunction = function(user) {
        $http.post('/register', user)
            .then(function(res) {
                if (res) {
                    window.alert("Registration Successful")
                    $state.go('login');
                }

            })
    }
})
})();