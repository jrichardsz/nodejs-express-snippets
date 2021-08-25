/*
http://localhost:8080/quotes
*/

var express = require('express');
var app = express();
var cors = require('cors'); //http://stackoverflow.com/a/21622564/3957754
var bodyParser = require('body-parser');

var info = {
  "id":1000,
  "user":"er",
  "job":"god"
}

var infoError = {
  "status":"403",
  "message":"invalid token"
}

var login = {
  "token":"4945c2d5-ee91-4d25-9f21-d67dc2b3f599"
}
var loginError = {
  "status":"401",
  "message":"invalid credentials"
}

var submitResponse = {
  "status":"200",
  "message":"employee was registered"
}
var submitResponseError = {
  "status":"400",
  "message":"employee does not exist"
}

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

//https://raw.githubusercontent.com/jrichardsz/static_resources/master/endpoints/loginEndpoint.png
app.get('/login', function(req, res) {
  console.log("/login");
  var user = req.query.user;
  var password = req.query.password;

  if(user === 'jon' && password === 'doe'){
    res.json(login);
  }else{
    res.json(loginError);
  }

});

//https://raw.githubusercontent.com/jrichardsz/static_resources/master/endpoints/infoEndpoint.png
app.get('/info', function(req, res) {

  console.log("/info");

  var token = req.query.token;

  if(token === login.token){
    res.json(info);
  }else{
    res.json(infoError);
  }

});

//https://raw.githubusercontent.com/jrichardsz/static_resources/master/endpoints/submitEndpoint.png
app.get('/submit/employee', function(req, res) {

  console.log("/submit/employee:"+req.query.id);

  var idEmployee = req.query.id;

  if(idEmployee === ""+info.id){
    res.json(submitResponse);
  }else{
    res.json(submitResponseError);
  }
});

app.listen(process.env.PORT || 5000);
