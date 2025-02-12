const body = document.querySelector("body");

const myName = "sunwooshin";

const h1 = document.createElement("h1");
h1.innerText = myName;

const h2 = document.createElement("h2");
h2.innerText = myName;

const h3 = document.createElement("h3");
h3.innerText = myName;

const h4 = document.createElement("h4");
h4.innerText = myName;

const h5 = document.createElement("h5");
h5.innerText = myName;

body.append(h1, h2, h3, h4, h5, h6);

const p = document.createElement("p");
p.innerText = myName;

const em = document.createElement("em");
em.innerText = myName;

p.append(em);
body.append(p);
