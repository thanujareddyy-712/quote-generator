const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "You are never too old to set another goal or to dream a new dream.",
  "Do not wait for the perfect moment. Take the moment and make it perfect.",
  "Stars can't shine without darkness.",
  "Code is poetry, and you're the poet."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
