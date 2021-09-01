const clock = document.querySelector("h2#clock")

const getClock = () => {
  const date = new Date()
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

// 여기서 setInterval로 함수를 호출했는데 getClock을 먼저 더 실행한 이유는 setInterval로 호출한 함수는
// 1초뒤에 실행이 되기 떄문에 창이 뜨자마자 함수를 호출하기 위함이다.
getClock()
setInterval(getClock, 1000)

// setTimeout => 일정 시간이 지난 후에 함수를 실행한다. 함수를 단 한번만 실행한다.
// setInterval => 일정 시간 간격을 두고 함수를 실행한다. 함수를 주기적으로 실행한다.
