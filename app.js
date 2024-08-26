let todoData = [];
let titleField = document.querySelector("#title");
let todoBox = document.querySelector(".show-todos-box");
let error = document.querySelector("#error");
let updateBtn = document.getElementById("update");
let addBtn = document.querySelector(".add");
updateBtn.style.display = "none";
let id;

function addTodo() {
  if (titleField.value.trim() === "") {
    error.innerText = "Invalid Input";
    setTimeout(() => {
      error.innerText = "";
    }, 2000);
  } else {
    todoData.push(titleField.value);
    showTodo();
    titleField.value = "";
  }
}

titleField.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && !addBtn.disabled) {
    addTodo();
  }
});

function showTodo() {
  todoBox.innerHTML = "";
  for (let i = 0; i < todoData.length; i++) {
    todoBox.innerHTML += `<div class="todos">${todoData[i]}
      <div class="btn-wrapper">
      <button class="delete" onclick="deleteTodo(${i})"><i class="fa fa-trash" aria-hidden="true"></i></button>
      <button class="edit" onclick="editTodo(${i})"><i class="fas fa-edit"></i></button></div>
      </div>`;
  }
}

function deleteTodo(index) {
  todoData.splice(index, 1);
  showTodo();
}

function editTodo(index) {
  updateBtn.style.display = "block";
  addBtn.setAttribute("disabled", "disabled");
  addBtn.style.backgroundColor = "#999";
  titleField.value = todoData[index];
  id = index;
  showTodo();
}

function updateTodo(id) {
  updateBtn.style.display = "none";
  addBtn.removeAttribute("disabled", "disabled");
  addBtn.style.backgroundColor = "#6f42c1";
  todoData.splice(id, 1, titleField.value);
  showTodo();

  titleField.value = "";
}

updateBtn.addEventListener("click", () => {
  updateTodo(id);
});

let gettingYear = document.querySelector("#year");

function getYear() {
  let d = new Date();
  let year = d.getFullYear();
  gettingYear.innerText = year;
}
getYear();
