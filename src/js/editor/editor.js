const {ipcMain} = require('electron');
const path = require('path');

ipcMain.on('editor-start', (event, file) => {
  event.sender.loadFile(path.join(__dirname, '..', '..', 'editor.html'));
  event.sender.send('editor-load-file', file);
});
