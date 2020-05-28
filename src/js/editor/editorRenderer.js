const { ipcRenderer } = require('electron');

ipcRenderer.on('editor-load-file', (event, file) => {
  // TODO
});
ipcRenderer.on('editor-new-file', () => {

});

ipcRenderer.on('editor-start', () => {
  console.log('test');
});
