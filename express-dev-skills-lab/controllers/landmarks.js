const Landmarks = require('../models/landmarks');


module.exports = {
    index,
    show,
    new: newLandmark,
    create
};


function index(req, res) {
    res.render('landmarks/index', {
        landmarks: Landmarks.getAll()
    });
}


function show (req, res) {
    res.render('landmarks/show', {
        landmarks: Landmarks.getOne(req.params.id),
      });
    }


function newLandmark (req, res) {
    res.render('landmarks/new')
}


function create (req, res) {
//   console.log(req.body);
  Landmarks.create(req.body);
  res.redirect('/landmarks');
}