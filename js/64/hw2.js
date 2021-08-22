window.myApp = window.myApp || {};

window.myApp.Utils = (function (insides) {
    'use strict';

    insides.stringCaseInsensitiveEquals = (a, b) => a.toLowerCase() === b.toLowerCase();

    insides.stringCaseInsensitiveEquals2 = function (a, b) {
        if (a.toLowerCase() === b.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };

    return insides;
})(window.myApp.Utils || {});