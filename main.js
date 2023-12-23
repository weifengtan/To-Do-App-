const {app, BrowserWindow, ipcMain} = require('electron'); 

function createWindow() {
    const win = new BrowserWindow({width: 800, height: 600, webPreferences: { devTools:true, nodeIntegration:true,} });
    
    win.loadFile('index.html')
    win.webContents.openDevTools(); 
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

ipcMain.on('createNote', () => {
  const noteText = 'New Note'; 
  mainWindow.webContents.send('noteCreated', noteText);
});