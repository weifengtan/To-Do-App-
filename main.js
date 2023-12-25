const {app, BrowserWindow, ipcMain} = require('electron'); 

function createWindow() {
    const win = new BrowserWindow({width: 1000, 
        height: 800, 
        webPreferences: { 
            devTools:true, 
            nodeIntegration:true,
            contextIsolation: false,
        }, 
        });
    
    win.loadFile('index.html')
    //win.webContents.openDevTools(); 
}

app.whenReady().then(createWindow); 

app.on('window-alL-closed', () => {
    app.quit();
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});  

// ipcMain.on('add-note', (event) => {
//     console.log('hello'); 
//     const noteText = `new note`; 
//     event.reply('new-note', noteText); 
// }); 

ipcMain.on('createNote', (event, data) => {
  const note = new BrowserWindow({
    width: 450, 
    height: 450, 
  }); 
  note.loadFile('note.html');
});