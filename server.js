var express = require('express');
var app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


var routes_setter = require('./server/config/routes');
routes_setter(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})
