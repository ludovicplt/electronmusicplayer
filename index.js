const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      nodeIntegration: true,
      contextIsolation: false,
      webPreferences: {
            preload: path.join(app.getAppPath(), 'audio.js')
      }
    })
    win.loadFile('index.html')
}


app.whenReady().then(() => {
    createWindow()
});


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})