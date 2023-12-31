const { ipcRenderer } = require('electron'); 

document.getElementById('createButton').addEventListener('click', ()=>{
  ipcRenderer.send('createNote', "request a new window"); 
}); 

ipcRenderer.on('noteCreated', (event, noteText) => {
  const noteContainer = document.getElementById('noteContainer'); 
  const noteCard = document.createElement('div'); 
  noteCard.textContent = noteText; 
  noteContainer.appendChild(noteCard); 
});  
