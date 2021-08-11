'use strict'

function myEvery(array, test) {

    let pass = true;

    array.forEach(y => {

        if (!test(y)) {
            pass = false;
            // why can't I do return false here?
        }
    });

    return pass;
}

let array1 = ['a', 'b', 'c'];
let array2 = ['a', 'B', 'c'];
let array3 = ['A', 'B', 'C'];

console.log(myEvery(array1, q => q === q.toLowerCase()));
console.log(myEvery(array1, function (a) {
    return a === a.toLowerCase();
}));

console.log(array1.every(q => q === q.toLowerCase()));

function mySome(array, test) {
    let pass = false;

    array.forEach(x => {
        if (test(x)) {
            pass = true;
            //break; this didn't work
        }

    });
    return pass;
}

console.log(mySome(array3, q => q === q.toLowerCase()));
console.log(array2.some(i => i === i.toLowerCase()));

function onlyIf(array, test, action) {

    array.forEach(x => {
        if (test(x)) {
            action();
        }
    });
}

function passedTheTest() {
    console.log('Passed the Test!');
    // how can I get it to print out the number of times passed?
}

onlyIf(array2, q => q === q.toLowerCase(), passedTheTest);
// not sure if this is right... it didn't work if I passed in passedTheTest()



// array1.forEach(p => {
//         if (test(p)){
//             passedTheTest(); 
//         }
// });
// I know this isn't quite right... 


function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 8));

// function getMultiplier(){
//     return multiply(x,y);
// } why doesn't this work?

function getMultiplier() {
    return function (x, y) {
        return x * y;
    };
}

let multiplier2 = getMultiplier();
console.log(multiplier2(8, 4));

function getMultiplier() {
    return function (x, y) {
        return x * y;
    };
}

function getMultiplier2(x) {
    return function (y) {
        return x * y;
    };
}

let multiplyby5 = getMultiplier2(5);
console.log(multiplyby5(10));

let multiplyby4 = getMultiplier2(4);
console.log(multiplyby4(6));