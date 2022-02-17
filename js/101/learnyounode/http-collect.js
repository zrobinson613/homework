'use strict';

const http = require("http");
const bl = require("bl");

http.get(process.argv[2], response =>{
    response.pipe(bl((err, data)=>{
        console.log(data.toString().length);
        console.log(data.toString());
    } ));
});