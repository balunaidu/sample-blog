'use strict';
(function() {
    var app = angular.module('myApp', ['ngMaterial', 'ui.bootstrap', 'ui.router', 'textAngular']);


    app.run(function($rootScope, $state, $transitions) {
        $transitions.onSuccess({}, function($transition) {
            if (localStorage.getItem('authToken')) {
                $rootScope.isLoggedin = true;
                $rootScope.isLoggedOut = true;
                var role = localStorage.getItem('authUser')
                if (role == 'admin') {
                    $rootScope.isAdmin = true;
                } else if (role != 'admin') {
                    $rootScope.isAdmin = false;
                }
            } else if (!localStorage.getItem('authToken')) {
                $rootScope.isLoggedOut = false;
                $rootScope.isLoggedin = false;
            }
        });
    })

    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'admin/login.html',
            controller: 'loginCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'admin/register.html',
            controller: 'regCtrl'
        })
        .state('userdetails', {
            url: '/userdetails',
            templateUrl: 'admin/userdetails/userdetails.html',
            controller: 'userdetailsCtrl'
        })
        .state('pages', {
            url: '/pages',
            templateUrl: 'allpages/pages/pages.html',
            controller: 'pagesCtrl'
        })
        .state('newpages', {
            url: '/newpages',
            templateUrl: 'allpages/newpages/newpages.html',
            controller: 'newpagesCtrl'
        })
        .state('contents', {
            url: '/contentsofpage/:ID',
            templateUrl: 'allpages/contents/contents.html',
            controller: 'contentsCtrl'
        })
        .state('pageDetails', {
            url: "/pageDetails/:ID",
            templateUrl: 'allpages/pages/pageDetails.html',
            controller: 'pageDetailsCtrl'
        })
        .state('allpages', {
            url: '/allpages',
            templateUrl: 'allpages/allpagedetails.html',
            controller: 'allpageCtrl'
        })
        .state('popup', {
            url: '/popup',
            templateUrl: 'allpages/popup.html',
            controller: 'popupCtrl'
        })
        .state('accordion', {
            url: '/accordion',
            templateUrl: 'allpages/accordion.html',
            controller: 'AccordionDemoCtrl'
        })
        .state('editUser', {
            url: "/editUser",
            params: {
                taskID: null
            },
            templateUrl: 'admin/edit/edit.html',
            controller: 'editCtrl'
        })
        .state('editpage', {
            url: "/editpage/:ID",
            templateUrl: 'admin/edit/editpage.html',
            controller: 'editpageCtrl'
        })
        $urlRouterProvider.otherwise('login');
    })
.directive('fileUpload', function() {
    return {
      scope: true, //create a new scope
      link: function(scope, el, attrs) {
        var docType = attrs.docType;
        el.bind('change', function(event) {
          var files = event.target.files;
          //iterate files since 'multiple' may be specified on the element
          for (var i = 0; i < files.length; i++) {
            //emit event upward
            scope.$emit("fileSelected", { file: files[i], "docType": docType });
          }
        });
      }
    };
  })
})();