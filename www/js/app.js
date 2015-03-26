// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngMaterial'])

.run(function($ionicPlatform) {
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {  
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html",
        controller: 'SearchCtrl'
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html"  
        }
      }
    }) 

    .state('app.community', {
      url: "/community",
      views: {
        'menuContent': {
          templateUrl: "templates/community.html",
          controller: 'CommunityCtrl'
        }
      }
    }) 

    .state('app.community-details', {
      url: "/community-details/:name",
      views: {
        'menuContent': {
          templateUrl: "templates/community-details.html",
          controller: 'CommunityDetailCtrl'
        }
      }
    }) 


    .state('app.people', {
      url: "/people",
      views: {
        'menuContent': {
          templateUrl: "templates/people-list.html",
          controller: 'PeopleCtrl'
        }
      }
    }) 

    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent': {
          templateUrl: "templates/profile.html",
          controller: 'PeopleCtrl'
        }
      }
    })


    .state('app.add-community', {
      url: "/add-community",
      views: {
        'menuContent': {
          templateUrl: "templates/add-community.html",
          controller: 'AddCommunityCtrl'
        }
      }
    }) 


    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
