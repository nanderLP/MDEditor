const {ipcMain} = require('electron');
const path = require('path');

ipcMain.on('new', () => {
  // TODO
});
ipcMain.on('load', () => {
});
ipcMain.on('settings', (event) => {
  event.sender.loadFile(path.join(__dirname, '..', 'settings.html'));
});
