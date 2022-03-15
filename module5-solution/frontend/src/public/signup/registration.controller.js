(function () {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
    var reg = this;

    reg.submit = function() {
        reg.completed = true;

        if (reg.user.fav) {
            MenuService.getMenuItem(reg.user.fav)
            .then((resolvedValue) => {
                reg.content = resolvedValue;
            });
        } else {
            reg.content = 'You did not specify a favorite dish.'
        }

    }
}

})();