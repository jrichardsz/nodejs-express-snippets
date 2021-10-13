const express = require('express');
const path = require('path');const app = express();
const port = process.env.PORT || 8080 ;
app.use('/',
  express.static(path.join(__dirname, "site" || proces.env.SITE_FOLDER)),
);
app.listen(port, () => console.log(`server is listening on port ${port}!`));
