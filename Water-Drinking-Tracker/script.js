const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remaining = document.getElementById("remaining");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  const percentCups = fullCups / totalCups;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${percentCups * 330}px`;
    percentage.innerText = `${Math.round(percentCups * 100)}%`;
  }

  if (fullCups === totalCups) {
    remaining.style.visibility = "hidden";
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = "visible";
    liters.innerText = `${3 - (250 * fullCups) / 1000}L`;
  }
}
