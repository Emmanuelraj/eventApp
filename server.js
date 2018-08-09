const express = require('express');

const bodyParser = require('body-parser');

var app = express();

const routes = require('./apiRoutes/routes');


const cors = require('cors');


const events = require('./apiRoutes/events');

const config = require('./config/keys');

const mongoose = require('mongoose');



const passport = require('passport');




mongoose.connect(config.mongoose.mongodbURL);

var db = mongoose.connection;



 db.on('error',function(err)
 {
    console.log('error on db');
 });


db.once('open',function()
{
    console.log('open the connect db');
});



app.use(cors())// cross domains


//middleware of passport
app.use(passport.initialize());
app.use(passport.session());

//
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


routes(app);

events(app);




const port = '3000';


app.listen(port);

console.log('server listen to the port no'+port);
