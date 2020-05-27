const {ipcRenderer} = require('electron');

const x = document.getElementsByClassName('button');

for (let i = 0; i < x.length; i++) {
  const id = x[i].id;
  console.log(id);
  x[i].addEventListener('click', () => {
    ipcRenderer.send('start-'+id);
  });
}
