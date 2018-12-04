angular.module('app')
.controller('registerCtrl', registerCtrl);

registerCtrl.$inject = ['$scope'];
function registerCtrl($scope) {
    $scope.user = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    $scope.createAccount = function() {
        console.log($scope.user);
    };
}