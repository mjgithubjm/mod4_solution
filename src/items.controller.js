(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'items','MenuDataService'];
function ItemsController($stateParams, items, MenuDataService) {
  var allItems = this;
  allItems.items = items;
  console.log(allItems);
}

})();
