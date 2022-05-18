const express = require('express');
const app = express();
const path = require('path');
const morgan = require("morgan");

//settings
app.set("port", process.env.PORT || 4000);
app.set('views',path.join(__dirname,'ui'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.use(express.static(__dirname + '/ui'));
//middleware
app.use(morgan("dev"));

//routs
app.use(require('./routes/index'));

//Listen 
app.listen(app.get('port'));