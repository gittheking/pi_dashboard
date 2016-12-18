require('dotenv').config({silent: true});
// const { app, BrowserWindow } = require('electron');
const express                = require('express');
const logger                 = require('morgan');
const path                   = require('path');
const url                    = require('url');

// let win;

const home       = require('./routes/home');
const train      = require('./routes/train');
const music      = require('./routes/music');
const weather    = require('./routes/weather');

const expressApp = express();
const port       = process.env.PORT || 3000;


// function createWindow() {
//   win = new BrowserWindow({ width: 800, height: 502 });
//   win.loadURL(url.format({
//     pathname: path.join(__dirname, 'dist/index.html'),
//     protocol: 'file',
//     slashes: true,
//   }));
//   // win.webContents.openDevTools();
//   win.on('close', () => win = null);
// }

// app.on('ready', createWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });

// app.on('activate', () => {
//   if (win === null) createWindow();
// });

expressApp.use(express.static(path.join(__dirname, 'dist')));
expressApp.use(logger('dev'));

expressApp.listen(port, () => console.log('Server is listening on port: ', port));

expressApp.use('/', home);
expressApp.use('/train', train);
expressApp.use('/music', music);
expressApp.use('/weather', weather);
expressApp.use('*', express.static(path.join(__dirname, 'dist')));
