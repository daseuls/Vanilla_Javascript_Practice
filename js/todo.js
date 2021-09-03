// const toDoForm = document.getElementById("todo-form")
// const toDoList = document.getElementById("todo-list")
// const toDoInput = document.querySelector("#todo-form input")

// function paintTodo(toDoInputValue) {
//   const li = document.createElement("li")
//   const span = document.createElement("span")
//   toDoList.appendChild(li)
//   li.appendChild(span)
//   span.innerText = toDoInputValue
// }

// function handleToDoSumbit(e) {
//   e.preventDefault()
//   const toDoInputValue = toDoInput.value
//   toDoInput.value = ""
//   paintTodo(toDoInputValue)
// }

// toDoForm.addEventListener("submit", handleToDoSumbit)

const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = document.querySelector("#todo-form input")
const deleteButton = document.querySelector("#todo-list button")

function paintTodo(toDoInputValue) {
  const li = document.createElement("li")
  const span = document.createElement("span")
  span.innerText = toDoInputValue
  const button = document.createElement("button")
  button.innerText = "❌"
  button.addEventListener("click", handleDeleteToDo)
  toDoList.appendChild(li)
  li.appendChild(span)
  li.appendChild(button)
}

function handleToDoSumbit(e) {
  e.preventDefault()
  const toDoInputValue = toDoInput.value
  toDoInput.value = ""
  paintTodo(toDoInputValue)
}

function handleDeleteToDo(e) {
  console.log(e.target.parentNode)
  console.log(e.target.parentElement)
  e.target.parentElement.remove()
}

toDoForm.addEventListener("submit", handleToDoSumbit)
