var express = require('express');
var router = express.Router();


var landmarksCtrl = require('../controllers/landmarks');


router.get('/', landmarksCtrl.index);

router.get('/new', landmarksCtrl.new);

router.get('/:id', landmarksCtrl.show);


module.exports = router;
