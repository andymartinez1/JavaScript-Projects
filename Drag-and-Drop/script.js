const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart(event) {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(event) {
  this.className = "fill";
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.className += " hovered";
}

function dragLeave(event) {
  event.preventDefault();
  this.className = "empty";
}

function dragDrop(event) {
  this.className = "empty";
  this.append(fill);
}
