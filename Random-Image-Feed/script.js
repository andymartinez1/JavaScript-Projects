const container = document.querySelector(".container");
const url = "https://picsum.photos";
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${url}/${getRandSize()}`;
  container.appendChild(img);
}

function getRandNum() {
  return Math.floor(Math.random() * 10) + 300;
}

function getRandSize() {
  return `${getRandNum()}/${getRandNum()}`;
}

console.log(getRandSize());
