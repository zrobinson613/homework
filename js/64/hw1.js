window.myApp = window.myApp || {};

window.myApp.Utils = (function (kishkes) {
    'use strict';

    kishkes.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursady', 'Friday', 'Saturday'];

    kishkes.getDayNameArrow = a => kishkes.days[a - 1];

    kishkes.getDayNumberArrow = b => kishkes.days.findIndex(m => m.toLowerCase() === b.toLowerCase()) + 1;


    return kishkes;

})(window.myApp.Utils || {});