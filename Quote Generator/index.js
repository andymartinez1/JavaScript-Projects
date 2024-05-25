const quotes = [
  "When I became a man I put away childish things, including the fear of childishness and the desire to be very grown up.",
  "It never hurts to ask. Unless you ask for hurt.",
  "Everybody has their taste in noises as well as in other matters; and sounds are quite innoxious, or most distressing, by their sort rather than their quantity.",
  "There are two kinds of men who never amount to much: those who cannot do what they are told and those who can do nothing else.",
  "I would never die for my beliefs because I might be wrong.",
  "Never take the advice of someone who has not had your kind of trouble.",
  "Results! Why, man, I have gotten a lot of results. I know several thousand things that won't work.",
  "Save a little money each month and at the end of the year you'll be surprised at how little you have.",
  "Philosophy is a battle against the bewitchment of our intelligence by means of language.",
  "When children feel they have to earn our love by what they accomplish, they never feel good about themselves, no matter how much they do, no matter what their age. Indeed, some adults work outrageous hours, make huge salaries, and always strive to accomplish more and yet are never satisfied, no matter what they have achieved. This is because they were never given the free, unconditional love of their parents, the love that is every child’s birthright.",
  "Suicidal glory is the luxury of the irresponsible. We're not giving up. We're waiting for a better opportunity to win.",
  "All growth is a leap in the dark, a spontaneous unpremeditated act without the benefit of experience.",
];

// Checking whether the quote has been used or not
const usedIndexes = new Set();
const quoteEl = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    //  Rounding down using floor as we're using length of the list
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Once the full set has been used, it refreshes it
    if (usedIndexes.has(randomIndex)) continue;
    const quote = quotes[randomIndex];
    quoteEl.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
  }
}
