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

.controller('CommunityCtrl', function($scope, $location, $ionicModal, $ionicLoading, $timeout) {
  $scope.data = [];
  $scope.goToAdd = function() { 
    $scope.modal.show();
  }

  $scope.closeAdd = function() {
    $scope.modal.hide();
  }
// Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/add-community.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.saveCommunity = function() {
    $ionicLoading.show({
      template: '<ion-spinner icon="android"></ion-spinner>'
    });
    $timeout(function() {
      $ionicLoading.hide();
      $scope.modal.hide();
    }, 1500);
  }

  $scope.openFileDialog = function() {
    ionic.trigger('click', { target: document.getElementById('file') });
  }

})

.controller('CommunityDetailCtrl', function($scope, $stateParams) {
  $scope.data = {
    title : $stateParams.name
  }
})

.controller('AddCommunityCtrl', function($scope, $ionicPopup, $ionicLoading, $timeout, $location) {
  $scope.data = [];
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

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('HomeCtrl', function($scope, $stateParams) {
  
})
.controller('TaskCtrl', function($scope, $stateParams, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $(document).on('click', '.cal-highlight-event', function() {
    $scope.modal.show();
  })
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

}).directive('calendar', ['$compile', function ($compile) {

  var monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  var days = ['s', 'm', 't', 'w', 't', 'f', 's'];

  var isLeapYear = function (year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  };

  var daysInMonth = function (date) {
    return [31, (isLeapYear(date.getYear()) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth()];
  };

  var formatDateHeading = function (date) {
    var m = monthNames[date.getMonth()];
    return m.charAt(0).toUpperCase() + m.slice(1) + ' ' + date.getFullYear();
  };

  var currentDate = new Date();

  function getTemplate(month, year, dates) {

    var month = ((isNaN(month) || month == null) ? currentDate.getMonth() + 1 : month) - 1,
      year = (isNaN(year) || year == null) ? currentDate.getFullYear() : year,
      firstDay = new Date(year, month, 1),
      startDay = firstDay.getDay(),
      monthLength = daysInMonth(firstDay),
      heading = formatDateHeading(firstDay);

    if (!dates || !dates.length) dates = [currentDate.getDate()];

    var tpl = [
      '<div class="cal">',
      '<table class="cal">',
      '<tr><th colspan="7">' + heading + '</th></tr>',
      '<tr>'];

    days.forEach(function (day) {
      tpl.push('<td class="cal-head">' + day.toUpperCase() + '</td>');
    });
    tpl.push('</tr>');

    var day = 1,
      rows = Math.ceil((monthLength + startDay) / 7);

    for (i = 0; i < rows; i++) {
      var row = ['<tr>'];
      for (j = 0; j < 7; j++) {
        row.push('<td>');
        if (day <= monthLength && (i > 0 || j >= startDay)) {
          if (day == 30 || day == 31) {
            row.push('<div class="cal-day cal-highlight-event" data-cal="' + year + '/' + month + '/' + day + '">');
          } else if (dates.indexOf(day) != -1)  {
            row.push('<div class="cal-day cal-highlight" data-cal="' + year + '/' + month + '/' + day + '">');
          } else if (dates.indexOf(day) == -1){
            row.push('<div class="cal-day" data-cal="' + year + '/' + month + '/' + day + '">');
          }
          row.push(day + '</div>');
          day++;
        }
        row.push('</td>');
      }
      row.push('</tr>');
      tpl.push(row.join(''));
    }
    tpl.push('</table></div>');

    return tpl.join('');
  }

  return {
    restrict: 'A',
    replace: true,
    link: function ($scope, $element, attrs) {
      $element.html(getTemplate(parseInt(attrs.month), parseInt(attrs.year), []));
      $compile($element.contents());
    }
  };
}]);;
