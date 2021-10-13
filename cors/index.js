/*
http://localhost:8080/companies
*/

var express = require('express');
var app = express();
var cors = require('cors'); //http://stackoverflow.com/a/21622564/3957754
var bodyParser = require('body-parser');

var originals = {
  "results": [{
    "backdrop_path": "https://i.ibb.co/g9hVhpd/maestria-educacion.png",
    "first_air_date": "2019-01-11",
    "genre_ids": [35, 18],
    "id": 81356,
    "name": "Maestria de Educación",
    "origin_country": ["GB"],
    "original_language": "en",
    "original_name": "Maestria de Educación",
    "overview": "Inexperienced Otis channels his sex therapist mom when he teams up with rebellious Maeve to set up an underground sex therapy clinic at school.",
    "popularity": 4759.178,
    "poster_path": "https://i.ibb.co/5k9y9hG/poster-maestria-educacion.png",
    "vote_average": 8.4,
    "vote_count": 4450
  }, {
    "backdrop_path": "https://i.ibb.co/QpHsvS0/curso-periodismo.png",
    "first_air_date": "2016-01-25",
    "genre_ids": [80, 10765],
    "id": 63174,
    "name": "Curso de Periodismo",
    "origin_country": ["US"],
    "original_language": "en",
    "original_name": "Curso de Periodismo",
    "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
    "popularity": 1611.28,
    "poster_path": "https://i.ibb.co/PrGc9Pm/poster-curso-periodismo.png",
    "vote_average": 8.5,
    "vote_count": 10402
  }, {
    "backdrop_path": "https://i.ibb.co/866w6fw/usil-curso-dibujo-tecnico.png",
    "first_air_date": "2017-05-02",
    "genre_ids": [80, 18],
    "id": 71446,
    "name": "Curso Dibujo Técnico",
    "origin_country": ["ES"],
    "original_language": "es",
    "original_name": "Curso Dibujo Técnico",
    "overview": "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
    "popularity": 1157.757,
    "poster_path": "https://i.ibb.co/W67Rck1/poster-dibujo-tecnico.png",
    "vote_average": 8.3,
    "vote_count": 14463
  }]
};

var itemDetails = {
  "81356": "https://www.youtube.com/watch?v=hWt2UvdeOXk",
  "63174": "https://www.youtube.com/watch?v=jh2K7h_BOwQ",
  "71446": "https://www.youtube.com/watch?v=_Ck9n-GImzw"
};

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.get('/course/original', function(req, res) {
  res.json(originals);
});

app.get('/preview/details', function(req, res) {
  res.json({"url": itemDetails[req.query.id]});
});

app.listen(process.env.PORT || 8080);
