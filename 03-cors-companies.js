/*
http://localhost:8080/companies
*/

var express = require('express');
var app = express();
var cors = require('cors'); //http://stackoverflow.com/a/21622564/3957754

var companies = {
  "page": 1,
  "per_page": 2,
  "total_pages": 2,
  "total_records": 4,
  "companies": [
    {
      "id": 254822795,
      "name": "Web Star Marketing",
      "time_zone": "Eastern Time (US & Canada)",
      "time_zone_utc_offset": -14400,
      "disabled_at": "2012-06-23T19:14:03Z",
      "created_at": "2012-06-20T19:14:03Z",
      "script_url": "//cdn.callrail.com/companies/291183543/f6b60be971d552061219/12/swap.js"
    },
    {
      "id": 245874536,
      "name": "Bob's Auto Shop",
      "time_zone": "Eastern Time (US & Canada)",
      "time_zone_utc_offset": -14400,
      "created_at": "2012-06-20T19:18:48Z",
      "disabled_at": null,
      "script_url": "//cdn.callrail.com/companies/291183543/f6b60be971d552061219/12/swap.js"
    }
  ]
};

app.use(express.bodyParser());

app.use(cors());

app.get('/companies', function(req, res) {
  res.json(companies);
});

app.listen(process.env.PORT || 8080);