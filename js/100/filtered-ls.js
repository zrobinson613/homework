"use strict";

const fs = require("fs");

fs.readdir(process.argv[2], function callback(err, list) {

    list.forEach(f => {
        if(f.endsWith(`.${process.argv[3]}`)){
        console.log(f);
    }
});
}); 