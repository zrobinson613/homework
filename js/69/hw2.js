window.pcs = function (id) {
    'use strict';

    function get(id) {
        return document.getElementById(id);
      }

      function setCss(elem, prop, value) {
        elem.style[prop] = value;
      }

      function getCss(elem, prop) {
        return getComputedStyle(elem)[prop];
      }

      function makeRandColor (elem) {

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        elem.style.color = `rgb(${r}, ${g}, ${b})`;
      }



    const theElem = get(id);

    return{

        flashColors: function(length, speed = 1000){

            let origColor = getCss(theElem, 'color');

            let interval = setInterval(makeRandColor(theElem), speed);

            clearInterval(interval, length);

            setTimeout(setCss(theElem, 'color', origColor), length);


        }
    };
};

window.pcs('test').flashColors(10000,2000);