require('dotenv').config({silent: true});
const express                = require('express');
const logger                 = require('morgan');
const path                   = require('path');
const url                    = require('url');

const home       = require('./routes/home');
const train      = require('./routes/train');
const music      = require('./routes/music');
const weather    = require('./routes/weather');

const expressApp = express();
const port       = process.env.PORT || 3000;

expressApp.use(express.static(path.join(__dirname, 'dist')));
expressApp.use(logger('dev'));

expressApp.listen(port, () => console.log('Server is listening on port: ', port));

expressApp.use('/', home);
expressApp.use('/train', train);
expressApp.use('/music', music);
expressApp.use('/weather', weather);
expressApp.use('*', express.static(path.join(__dirname, 'dist')));
