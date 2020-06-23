const storage = require('electron-json-storage');

function setTheme() {
  storage.get('theme', (error, data) => {
    if (error) console.error(error);
    document.getElementById('root').classList.add(`theme-${data.theme}`);
  });
}

setTheme();
