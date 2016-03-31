app.controller('eventCtrl', function ($scope) {
    $scope.pieces = ['RESTRAUNTS', 'LIFESTYLE', 'CLUBS', 'NETWORKING', 'OTHER', 'VENVAST', 'SUPERFAST'];
    $scope.eventnumber = ['X Events'];
    $scope.title = 'LIVE';
})
.controller('NavCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.showMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };
})
.controller('homeCtrl', function ($scope) {
 
    
});