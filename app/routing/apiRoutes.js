var path = require('path');
var friends = require('../data/friends');



// contain two routes
module.exports = function(app) {
    // a GET route w the URL /api/friends. This will be used to display JSON of all possible friends
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // a POST routes /api/friends this will be used tp handle incoming survey results
    // this route will also be used to handle the compatibility logic
    app.post('/api/friends', function(req, res) {

    });
};