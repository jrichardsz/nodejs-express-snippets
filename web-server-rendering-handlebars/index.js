const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
   res.render('index', req.query)
})

app.listen(port, () => { })
module.exports = app;

//useful to this poc
//https://securitylab.github.com/advisories/GHSL-2021-020-pillarjs-hbs/
