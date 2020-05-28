const { ipcMain } = require('electron');

ipcMain.on('editor-start', (event) => {
  const file = global.currentFile;
  if (file == null) {
    event.sender.send('editor-new-file');
  } else {
    event.sender.send('editor-load-file', file);
  }
});
