const { ipcRenderer } = require('electron');

ipcRenderer.send('editor-start');
// eslint-disable-next-line no-unused-vars
ipcRenderer.on('editor-load-file', (event, file) => {
  // TODO implement file
});
