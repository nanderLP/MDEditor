const { app, BrowserWindow } = require('electron');
const path = require('path');
const DiscordRPC = require('discord-rpc');

require('./js/start/start');
require('./js/editor/editor');

global.currentFile = null;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line max-len
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

require('electron-reload')(__dirname);

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    autoHideMenuBar: true,
    frame: false,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'start.html'));
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
const clientId = '715591541451653212';

// only needed for discord allowing spectate, join, ask to join
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
  rpc.setActivity({
    details: 'Editing some cool stuff :)',
    state: 'Editing a Markdown File',
    startTimestamp,
    instance: false,
  });
}

rpc.on('ready', () => {
  setActivity();

  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

// eslint-disable-next-line no-console
rpc.login({ clientId }).catch(console.error);
