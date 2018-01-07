'use strict';
(function() {
    angular.module('myApp')

    .controller('newpagesCtrl', function($http, $scope, $state) {

    $scope.back = function() {
        $state.go('allpages')
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
      $scope.files = [];
        $scope.$on("fileSelected", function(event, args) {
            $scope.$apply(function() {
                $scope.files.push(args.file);
            });
        });

 

        $scope.uploadImage = function() {


        var fd = new FormData();
        for (var i = 0; i < $scope.files.length; i++) {
            fd.append('file' + i, $scope.files[i]);
        }
        //fd.append('userData', angular.toJson(user));
        var request = {
            method: 'POST',
            url: '/uploadFile',
            data: fd,
            headers: {
                'Content-Type': undefined
            },
            transformRequest: angular.identity,
            params: {
                test: 'dadsadasd'
            }
        }
     $http(request).then(function(response) {
            $scope.image = response.data[0].imageName;
            console.log($scope.image)
        }, function(err) {
        });
 }


    $scope.savePage = function(user) {
        user.image = $scope.image;
        console.log(user.image)
        console.log(user)
        $http.post('/newpages', user)
            .then(function(response) {
                console.log(response)
                if (response.status === 200) {
                    $scope.datas = response.data;
                    window.alert("New Page Created")
                    $state.go("allpages")
                }
            })
    }
})
})();