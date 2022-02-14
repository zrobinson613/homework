'use strict';

const fs = require('fs');


function getNumber(callback) {

    fs.readFile(process.argv[2], function x(err, data) {
        let buf = data.toString();
        let array = buf.split("\n");
        callback(array.length -1);
    });    
}

function print (par){
    console.log(par);
}

getNumber(print);
