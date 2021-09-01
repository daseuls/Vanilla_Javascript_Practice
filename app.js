const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

// hidden이라는 class이름을 상수에 저장 / 대문자로 적는것은 어떠한 컨벤션이다. string을 저장하고 싶을 때 사용.
const HIDDEN_CLASSNAME = "hidden"

const onLoginSubmit = (e) => {
  e.preventDefault()
  const username = loginInput.value
  loginForm.classList.add(HIDDEN_CLASSNAME)
  greeting.innerHTML = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit)
