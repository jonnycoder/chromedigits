angular.module('appMobile')
.controller('AuthCtrl', function ($scope, $rootScope, User, Patient, $window, $location, $filter) {

    $rootScope.section.name = "Welcome";

    $scope.needCode = false;
      
    ///////////////////////////opticNumericLimit///////////////////////
    // Filds that maintain state from the UI
    $scope.userAuthPin = "";
    $scope.userAuthPinEnter = "";
    $scope.userAuthPinConfirm = ""
            
            
    // Shadow fields that store the numeric field as a Char string
    // "*Chars" fields used for the opticNumericLimit directive
    $scope.userAuthPinChars = "";
    $scope.userAuthPinEnterChars = "";
    $scope.userAuthPinConfirmChars = "";
    ///////////////////////////opticNumericLimit///////////////////////
 

});
