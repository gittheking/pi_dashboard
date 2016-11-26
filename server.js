require('dotenv').config({silent: true});
const express = require('express');
const logger  = require('morgan');
const path    = require('path');

const home    = require('./routes/home');
const train   = require('./routes/train');
const music   = require('./routes/music');
const weather = require('./routes/weather');
const app     = express();
const port    = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'dist')));
app.use(logger('dev'));

app.listen(port, () => console.log('Server is listening on port: ',port));

app.use('/', home);
app.use('/train', train);
app.use('/music', music);
app.use('/weather', weather);
