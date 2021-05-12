//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event listner
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  event.preventDefault();
  //main Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //ToDO Text
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);
  //Complete Button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  //Append to the list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  console.log(item);
  //Delete TODO
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //Check Marks
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
