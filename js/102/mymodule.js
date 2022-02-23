'use strict';
const fs = require("fs");


module.exports = function (dir, ext, callback) {

    let array = [];
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        }

        list.forEach(l => {
            if (l.endsWith(`.${ext}`)) {
                // console.log(l);
                array.push(l);
            }
        });
        callback(null, array);
    });

    
};