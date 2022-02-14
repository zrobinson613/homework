'use strict';

const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);

let array = buf.toString().split("\n");

console.log(array.length-1);