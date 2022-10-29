const Landmarks = require('../models/landmarks');


module.exports = {
    index,
    show,
    new: newLandmark,
    create,
    delete: deleteLandmark,
    edit,
    update
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

function deleteLandmark (req, res) {
    Landmarks.deleteOne(req.params.id);
    res.redirect('/landmarks');
}


function edit(req,res) {
    res.render('landmarks/edit', {
        landmark: Landmarks.getOne(req.params.id)});
}

function update (req, res) {
    Landmarks.updateOne(req.params.id, req.body)
    res.redirect('/landmarks/' + req.params.id);
}