var express = require('express');
var path = require('path'); 
var parse = require('body-parser');
var friends = require('./app/data/friends');

var app = express();
// heroku's port OR 3000
var PORT = process.env.PORT || 3000;

app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});