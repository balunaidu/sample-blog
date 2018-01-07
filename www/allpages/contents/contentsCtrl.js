'use strict';
(function() {
	angular.module('myApp')

	.controller('contentsCtrl', function($http, $scope, $state, AuthServ, $rootScope) {
       
        $rootScope.newDatas = [];
        console.log($rootScope.newDatas)

    $scope.back = function() {
        $state.go("allpages")
    }
    var ID = $state.params.ID;
$scope.Comment = function(Comment){
var data = { Comment,ID}
 $http.post('/comments', data)
            .then(function(response) {
                console.log(response)
                if (response.status === 200) {
                    $scope.datas = response.data;
                    window.alert("Commented Successfully")
                }
            })
}
    AuthServ.contentsByID(ID)
        .then(function(datas) {
            $scope.datas = datas[0];
        })
}
})
})();