'use strict';
const myModule = require("./mymodule");

myModule(process.argv[2], process.argv[3], function(err, data){
    if (err){
        return console.log(err);
    }
    data.forEach(d =>{
        console.log(d);
    });
});