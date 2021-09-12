(function () {
    'use strict';


    let messageBox = document.getElementById('messageBox');
    let button = document.getElementsByClassName('buttons');

    function show(element, text) {
        element.style.display = 'block';
        element.innerHTML = text;
    }


    // show(messageBox, 'hi');

    button.addEventListener('click', () => {
        messageBox.style.display = 'none';
    });






    let practice = function (element) {

        return {
            show: function (text) {
                element.style.display = 'block';
                element.innerHTML = text;
            }
        };
    };

    let messageBox5 = practice(messageBox);

    messageBox5.show();



    // messageBox.show();
})();