'use strict';

// let d = new Date();

// let hours = d.getHours();
// let minutues = d.getMinutes();
// let seconds = d.getSeconds();


/*const clock = document.getElementById('clock');*/
const clock = document.createElement('div');
const span = document.createElement('span');

// span.innerText = hours + ":" + minutues + ":" + seconds;


function setTime() {

    let d = new Date();

    let hours = d.getHours();
    let minutues = d.getMinutes();
    let seconds = d.getSeconds();

    if (seconds > 9) {
        span.innerText = hours + ":" + minutues + ":" + seconds;
    }
    else {
        span.innerText = hours + ":" + minutues + ":0" + seconds;
    }

    // zr - add 0s for minutes and hours
}

function setTime2() {

    //zr - get the date once and make three for loops




setInterval(setTime2, 1000);



clock.appendChild(span);
document.body.appendChild(clock);


function createClock() {

    const clock = document.createElement('div');
    const span = document.createElement('span');

    function setTime() {

        let d = new Date();

        let hours = d.getHours();
        let minutues = d.getMinutes();
        let seconds = d.getSeconds();

        if (seconds > 9) {
            span.innerText = hours + ":" + minutues + ":" + seconds;
        }
        else {
            span.innerText = hours + ":" + minutues + ":0" + seconds;
        }

        // zr - add 0s for minutes and hours
    }

    setInterval(setTime, 1000);

    clock.appendChild(span);
    document.body.appendChild(clock);
}

// createClock();
// createClock();
// createClock();