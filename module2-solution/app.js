(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };

    toBuy.list = ShoppingListCheckOffService.getToBuyList();

};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
    var bought = this;

    bought.list = ShoppingListCheckOffService.getBoughtList();

};


function ShoppingListCheckOffService () {
    var service = this;

    // list of to buy items, pre-populated with 5 items
    var toBuy = [
        {
            name: 'apple',
            quantity: '2'
        },
        {
            name: 'pear',
            quantity: '2'
        },
        {
            name: 'strawberry',
            quantity: '10'
        },
        {
            name: 'blueberry',
            quantity: '50'
        },
        {
            name: 'yogurt',
            quantity: '1'
        },
    ];

    // list of bought items
    var bought = [];

    service.buyItem = function (itemIndex) {
        var item = toBuy[itemIndex];
        toBuy.splice(itemIndex, 1);
        bought.push(item);
    };

    service.getToBuyList = function () {
        return toBuy;
    };

    service.getBoughtList = function () {
        return bought;
    };

};
    
})();