window.app = window.app || {};

window.app.createCounter = (function (insides) {
    'use strict';

    let numberOfCounters = 0;

    insides = function () {
        numberOfCounters++;
        let theCounter = 0;
        return {
            increment: () => theCounter++,
            getCounter: () => theCounter,
        };
    };

    insides.getNumberOfCounters = () => numberOfCounters;

    return insides;


})(window.app.createCounter || {});

// SL - nice

