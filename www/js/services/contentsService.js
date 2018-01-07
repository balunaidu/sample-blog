'use strict';
(function() {
    angular.module('myApp')

        .factory('AuthServ', ['$http', AuthServ]);

    function AuthServ($http) {

        function contents() {
            return $http.get('/contentsofpage')
                .then(function(res) {
                    if (res) {
                        var datas = res.data;
                        return datas;
                    }
                })
        }
         

        function contentsByID(ID) {
            var link = '/contentsByID';
            return $http.get(link + '/' + ID)
                .then(function(res) {
                    if (res) {
                        var datas = res.data;
                        return datas;
                    }
                })
        }
        return {
            contents: contents,
            contentsByID: contentsByID
        };

    }
})();