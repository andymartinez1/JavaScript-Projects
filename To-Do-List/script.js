"use strict";

/*
Persistent to-do list. Will save and load list even after refreshing.
*/

let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";

// Display the list and items in the list
function renderItems() {
  itemsDiv.innerHTML = null;

  // Index corresponds with item
  for (const [idx, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";

    const text = document.createElement("p");
    text.style.display = "inline";
    text.style.marginRight = "10px";
    text.textContent = item;

    const button = document.createElement("button");
    button.textContent = "X";
    // Wrapped in a function to call the removeItem() function
    button.onclick = () => removeItem(idx);

    container.appendChild(text);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  }
}
// Saves the items added to the list
function saveItems() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringItems);
}

// Loads items even after refreshing the page
function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) items = JSON.parse(oldItems);
  renderItems();
}

// Add items to list
function addItem() {
  const value = input.value;
  if (!value) {
    alert("You cannot add an empty item");
    return;
  }
  items.push(value);
  renderItems();
  input.value = "";
  saveItems();
}

// Remove item in list by index
function removeItem(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}

// Call loadItems via an event
document.addEventListener("DOMContentLoaded", loadItems);
