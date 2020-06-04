const { dialog } = require('electron');
const path = require('path');


// Starts the Choose File Dialog
// If you add the event as argument, the file will also be loaded
function chooseFile(event) {
  const file = dialog.showOpenDialogSync(
    {
      properties: ['openFile'],
      title: 'Choose your Markdown File',
    },
  );
  if (event) {
    global.currentFile = file;
    return event.sender.loadFile(path.join(__dirname, '..', '..', 'editor.html'));
  } return file;
}
module.exports = { chooseFile };
