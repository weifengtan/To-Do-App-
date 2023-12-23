const { ipcRenderer } = window.require('electron'); 

function createNote() {
    ipcRenderer.send("createNote", "create a new note"); 
}

