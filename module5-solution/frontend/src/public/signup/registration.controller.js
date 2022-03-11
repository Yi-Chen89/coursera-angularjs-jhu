(function () {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

function RegistrationController() {
    var reg = this;

    reg.submit = function() {
        console.log('First Name', reg.user.firstname);
    }
}

})();