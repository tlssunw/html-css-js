document.write("준비완료");

const id = document.querySelector("#find_id");
const pw = document.querySelector("#find_pw");
const sign = document.querySelector("#sign_up");

id.onclick = () => {
  alert("아이디를 찾으시겠습니까?");
  id.style.color = "blue"
  pw.style.color = "black"
  sign.style.color = "black"
};
pw.onclick = () => {
  alert("비밀번호를 찾으시겠습니까?");
};
sign.onclick = () => {
  alert("회원가입을 하시겠습니까??");
};
