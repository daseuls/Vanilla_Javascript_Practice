const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

// hidden이라는 class이름을 상수에 저장 / 대문자로 적는것은 어떠한 컨벤션이다. string을 저장하고 싶을 때 사용.
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

// 만약 버튼을 누르면
// 기본 submit 동작을 막은뒤
// input의 값을 username에 저장한다.
// form에 hidden class를 추가해 안보이게 한 후
// localStorage의 username으로 input의 값을 저장한다.
// 그다음 greeting 함수를 실행시킨다.
// greeting함수는 username을 인자로 보내 h1에 hello username을 추가시킨후
// hidden되었던 class를 삭제하는 함수이다.
const onLoginSubmit = (e) => {
  e.preventDefault()
  const username = loginInput.value
  loginForm.classList.add(HIDDEN_CLASSNAME)
  localStorage.setItem(USERNAME_KEY, username)
  paintGreeting(username)
}

// loginForm.addEventListener("submit", onLoginSubmit)

const paintGreeting = (username) => {
  greeting.innerHTML = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

// localStorage의 username값을 가져와서 그것이 null이면은 hidden된 class를 삭제해 화면에 보여주고
// loginForm에 submit했을때 이벤트를 발생시킨다.
// 만약 localStorage에 값이 있다면 localStorage에 저장된 값을 보여준다.

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreeting(savedUserName)
}
