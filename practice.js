const title = document.querySelector("#title")

// 첫번째 방법
// className을 통해 클래스를 변경하면 클래스 자체가 아예 변경이 되기 때문에 좋지 않은 방법이다.
// const handleTitleClick = () => {
//   const clickedClass = "active"
//   if (title.className === clickedClass) {
//     title.className = ""
//   } else {
//     title.className = clickedClass
//   }
// }

// 두번째 방법
// const handleTitleClick = () => {
//   const clickedClass = "active"
//   if (title.classList.contains(clickedClass)) {
//     title.classList.remove(clickedClass)
//   } else {
//     title.classList.add(clickedClass)
//   }
// }

// 세번째 방법
// classList의 toggle메서드를 사용하면 바로 위의 다섯줄의 코드를 한줄로 변경가능하다.
// toggle은 classList가 있는지 확인해서 있으면 제거하고 없으면 추가하는 역할을 한다.
const handleTitleClick = () => {
  const clickedClass = "active"
  title.classList.toggle(clickedClass)
}

title.addEventListener("click", handleTitleClick)
