const { ipcRenderer } = require('electron');

const x = document.getElementsByClassName('button');

for (let i = 0; i < x.length; i += 1) {
  const { id } = x[i];
  x[i].addEventListener('click', () => {
    ipcRenderer.send(`start-${id}`);
  });
}
