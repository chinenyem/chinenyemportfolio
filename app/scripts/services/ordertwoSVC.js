'use strict';

/**
 * @ngdoc service
 * @name talkreserveApp.orderTwo
 * @description
 * # orderTwo
 * Service in the talkreserveApp.
 */
// angular.module('talkreserveApp')
//   .service('orderTwo', function orderTwo() {
//     // AngularJS will instantiate a singleton by calling "new" on this function

//   });

angular.module('talkreserveApp')
.factory('ordertwoSVC', function () {
    

    
    var items = [];

    var getItems = function() {
        return items;
    };

    var addItem = function (item) {
        items.push(item);
    };

    var updateItem = function (item) {
        // Do nothing... it is already updated locally
    };

    var removeItem = function (item) {
        items.splice(item, 1)
       
    };

    return {
        getItems: getItems,
        addItem: addItem,
        updateItem: updateItem,
        removeItem: removeItem
    }
});
