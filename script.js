document.addEventListener('DOMContentLoaded', function () {
  const todo_menu_container = document.getElementById("todo-menu-container");
  // todo_menu_container.addEventListener('click', addToDo);

  const todo_list_container = document.getElementById("todo-list-container");

  function addToDo() {
    var newListItem = document.createElement('li');
    newListItem.contentEditable = true;
    todo_list_container.appendChild(newListItem);
    newListItem.focus();
  }
});
