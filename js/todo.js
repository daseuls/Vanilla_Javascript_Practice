const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = document.querySelector("#todo-form input")

function paintTodo(toDoInputValue) {
  const toDoListEach = document.createElement("li")
  toDoList.appendChild(toDoListEach)
  toDoListEach.innerText = toDoInputValue
}

function handleToDoSumbit(e) {
  e.preventDefault()
  const toDoInputValue = toDoInput.value
  toDoInput.value = ""
  paintTodo(toDoInputValue)
}

toDoForm.addEventListener("submit", handleToDoSumbit)
