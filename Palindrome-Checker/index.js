const input = document.getElementById("input");

// Reverses the string, splits it into list, then joins it back into a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Compares input and reversed input to check for a palindrome
function check() {
  const value = input.value;
  const reverse = reverseString(value);
  if (value === reverse) {
    alert("This word is a palindrome!");
  } else {
    alert("Not a palindrome ☹️");
  }
  // Clears the input value
  input.value = "";
}
