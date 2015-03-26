angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CommunityCtrl', function($scope, $location) {
  $scope.data = [];
  $scope.goToAdd = function() {
    $location.path('app/add-community');

  }

})

.controller('CommunityDetailCtrl', function($scope, $stateParams) {
  $scope.data = {
    title : $stateParams.name
  }

})

.controller('AddCommunityCtrl', function($scope, $ionicPopup, $ionicLoading, $timeout, $location) {
  $scope.data = [];
  $scope.saveCommunity = function() {
    $ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    });
    $timeout(function() {
      $ionicLoading.hide();
      $location.path('app/community');
    }, 1500);
  }
})

.controller('PeopleCtrl', function($scope, $location, $ionicModal) {
  $scope.data = [];
  
  $scope.goToAdd = function() {
    $location.path('app/add-community');
  }

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/seek-help.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeMap = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.showMap = function() {
    $scope.modal.show();
  };

  $scope.closeHelp = function() {
    $scope.modal2.hide();
  };

  $scope.seekhelp = function() {
    $scope.modal2.show();
  }

})




/*.controller('PlaylistsCtrl', function($scope, $ionicPopup, $ionicLoading) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.showConfirm = function() {
   $ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>',
      duration : 2000
    });
 };
})*/

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('SearchCtrl', function($scope, $stateParams, $ionicPopup, $mdToast) {
  
  $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };
  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };
  $scope.showCustomToast = function() {
    $mdToast.show({
      template: 'al',
      hideDelay: 6000,
      position: $scope.getToastPosition()
    });
  };
  
  $scope.closeToast = function() {
    $mdToast.hide();
  };

  $scope.todos = [
      {
        face : 'img/car.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'img/car.jpg',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      }
    ];

     $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

$scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.delete = function(item) {
    var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm',
     template: 'Do you want to remove this item?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       $scope.items.splice($scope.items.indexOf(item), 1);
     }
   });

    
  };
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 }  
  ];

});
