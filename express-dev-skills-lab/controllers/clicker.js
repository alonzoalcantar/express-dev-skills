const clicker = require('../models/clicker');


const index = (req, res) => {
    res.render('clicker/index',{
        clicked: clicker.timesClicked
    })
}




module.exports = index;