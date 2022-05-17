const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port',4000);
app.set('views',path.join(__dirname,'ui/html'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middleware

//routs
app.get('/', function (req, res) {
    res.render('login.html')
})
  
app.listen(app.get('port'));