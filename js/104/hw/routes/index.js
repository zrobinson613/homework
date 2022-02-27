var express = require('express');
var router = express.Router();

let contacts = [
  {
    firstName: "joe",
    lastName: "biden"
  },
  {
    firstName: "kam",
    lastName: "harris"
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {


  res.render('index', {
    title: 'hw!'
  });
});

router.get('/contacts', function (req, res, next) {
  res.render('index', {
    title: 'Contacts',
    contacts: contacts
  });
});

router.get('/api/contacts', function (req, res, next) {
  res.send(contacts);
  /* res.render('index', { 
     title: 'Contacts',
     contacts: contacts
    });*/
});

module.exports = router;
