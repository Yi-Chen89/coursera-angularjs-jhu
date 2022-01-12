(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.result = "";

    $scope.check = function () {
        if ($scope.dishes == "") {
            $scope.result = "Please enter data first";
        } else if (calculateNumberOfDishes($scope.dishes) <= 3) {
            $scope.result = "Enjoy!";
        } else {
            $scope.result = "Too much!";
        }
    };

    function calculateNumberOfDishes(dishes) {
        var dishesList = dishes.split(",");
        var numberOfDishes = dishesList.length; 

        return numberOfDishes
    }

}

})();