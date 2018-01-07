'use strict';
(function() {
    angular.module('myApp')

    .controller('editCtrl', function($scope, $state, $http) {
        var role = localStorage.getItem('authUser');
        if (!role) {
            $state.go('pages')
        }
        $scope.cancel = function() {
            $state.go('userdetails')
        }
        var taskID = { taskID: $state.params.taskID };
        var no = taskID.taskID;

        $http.post('/getUserData', taskID).then(function(response) {
            if (response.status == 200) {
                console.log(response)

                $scope.user = response.data[0];
            }
        })
        $scope.editFunction = function(user) {
            var firstname = user.firstname;
            var lastname = user.lastname;
            var username = user.username;
            var email = user.email;
            var data = { firstname, lastname, username, email, no }
            $http.post('/editUser', data)
            .then(function(response) {
                if (response) {
                    window.alert('Details Updated')
                    $state.go('userdetails')
                }
            })
        }
    })
    .controller('editpageCtrl', function($scope, $state, $http, $modal, $rootScope) {
        var role = localStorage.getItem('authUser');
        if (role != 'admin') {
            $state.go('editpages')
        }

        $scope.useAccordion = function(){
            console.log('opening pop up');
            var modalInstance = $modal.open({
                templateUrl: 'allpages/accordion.html',
                controller: 'editpageCtrl'
            });
        }
    
    $scope.cancel = function() {
        $state.go('allpages')
    }
    var ID = { ID: $state.params.ID };
    var no = ID.ID;

    $http.post('/getPageData', ID).then(function(response) {
        if (response.status == 200) {
            $scope.user = response.data[0];
        }
    })


     $scope.groups = [];
        $scope.groupData = {
            header: "Type Your Header",
            content: "Type Your Content"
        };
        $scope.groups.push($scope.groupData);

        $scope.addItem = function() {
            var Data = {
                header: "Type Your Header",
                content: "Type Your Content"
            };
            $scope.groups.push(Data);
        };

        $scope.deleteItem = function(index, groups){
            groups.splice(index,1);
        }

        $rootScope.newDatas = [];
        $scope.applyItem = function(groups){
            console.log(groups);
            $rootScope.newDatas.push(groups);
        }

        $scope.close = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.editPage = function() {
            console.log($scope.user)
        $http.post('/editpage', $scope.user)
        .then(function(response) {
            if (response) {
                window.alert('Details Updated')
                $state.go('pages')
            }
        })
    }

   
})
})
();