const { readFileSync } = require('fs');
const path = require('path');

function getTheme() {
  const file = JSON.parse(
    readFileSync(path.join(__dirname, 'config.json')),
  );
  return file.theme;
}

document.body.setAttribute('theme', getTheme());
