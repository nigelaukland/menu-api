cheesopedia.factory('simpleFactory', function () {
    var cheeses = [
        {
            name: 'Adelost',
            type: 'Blue'
        },
        {
            name: 'Brie',
            type: 'Soft'
        },
        {
            name: 'Cheddar',
            type: 'Hard'
        },
        {
            name: 'Davidstow',
            type: 'Hard'
        },
        {
            name: 'Explorateur',
            type: 'Soft'
        }
    ];
    
    var factory = {};
    factory.getCheeses = function () {
        return cheeses;
    };
    factory.postCheese = function (newCheese) {};
    return factory;
});