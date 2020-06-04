const { ipcRenderer, Menu, MenuItem } = require('electron');
const customTitlebar = require('custom-electron-titlebar');

const menu = new Menu();
menu.append(
  new MenuItem({
    label: 'New File',
    click: () => ipcRenderer.send('editor-start'),
  }),
);
menu.append(
  new MenuItem({
    label: 'Open File',
    click: () => ipcRenderer.send('load-file'),
  }),
);
// eslint-disable-next-line no-new
new customTitlebar.Titlebar({
  menu,
});

ipcRenderer.send('editor-start');
// eslint-disable-next-line no-unused-vars
ipcRenderer.on('editor-load-file', (event, file) => {
  // TODO implement file
});
