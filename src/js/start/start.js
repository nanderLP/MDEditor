const {ipcMain, dialog} = require('electron');
const path = require('path');

ipcMain.on('start-new', () => {
});
ipcMain.on('start-load', (event) => {
  const file =
  dialog.showOpenDialogSync(
      {properties: ['openFile'],
        title: 'Choose your Markdown File',
      });
  event.sender.send('editor-start', file);
});
ipcMain.on('start-settings', (event) => {
  event.sender.loadFile(path.join(__dirname, '..', '..', 'settings.html'));
});
