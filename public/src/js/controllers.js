// controller.js
angular.module('app')
    .controller('registerCtrl', registerCtrl);

var apiUrl = 'http://localhost:3000';

registerCtrl.$inject = ['$scope', '$http'];
function registerCtrl($scope, $http) {
    $scope.user = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    $scope.createAccount = function () {
        $http.post(apiUrl + '/register', $scope.user)
            .then(function(success) { console.log(success) }, function(error) { console.log(error) })
    };
}