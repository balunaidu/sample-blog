'use strict';
(function(){
    angular.module('myApp')

.controller('userdetailsCtrl', function($rootScope, $scope, $state, $http) {
     $scope.cancel = function() {
        $state.go('pages')
    }
    $http.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
    var role = localStorage.getItem('authUser');
    if (role) {
        $http.get('/userdetails').then(function(res) {
            if (res.status === 200) {
                console.log(res.data)
                $scope.datas = res.data;
            }
        })
    } else {
        $state.go('login')
    }

    $scope.export = function(){
        $("#export").table2excel({
    exclude: ".excludeThisClass",
    name: "Excel",
    filename: "userdetails" //do not include extension
});
    }

    $scope.deleteUser = function(data) {
            console.log(data);
        $http.post('/todeleteuser',data)
            .then(function(response) {
                window.alert("User Details is Deleted")
                $state.go("pages")
            })
    }
})
})();