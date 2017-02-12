(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];

function MenuDataService($http) {
  var service = this;

  var items = [];

  service.getAllCategories = function () {
   return $http({method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json"),        
      }).then(function (result) {
          
          var allItems = result.data;
          console.log(allItems);
          return allItems;
        });
  };    

  service.getItemsForCategory = function (categoryShortName) {
   return $http({method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName),        
      }).then(function (result) {
          
          var allItems = result.data;          
          console.log(allItems.menu_items);
          return allItems.menu_items;
        });
  };
}

})();

