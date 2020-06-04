const { ipcMain } = require('electron');
const path = require('path');
const { chooseFile } = require('../utils/chooseFile');

ipcMain.on('start-new', (event) => {
  event.sender.loadFile(path.join(__dirname, '..', '..', 'editor.html'));
});
ipcMain.on('start-load', (event) => {
  global.currentFile = chooseFile();
  event.sender.loadFile(path.join(__dirname, '..', '..', 'editor.html'));
});
ipcMain.on('start-settings', (event) => {
  event.sender.loadFile(path.join(__dirname, '..', '..', 'settings.html'));
});
