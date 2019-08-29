/*
http://localhost:8080/quotes
*/

var express = require('express');
var app = express();
var cors = require('cors'); //http://stackoverflow.com/a/21622564/3957754

var response = {
 "idForm": "F105",
 "description": "Fix data #105",
 "submitEndpoint": "http://localhost:5000/submit",
 "parameters" : [
   {
     "key":"name",
     "label":"nombre del empleado",
     "type":"input",
   },
   {
     "key":"lastname",
     "label":"apellido del empleado",
     "type":"input",
   },
   {
     "key":"job",
     "label":"trabajo del empleado",
     "type":"textArea",
   }
 ]
}

app.use(express.bodyParser());

app.use(cors());

app.get('/ui/dynamic', function(req, res) {
  res.json(response);
});

app.post('/submit', function(req, res) {
  console.log(req.body);
  res.json({"status":"success"});
});

app.listen(process.env.PORT || 5000);
