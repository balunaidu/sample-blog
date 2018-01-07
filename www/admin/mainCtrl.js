'use strict';
(function() {
    angular.module('myApp')

    .controller('mainCtrl', function($scope, $state, AuthServ) {

    $scope.userdetails = function() {
        $state.go('userdetails')
    }
     $scope.allpages = function() {
        $state.go('allpages')
    }

    $scope.logout = function() {
        localStorage.removeItem('authToken')
        $state.go('login')
    }
    $scope.gotoContents = function(data) {
        $state.go('contents', { ID: data.ID })
    };
    AuthServ.contents()
        .then(function(datas) {
            $scope.datas = datas;
        })
})
})
();