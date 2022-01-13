(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunch = '';

    function msgProducer () {
        if ($scope.lunchNum === 0) {
            $scope.lunchMsg = 'Please enter data first';
        } else if ($scope.lunchNum <= 3) {
            $scope.lunchMsg = 'Enjoy!';
        } else {
            $scope.lunchMsg = 'Too much!';
        }
    };

    $scope.lunchCount = function () {
        if ($scope.lunch === '') {
            $scope.lunchNum = 0;
        } else {
            var lunches = $scope.lunch.split(',');
            $scope.lunchNum = lunches.length;
        }
        msgProducer();
    };
    
};

})();