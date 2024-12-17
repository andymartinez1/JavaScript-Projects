const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => slideTrick(e.target))
);

function slideTrick(clickedOn) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedOn) {
      fast.checked = false;
    }

    if (cheap === clickedOn) {
      good.checked = false;
    }

    if (fast === clickedOn) {
      cheap.checked = false;
    }
  }
}
