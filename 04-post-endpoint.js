// node >10
var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
var PORT = 3000; 

app.use(bodyParser.json());

// curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/post
  
app.post('/post', (req, res) => { 
  console.log(req.body);
  res.send("POST Request Called") 
}) 
  
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
});  
