(function () {
    'use strict';

    // SL - I would use more descriptive param names then "theFunction"
    function myMap(theArray, theFunction) {
        let newArray = [];

        for (let i = 0; i < theArray.length; i++) {
            newArray.push(theFunction(theArray[i]));
        }

        return newArray;
    }

    const numbers = [2, 4, 6];

    // SL - and again here "myFunction" tells me nothing useful.
    function myFunction(num) {
        return num * 2;
    }

    const newArr = myMap(numbers, myFunction);

    console.log('new Array', newArr);
    console.log('original Array', numbers);

}());

// SL - nice