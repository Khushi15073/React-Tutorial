const heading1 = document.createElement("h1");
const heading2 = document.createElement("h1");
const heading3 = document.createElement("h1");

heading1.innerHTML = "<i>innerHTML </i>";
heading2.innerText = "<b>innerText</b>";
heading3.textContent = "<b>textContent</b>";

const body = document.querySelector("body");

body.append(heading1);
body.append(heading2);
body.append(heading3);
console.log("hello");