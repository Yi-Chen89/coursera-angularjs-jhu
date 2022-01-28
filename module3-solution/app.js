(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiEndpoint', 'https://davids-restaurant.herokuapp.com/menu_items.json');


FoundItems.$inject = [];
function FoundItems () {
    var ddo = {
        restrict: 'E',
        templateUrl: 'searchList.html',
        scope: {
            foundItems: '<',
            onRemove: '&'
        },
        controller: MenuSearchDirectiveController,
        controllerAs: 'dirCtrl',
        bindToController: true
    };

    return ddo;
};

function MenuSearchDirectiveController () {
    var ctrl = this;
  
};


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
    var ctrl = this;

    ctrl.searchTerm = '';

    ctrl.getFoundItems = function () {
        var result = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        console.log(result);
        result.then(function (result) {
            ctrl.found = result;
        });
    };

    ctrl.removeItem = function (itemIndex) {
        ctrl.found.splice(itemIndex, 1);
    };

};


MenuSearchService.$inject = ['$http', 'ApiEndpoint'];
function MenuSearchService ($http, ApiEndpoint) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: 'GET',
            url: ApiEndpoint
        })
        .then(function (response) {
            // process result and only keep items that match
            var foundItems = [];

            if (searchTerm !== '') {
                for (var i = 0; i < response.data.menu_items.length; i++) {
                    var description = response.data.menu_items[i].description.toLowerCase();

                    if (description.indexOf(searchTerm) !== -1) {
                        foundItems.push(response.data.menu_items[i]);
                    };
                };
            };

            // return processed items
            return foundItems;
        });
    };

};


})();