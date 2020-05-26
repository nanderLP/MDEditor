const {ipcMain} = require('electron');
const path = require('path');

ipcMain.on('new', () => {
  console.log('hi');
});
ipcMain.on('load', () => {
  console.log('hi');
});
ipcMain.on('settings', (event) => {
  event.sender.loadFile(path.join(__dirname, '..', 'settings.html'));
});
