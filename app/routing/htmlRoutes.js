var path = require('path');

module.exports = function(app) {
    // include a GET route to /survey which should display the survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // a default, catch-all route that leads to home.html which displays homepage
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};