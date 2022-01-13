(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunch = '';

    $scope.lunchCount = function ($scope.lunch) {
        lunches = $scope.lunch.split(',');
        return lunches.length;
    };

    
};

})();