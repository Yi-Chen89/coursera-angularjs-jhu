// Immediately Invoked Function Expression (IIFE)
(function () {
'use strict';

angular.module('TemplateApp', [])
.controller('TemplateController', TemplateController)
.filter('JSCustom', JSCustomFilter)
.filter('HTMLCustom', HTMLCustomFilter);

TemplateController.$inject = ['$scope', '$filter', 'JSCustomFilter'];
function TemplateController ($scope, $filter, JSCustomFilter) {


};

// custom filter factory function
function JSCustomFilter () {
    return function (input, arg1, arg2) {
        input = input + arg1 + arg2;
        return input
    };
};

function HTMLCustomFilter () {
    return function (input, arg1, arg2) {
        input = input + arg1 + arg2;
        return input
    };
};

})();