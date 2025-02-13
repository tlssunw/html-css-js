const button = document.querySelector("button");

let showing = false;

button.onclick = () => {
  const h1 = document.querySelector("h1");
  const time = new Date().toLocaleTimeString();

  h1.innerText = !showing ? time : "지금 몇시임?";
  button.innerText = !showing ? "시간확인하기" : "시간끄기";

  let id = null;

  if (!showing) {
    id = setInterval(() => {
      const h1 = document.querySelector("h1");
      const time = new Date().toLocaleTimeString();

      h1.innerText = time;
    }, 1000);
  } else {
    if (id) {
      clearInterval(id);
    }
  }

  showing = !showing;
};
