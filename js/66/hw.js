(function () {
    'use strict';

    const startButton = document.getElementById('start');
    startButton.addEventListener('click', myFunction);

    let foo;

    let table = document.getElementById('theTable');

    function myFunction() {

        if (!foo) {
            foo = setInterval(changeColor, 1000);
        }

    }

    //let i = 0;

    function changeColor() {
        let a = Math.floor(Math.random() * 256) + 1;
        let b = Math.floor(Math.random() * 256) + 1;
        let c = Math.floor(Math.random() * 256) + 1;
        let newcolor = `rgb(${a},${b},${c})`;
        document.body.style.backgroundColor = newcolor;

        // const colors = ['red', 'blue', 'orange','white','pink'];
        // //document.body.style.backgroundColor = colors[0];
        // document.body.style.backgroundColor = colors[i++];
        // if( i=== 4){
        //     i = 0;
        // } 

        if (table.rows[1].cells[0].innerText === 'no colors') {
            table.deleteRow(1);
        }                             // why can't I do deleteRow() 



        let row = table.insertRow();
        let colorCell = row.insertCell();
        let timeCell = row.insertCell();

        colorCell.innerHTML = document.body.style.backgroundColor.valueOf();

        let now = new Date();

        timeCell.innerHTML = now.toLocaleTimeString();

        row.addEventListener('click', () => {
            document.body.style.backgroundColor = newcolor;
        });

    }

    // let rows = document.querySelectorAll("tr");
    // rows.addEventListener('click', changeColor);



    const stopButton = document.getElementById('stop');
    stopButton.addEventListener('click', () => clearInterval(foo));
})();