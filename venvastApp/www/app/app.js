// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function ($ionicPlatform, $ionicTabsDelegate, $rootScope) {
    $ionicPlatform.ready(function () {
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (toState.name == 'home.catagory') {
            $ionicTabsDelegate.showBar(false);
        } else {
            $ionicTabsDelegate.showBar(true);
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider
        .state('home', {
            abstract:true,
            url: '/home',
            templateUrl: "app/home/home.html",
            //controller: 'homeCtrl'
        })
        .state('home.main', {
            url: "/main",
            views: {
                "tab-events": {
                    templateUrl: "app/home/main.html"
                }
            }
        })
        .state('home.deals', {
            url: "/deals",
            views: {
                "tab-deals": {
                    templateUrl: "app/home/deals.html"
                }
            }
        })
        .state('home.catagory', {
            url: "/catagory",
            views: {
                "tab-events": {
                    templateUrl: "app/home/catagory.html",
                    controller: 'eventCtrl'
                }
            }
        })
        .state('home.venues', {
            url: "/venues",
            views: {
                "tab-venues": {
                    templateUrl: "app/home/venues.html"
                }
            }
        })
    .state('app', {
        abstract:true,
        url: '/app',
        templateUrl: 'app/layout/menu-layout.html'
    });

    $urlRouterProvider.otherwise('/home/main')

});
