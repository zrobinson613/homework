const { signedCookie } = require('cookie-parser');
var express = require('express');
var router = express.Router();
const pool = require('../pool');

/* GET home page. */
router.route('/')
.get((req, res, next) =>{
  pool.query('SELECT * FROM  recipes', function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    results.forEach((r=>{
      console.log(/*JSON.stringify(*/r.ingredients);
    }));

    // results.map()
    // console.log(JSON.stringify(results));
    res.send(results);
  });

});

module.exports = router;
