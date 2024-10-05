// identify html content in js
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo();
});

function addTodo() {
  const taskText = todoInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // adding a Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // list input
  const newTodo = document.createElement("li");

  // add tasks to list
  newTodo.appendChild(checkbox);
  newTodo.appendChild(document.createTextNode(taskText));

  // delete task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    newTodo.remove();
  });

  newTodo.appendChild(deleteBtn);

  // mark task as complete
  newTodo.addEventListener("click", function () {
    newTodo.classList.toggle("completed");
  });

  todoList.appendChild(newTodo);

  todoInput.value = "";
}
