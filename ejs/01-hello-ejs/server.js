var express = require('express');
var app = express();
app.get("/", function(req, res) {
  res.render("hello.ejs");
});
app.listen(2708, function() {
  console.log("server is listening!!!");
});
