const Landmarks = require('../models/landmarks');


module.exports = {
    index
};


function index(req, res) {
    res.render('landmarks/index',{
        landmarks: Landmarks.getAll()
    });
}