'use strict';

const http = require("http");
const bl = require("bl");
let count = 0;
let array = [];

for (let i = 2; i < 5; i++) {

    http.get(process.argv[i], response => {
        response.pipe(bl((err, data) => {
            array[i - 2] = data.toString();
            count++;
            if (count === 3) {
                array.forEach(a => {
                    console.log(a);
                });
            }

        }));


    });
}


