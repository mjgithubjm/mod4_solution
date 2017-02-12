(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  var allItems = this;
  allItems.items = items;
  console.log(allItems);
}

})();
