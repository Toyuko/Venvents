app.controller('eventCtrl', function ($scope) {
    $scope.pieces = ['resturants', 'lifestyle', 'clubs', 'recreation', 'whatever'];
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