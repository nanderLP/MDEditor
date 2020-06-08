const { ipcRenderer, Menu, MenuItem } = require('electron');
const customTitlebar = require('custom-electron-titlebar');

new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex('#444')
});

ipcRenderer.send('editor-start');
// eslint-disable-next-line no-unused-vars
ipcRenderer.on('editor-load-file', (event, file) => {
  // TODO implement file
});
