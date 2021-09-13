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

// SL - nice - app.counter stuff a little more complex then needed for this example...


