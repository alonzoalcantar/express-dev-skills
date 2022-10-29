var express = require('express');
var router = express.Router();


var landmarksCtrl = require('../controllers/landmarks');


router.get('/', landmarksCtrl.index);

router.get('/new', landmarksCtrl.new);

router.get('/:id', landmarksCtrl.show);

router.get('/:id/edit', landmarksCtrl.edit)

router.post('/', landmarksCtrl.create);

router.delete('/:id', landmarksCtrl.delete);

router.put('/:id', landmarksCtrl.update);

module.exports = router;
