const { ipcRenderer } = require('electron');
const customTitlebar = require('custom-electron-titlebar');

// eslint-disable-next-line no-new
new customTitlebar.Titlebar({
  menu: null,
  titleHorizontalAlignment: 'left',
  shadow: true,
});

const x = document.getElementsByClassName('button');

for (let i = 0; i < x.length; i += 1) {
  const { id } = x[i];
  x[i].addEventListener('click', () => {
    ipcRenderer.send(`start-${id}`);
  });
}
