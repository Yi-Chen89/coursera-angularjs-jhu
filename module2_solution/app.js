(function () {
'use restrict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyItem = this;

    toBuyItem.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };

    toBuyItem.items = ShoppingListCheckOffService.getToBuy();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtItem = this;

    boughtItem.items = ShoppingListCheckOffService.getBought();
}


function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [{ name: "iPhone", quantity: 1 },
                 { name: "iPad Air", quantity: 1 },
                 { name: "Apple Watches", quantity: 2 },
                 { name: "Apple Watch Bands", quantity: 3 },
                 { name: "AirPods Pro", quantity: 1 }];
    var bought = [];


    service.buyItem = function (itemIndex) {
        bought.push(toBuy[itemIndex]);
        toBuy.splice(itemIndex, 1);
    };


    service.getToBuy = function () {
        return toBuy;
    };

    service.getBought = function () {
        return bought;
    };

}


})();