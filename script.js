document.addEventListener('DOMContentLoaded', function () {
  const todo_menu_container = document.getElementById("todo-menu-container");
  // todo_menu_container.addEventListener('click', addToDo);
  const todo_input = document.getElementById("todo-input"); 
  const todo_list_container = document.getElementById("todo-list-container");
  const todo_button = document.getElementById("todo-button"); 
  

  todo_button.addEventListener('click', addToDo); 

  function addToDo() {
    if (todo_input.value != ""){
      let li = document.createElement("li"); 
      li.innerHTML = todo_input.value; 
      todo_list_container.appendChild(li); 
      let span = document.createElement("span"); 
      span.innerHTML = "\u00d7"; 
      li.appendChild(span); 
    }
    todo_input.value = ""; 
  }

  span.addEventListener('click', deleteToDo); 

  function deleteToDo() {
    
  }
});
