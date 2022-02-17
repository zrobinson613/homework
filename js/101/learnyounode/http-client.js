'use strict';


const http = require("http");

http.get(process.argv[2], function callback(response) {

    response.setEncoding("utf-8"); //this is instead of toString() later
    response.on("data", (data) => {

        console.log(data);

    });
    // response.on("data", console.log); // this does same thing
});