var express = require('express');
var router = express.Router();


var landmarksCtrl = require('../controllers/landmarks');

router.get('/', landmarksCtrl.index);

module.exports = router;
