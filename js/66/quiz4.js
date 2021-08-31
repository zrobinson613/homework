(function () {
    'use strict';


    for (let i = 0; i < 10; i++) {
        window.app.counter.increment();
    }

    let myNewCounter1 = window.app.createCounter();
    for (let i = 0; i < 5; i++) {
        myNewCounter1.increment();
    }

    let myNewCounter2 = window.app.createCounter();
    for (let i = 0; i < 15; i++) {
        myNewCounter2.increment();
    }


    console.log('Original counter - window.app.counter.getCounter()', window.app.counter.getCounter());

    console.log('Next counter - myNewCounter1.getCounter()', myNewCounter1.getCounter());

    console.log('Last counter - myNewCounter2.getCounter()', myNewCounter2.getCounter());

}());