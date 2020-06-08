const { ipcRenderer } = require('electron');
const customTitlebar = require('custom-electron-titlebar');
const { remote } = require('electron')
const { Menu, MenuItem } = remote

const menu = new Menu();
menu.append(new MenuItem({
	label: 'Item 1',
	submenu: [
		{
			label: 'Subitem 1',
			click: () => console.log('Click on subitem 1')
		},
		{
			type: 'separator'
		}
	]
}));

menu.append(new MenuItem({
	label: 'Item 2',
	submenu: [
		{
			label: 'Subitem checkbox',
			type: 'checkbox',
			checked: true
		},
		{
			type: 'separator'
		},
		{
			label: 'Subitem with submenu',
			submenu: [
				{
					label: 'Submenu &item 1',
					accelerator: 'Ctrl+C'
				}
			]
		}
	]
}));


let title = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex('#444'),
	shadow: true,
	closeable: true,
	minimizable: true,
	maximizable: true,
	itemBackgroundColor: customTitlebar.Color.fromHex('#fff')
});

title.updateTitle("MD-Editor")
title.updateMenu(menu);


ipcRenderer.send('editor-start');
// eslint-disable-next-line no-unused-vars
ipcRenderer.on('editor-load-file', (event, file) => {
  // TODO implement file
});
