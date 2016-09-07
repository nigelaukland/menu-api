'use strict';

cheesopedia.controller('simpleController', function ($scope, simpleFactory) {
    $scope.cheeses = [];
   
    init();

    function init() {
        $scope.cheeses = simpleFactory.getCheeses();
    }
    $scope.addCheese = function () {
        $scope.cheeses.push({
            name: $scope.newCheese.name,
            type: $scope.newCheese.type
        });
    };
});