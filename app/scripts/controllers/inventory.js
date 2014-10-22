'use strict';
/**
 * @ngdoc function
 * @name talkreserveApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('talkreserveApp')
.constant('FIREBASE_URI', 'https://talkreserve.firebaseio.com/')
  .controller('inventoryCtrl',  function ($scope, fbutil) {
    
    


    
    // synchronize a read-only, synchronized array of messages, limit to most recent 10
  

    $scope.products = fbutil.syncArray('products', {limit: 20});
    

    // provide a method for adding a product
    $scope.addProduct = function(newProduct) {
        
        //push a message to the end of the array
        $scope.products.$add({
          item: newProduct.item,
          style: newProduct.style, 
          price: newProduct.price,
          number: newProduct.number,
          origin: newProduct.origin
          
        })

    };

// 				$scope.getTotal = function(){
//     var total = 0;
//     for(var i = 0; i < $scope.cart.products.length; i++){
//         var product = $scope.cart.products[i];
//         total += (product.price * product.quantity);
//     }
//     return total;
// }

 $scope.total = function() {
 				
 				var price= $scope.product.price;
 				var number= $scope.product.number;
 				var total = (price + number)
 	            // var price = $scope.products.price;
              //   var number = $scope.products.number;	
                return total;
            };


    //push a message to the end of the array
    $scope.deleteProduct = function(index){
      $scope.products = fbutil.syncArray('products');
      $scope.products.$remove(index, 1);
    }


 });

  






