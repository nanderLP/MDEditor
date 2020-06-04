const { ipcMain } = require('electron');
const { chooseFile } = require('../utils/chooseFile');

ipcMain.on('load-file', (event) => {
  const file = chooseFile();
  event.sender.send('editor-load-file', file);
});

ipcMain.on('editor-start', (event) => {
  const file = global.currentFile;
  if (file == null) {
    event.sender.send('editor-new-file');
  } else {
    event.sender.send('editor-load-file', file);
  }
  global.currentFile = null;
});
