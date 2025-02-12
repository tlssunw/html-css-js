// 문자열 글자 `` "" ''
const myString = "shinsunwoo";

const body = document.querySelector("body")
const p = document.createElement("p")

p.innerText = myString
p.style.color = 'blue'

body.append(p)