var express = require("express");
var router = express.Router();

var clickerCtrl = require('../controllers/clicker');

router.get('/', clickerCtrl);


module.exports = router
