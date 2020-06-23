const { dialog } = require('electron');
const path = require('path');

// Starts the Choose File Dialog
// If you add the event as argument, the file will also be loaded
function chooseFile(event) {
  const fileDialog = dialog.showOpenDialogSync(
    {
      properties: ['openFile'],
      title: 'Choose your Markdown File',
    },
  );
  const file = fileDialog[0];
  if (event) {
    global.currentFile = file;
    return event.sender.loadFile(path.join(__dirname, '..', '..', 'editor.html'));
  } return file;
}
module.exports = { chooseFile };
