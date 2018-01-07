'use strict';
(function() {
    angular.module('myApp')

    .controller('pagesCtrl', function($http, $scope, $state) {
    if (localStorage.getItem('authToken')) {
        $state.go('pages')
    }else {
        $state.go('login')
    }
    
    $scope.back = function() {
        $state.go('userdetails')
    }
})

    .controller('pageDetailsCtrl', function($http, $scope, $state, AuthServ) {

    var ID = $state.params.ID;
    AuthServ.contentsByID(ID)
        .then(function(datas) {
            $scope.user = datas[0];
        })

    $scope.getPageDetails = function(user) {
        var pagename = user.pagename;
        var pagecontent = user.pagecontent;
        var data = { pagename, pagecontent, ID }
        $http.post('/pageDetails', data)
            .then(function(response) {
                if (response) {
                    window.alert('Page Details Updated')
                    $state.go('pages')
                }
            })
    }
    $scope.cancel = function() {
        $state.go("pages")
    }

});
})();