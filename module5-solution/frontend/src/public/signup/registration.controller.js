(function () {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
    var reg = this;

    reg.submit = function() {
        console.log('First Name', reg.user.firstname);
        reg.completed = true;

        console.log(MenuService.getMenuItem('l9'));

    }
}

})();