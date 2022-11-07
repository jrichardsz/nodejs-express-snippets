const os = require('os');
const express = require('express');
const app = express();
const path = require('path')
const xssEscape = require('xss-escape');

const multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, "storage"))
  },
  filename: function(req, file, cb) {
    var originalname = xssEscape(file.originalname);
    cb(null, originalname)
  }
})

const upload = multer({
  storage: storage
});

app.post('/upload', upload.single('imageProfile'), function(req, res) {
  const imageProfile = req.file;
  console.log(imageProfile);
  console.log(JSON.stringify(req.body))
  res.send("Ok");
});

app.get('/', async function(req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started at 5000`);
});
