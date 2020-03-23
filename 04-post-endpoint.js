/*
http://localhost:8080/companies
*/

var express = require('express');
var app = express();
var cors = require('cors'); //http://stackoverflow.com/a/21622564/3957754
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.post('/query', function(req, res) {
  console.log(req.body);
  res.json({"status":"success"});
});

app.listen(process.env.PORT || 8080);
