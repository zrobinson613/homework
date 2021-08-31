window.app = window.app || {};


window.app.counter = (function (insides) { 
    'use strict';

    let theCounter = 0;

    insides.increment = function () {
        theCounter++;
    };

    insides.getCounter = function () {
        return theCounter;
    };

    return insides;

})(window.app.counter || {});


