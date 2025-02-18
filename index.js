let dice = [
  "https://cdn-icons-png.flaticon.com/128/7262/7262391.png",
  "https://cdn-icons-png.flaticon.com/128/7262/7262392.png",
  "https://cdn-icons-png.flaticon.com/128/7262/7262393.png",
  "https://cdn-icons-png.flaticon.com/128/5414/5414052.png",
  "https://cdn-icons-png.flaticon.com/128/44/44375.png",
  "https://cdn-icons-png.flaticon.com/128/7262/7262396.png",
];

const divs = document.querySelector("#root > div");

let myDices = Array.from({ length: 4 }, (_, index) => {
  const img = document.createElement("img");
  img.alt = `${index + 1}번째 주사위`;

  return img;
});

let comDices = [...myDices];

console.log(comDices);

const makeNumber = () => {
  Math.floor(Math.random() * 6);
};

console.log(makeNumber);

divs.forEach((div, index) => {
  div.innerHtml = null;

  if (index === 0) {
    myDices.map((img) => {
      img.src = dice[makeNumber()];

      div.append(img);
    });
  } else {
    comDices.forEach((img) => {
      img.src = dice[makeNumber()];
      div.append(img);
    });
  }
});

const button = document.querySelector("button");

const whoWins = (d1, d2) => {
  let sum1 = 0;
  let sun2 = 0;

  d1.forEach((img) => {
    const index = dice.findIndex((src) => src === img.src);
    if (index >= 0) {
      sum1 += index + 1;
    }
  });
};

d2.forEach((img) => {
  const index = dice.findIndex((src) => src === img.src);
  if (index >= 0) {
    sum1 += index + 1;
  }
});

console.log;

button.onclick = () => {
  const id = setInterval(() => {
    myDices.forEach((img) => {
      img.src = dice[makeNumber()];
      img.animate([{ transform: "rotate(0deg)" }], {});
    });
  }, 1000);
};

let time = 0;

const countId = setInterval(() => {
  if (time === 3) {
    clearInterval(countId);
    clearInterval(id);
    time = 0;
    return;
  }
  time += 1;
});
