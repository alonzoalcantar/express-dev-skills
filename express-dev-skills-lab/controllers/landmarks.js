const Landmarks = require('../models/landmarks');


module.exports = {
    index,
    show
};


function index(req, res) {
    res.render('landmarks/index',{
        landmarks: Landmarks.getAll()
    });
}


function show (req,res) {
    res.send('hello here is landmark #' + req.params.id)
}