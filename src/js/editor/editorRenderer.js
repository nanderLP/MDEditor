const { ipcRenderer } = require('electron');
const customTitlebar = require('custom-electron-titlebar');
const { remote } = require('electron');

const { Menu, MenuItem } = remote;

const menu = new Menu();
menu.append(new MenuItem({
  label: 'File',
  submenu: [
    {
      label: 'New File',
      click: () => ipcRenderer.send('editor-start'),
    },
    {
      label: 'Load File',
      click: () => ipcRenderer.send('editor-load-file'),
    },
    {
      type: 'separator',
    },
  ],
}));

menu.append(new MenuItem({
  label: 'About',
  submenu: [
    // TODO implement About menu
  ],
}));


const title = new customTitlebar.Titlebar({
  shadow: true,
});

title.updateTitle('MD-Editor');
title.updateMenu(menu);


ipcRenderer.send('editor-start');
// eslint-disable-next-line no-unused-vars
ipcRenderer.on('editor-load-file', (event, file) => {
  // TODO implement file
});
