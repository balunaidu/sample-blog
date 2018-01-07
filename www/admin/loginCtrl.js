'use strict';
(function() {
    angular.module('myApp')

    .controller('loginCtrl', function($scope, $state, $http) {
    if (localStorage.getItem('authToken')) {
        $state.go('pages');
    }
    $scope.isSubmitDisabled = true;
    $scope.isRequires = true;
    $scope.isValid = function(user) {
        if ($scope.myForm.$valid) {
            $scope.isSubmitDisabled = false;
        } else {
            $scope.isSubmitDisabled = true;
        }
    }

    $scope.loginFunction = function(user) {
        $http.post('/login', user)
            .then(function(res) {
                if (res.status == 200) {
                    var status = res.data.status;
                    if (status == 'success') {
                        localStorage.setItem('authToken', res.data.token);
                        localStorage.setItem('authUser', res.data.message);
                        window.alert("You Are Successfully Logged In")
                        $state.go("pages");
                    } else {
                        window.alert("Invalid Username or Password OR Register First")
                    }
                }

            })
    }

})
})
();