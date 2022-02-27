'use strict';

const connect = require("connect");

const app = connect();

app.use('/home', (req, res, next) => {
    res.write('<h1>Welcome to the home page</h1>');
    next();
});

app.use((req, res, next) => {
    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    req.searchParams = url.searchParams;
    next();
});

app.use(require("./magicWord"));

app.use('/about', (req, res, next) => {
   
      res.end('<h2>Read below to find out more ABOUT us</h2>');  
    
    

});



app.use((req, res, next) => {
    res.end('Goodnight');

});

app.use((error,req, res, next)=>{
    res.end(`You have reached an error - ${error}`);
});


app.listen(80);