(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .service('ShoppingListCheckOffService', function () {
            var service = this;
            service.toBuyList = [
                { name: 'Cookies', quantity: 10 },
                { name: 'Milk', quantity: 2 },
                { name: 'Eggs', quantity: 12 },
                { name: 'Bread', quantity: 1 },
                { name: 'Bananas', quantity: 5 }
            ];
            service.boughtList = [];

            service.buyItem = function (item) {
                var index = service.toBuyList.indexOf(item);
                if (index !== -1) {
                    service.toBuyList.splice(index, 1);
                    service.boughtList.push(item);
                }
            };
        })
        .controller('ToBuyController', ['ShoppingListCheckOffService', function (ShoppingListCheckOffService) {
            var toBuyCtrl = this;
            toBuyCtrl.toBuyList = ShoppingListCheckOffService.toBuyList;

            toBuyCtrl.buyItem = function (item) {
                ShoppingListCheckOffService.buyItem(item);
            };
        }])
        .controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function (ShoppingListCheckOffService) {
            var boughtCtrl = this;
            boughtCtrl.boughtList = ShoppingListCheckOffService.boughtList;
        }]);
})();
