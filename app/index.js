require('../main.scss');
require('../main.css');
var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World- -我再次修噶-  --</h1>';
app.appendChild(sub());
document.body.appendChild(app);