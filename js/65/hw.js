(function () {
    'use strict';

    const startButton = document.getElementById('start');
    startButton.addEventListener('click', myFunction);

    let foo;

    function myFunction() {


        foo = setInterval(changeColor, 1000);


    }

    //let i = 0;

    function changeColor() {
        let a = Math.floor(Math.random() * 256) + 1;
        let b = Math.floor(Math.random() * 256) + 1;
        let c = Math.floor(Math.random() * 256) + 1;
        document.body.style.backgroundColor = `rgb(${a},${b},${c})`;

        // const colors = ['red', 'blue', 'orange','white','pink'];
        // //document.body.style.backgroundColor = colors[0];
        // document.body.style.backgroundColor = colors[i++];
        // if( i=== 4){
        //     i = 0;
        // } 

    }

    const stopButton = document.getElementById('stop');
    stopButton.addEventListener('click', () => clearInterval(foo));
})();