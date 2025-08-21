let bibleWords = new Set();

fetch('bible_words.json')
  .then(response => response.json())
  .then(data => {
    bibleWords = new Set(data.map(word => word.toLowerCase()));
  });

function checkWords() {
  let input = document.getElementById("userInput").value;
  input = input.replace(/[\u2018\u2019\u201B\u0060\u00B4]/g, "'");
  const words = input.toLowerCase().split(/[^a-z']+/).filter(word => word);
  const found = [];
  const notFound = [];
  let concatanatedWord = false;
  const concatanatedWords = [];
  
  // clear hints before new run
  const hintsEl = document.getElementById("hints");
  hintsEl.style.display = "none";
  hintsEl.innerHTML = "";

  for (const word of words) {
    if (bibleWords.has(word)) {
      found.push(word);
    } else {
      notFound.push(word);
    }
    if (word.includes("'")) {
      concatanatedWord = true;
      concatanatedWords.push(word);
    }
  } 

  document.getElementById("results").innerHTML = `
    <p><strong>Found in Bible:</strong> ${[...new Set(found)].join(', ')}</p>
    <p><strong>Not Found:</strong> ${[...new Set(notFound)].join(', ')}</p>
  `;

  if (concatanatedWord) {
    hintsEl.style.display = "block";
    hintsEl.innerHTML = `
      <p><strong>Hints</strong></p>
      <p>Try expanding concatanated words:</strong> ${[...new Set(concatanatedWords)].join(', ')}</p>
    `;
  }
}