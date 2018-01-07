'use strict';
(function() { 
    angular.module('myApp')

    .controller('allpageCtrl', function($scope, $http, $state, AuthServ) {
        if (localStorage.getItem('authUser')) {
        $state.go('allpages');
    }
    $scope.cancel = function(){
        $state.go('allpages')
    }
    $scope.addPages = function() {
        $state.go('newpages')
    }      

         AuthServ.contents()
        .then(function(datas) {
            console.log(datas)
            $scope.datas = datas;
        })
        $scope.deletePage = function(data) {
            console.log(data);
        $http.post('/todeletepages',data)
            .then(function(response) {
                window.alert("Page is Deleted")
                $state.go("allpages")
            })
    }
})
})
();