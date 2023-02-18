// Models
const User = require('../models/User');

class HomeController {
    //[GET] /
    home(req, res) {
        User.find({}, function (err, users) {
            if (!err) {
                res.json(users);
                return;
            }
            res.status(400).json({ error: 'ERROR!!!' });
        });
        // res.send('home');
    }

    //[GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new HomeController();
