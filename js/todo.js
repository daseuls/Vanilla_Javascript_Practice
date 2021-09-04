const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = document.querySelector("#todo-form input")

// input에 들어간 value를 빈 배열에 담는다. 그리고 이것을 localStorage에 저장한다. 하지만 localStorage에는 텍스트만 입력할 수 있다
// const toDos = []
// toDos라는 변수에 다시 값을 할당하기 위해 let으로 변경
let toDos = []

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos))
}

// input의 값을 담은 toDoInputValue를 인자로 받아서 li와 span태그를 만들고 그 안에 그 값을 넣기
// button 태그를 만들어서 button 태그를 클릭하면 handleDeleteToDo 함수 실행하기
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

// submit을 했을 때, 기본 동작을 막고 input 값을 toDoInputValue 변수에 담고, input값 초기화
// toDos라는 빈 배열에 input값을 넣고, painToDo 함수 실행 => input 값을 통해 li 태그를 만드는 함수
// saveToDos 함수 실행 => toDos라는 배열안에 toDoInputValue 담은 것을 로컬스토리지에 저장
function handleToDoSubmit(e) {
  e.preventDefault()
  const toDoInputValue = toDoInput.value
  toDoInput.value = ""
  toDos.push(toDoInputValue) // 빈 배열에 input value 값 넣기
  paintTodo(toDoInputValue) // input value값을 그려내는 함수 실행
  saveToDos() // 로컬스토리지에 toDos에 있는 값 json화 해서 저장
}

// 버튼을 클릭했을때 실행되는 함수, 인자의 target을 이용해 그 이벤트가 발생한 부모의 값을 지우는 역할
function handleDeleteToDo(e) {
  e.target.parentElement.remove()
}

// form에 submit 이벤트가 발생했을때 handleToDoSubmit을 발생시킨다.
toDoForm.addEventListener("submit", handleToDoSubmit)

// 로컬스토리지에서 todos 항목 가져오기
const savedToDos = JSON.parse(localStorage.getItem("todos"))

// console.log(JSON.parse(savedToDos))

// 만약 localStorage에 todo가 있다면 todo배열에 그 값을 담는다. 만약에 담게 되면 그 값들이 렌더링이 됨
if (savedToDos) {
  toDos = savedToDos
  savedToDos.forEach((el) => paintTodo(el))
}
