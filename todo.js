const todoInput = document.querySelector(".todo-input");
const todo_btn = document.querySelector(".submit");
let todo_container = document.querySelector(".todos");
let todo = [];

todo_btn.addEventListener("click", () => {
  addTodo(todoInput.value);
  todoInput.value = "";
});

const addTodo = (todos) => {
  if (todoInput.value == "") {
    alert("You cannot enter an empty Todo");
    return null;
  } else {
    todo.push(todos);
    renderTodos(todo);
  }
};

const renderTodos = (todo) => {
  /* Create todo list li */
  let li = document.createElement("li");
  /* Create Update and Delete Button */
  let updateButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  updateButton.textContent = "Update";
  deleteButton.textContent = "Delete";
  updateButton.classList.add("update-btn", "btn");
  deleteButton.classList.add("delete-btn", "btn");
  updateButton.addEventListener("click", (e) => {
    let text = e.target.parentElement.firstChild;
    let prompter = prompt("Enter your new todo");
    if (prompter.length <= 0) {
      alert("Please enter a valid todo");
      return prompter;
    } else {
      text.textContent = prompter;
    }
  });
  deleteButton.addEventListener("click", (e) => {
    let elementCont = e.target.parentElement;
    elementCont.remove();
  });
  todo.forEach((element) => {
    li.textContent = element;
    li.append(updateButton, deleteButton);
  });
  todo_container.append(li);
};
/* WITHOUT WEB STORAGE */