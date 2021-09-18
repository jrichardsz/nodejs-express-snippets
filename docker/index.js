var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('Hell , its about time!!');
});

app.listen(process.env.PORT || 8080);
