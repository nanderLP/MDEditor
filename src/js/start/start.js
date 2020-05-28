const { ipcMain, dialog } = require('electron');
const path = require('path');

ipcMain.on('start-new', (event) => {
  event.sender.send('editor-start');
  event.sender.loadFile(path.join(__dirname, '..', '..', 'editor.html'));
});
ipcMain.on('start-load', (event) => {
  const file = dialog.showOpenDialogSync(
    {
      properties: ['openFile'],
      title: 'Choose your Markdown File',
    },
  );
  event.sender.send('editor-start', file);
});
ipcMain.on('start-settings', (event) => {
  event.sender.loadFile(path.join(__dirname, '..', '..', 'settings.html'));
});
