const { ipcMain } = require('electron');
const path = require('path');

ipcMain.on('editor-start', (event, file) => {
  console.log('test1');
  event.sender.loadFile(path.join(__dirname, '..', '..', 'editor.html'));
  if (file == null) {
    event.sender.send('editor-new-file');
  } else {
    event.sender.send('editor-load-file', file);
  }
});
