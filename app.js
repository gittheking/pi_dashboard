const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const home    = require('./routes/home');
const train   = require('./routes/train');

const app     = express();
const port    = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(logger('dev'));

app.listen(port, () => console.log('Server is listening on port: ',port));

app.use('/',home);
app.use('/train',train);