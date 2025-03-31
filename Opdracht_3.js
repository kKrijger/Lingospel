const cities = ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Tilburg",
  "Groningen", "Almere", "Breda", "Nijmegen", "Enschede", "Apeldoorn",
  "Haarlem", "Arnhem", "Zaanstad", "Amersfoort", "Haarlemmermeer",
  "Zoetermeer", "Zwolle", "Leeuwarden", "Maastricht", "Dordrecht", "Ede",
  "Leiden", "Emmen", "Westland", "Delft", "Deventer", "Alkmaar",
   "Helmond", "Heerlen", "Hilversum", "Venlo", "Oss",
   "Hengelo", "Purmerend", "Roosendaal", "Schiedam", "Lelystad",
  "Almelo", "Hoorn", "Vlaardingen", "Gouda", "Assen",
   "Veenendaal", "Katwijk", "Zeist"];

let chosenCity;
let hiddenWord;
let chances;
let score = 0;

function startGame() {
  const randomIndex = Math.floor(Math.random() * cities.length);
  chosenCity = cities[randomIndex].toUpperCase();
  hiddenWord = "?".repeat(chosenCity.length);
  chances = chosenCity.length + 3;

  document.getElementById('word').innerText = hiddenWord.split('').join(' ');
  document.getElementById('chances').innerText = chances;
  document.getElementById('score').innerText = score;

  document.getElementById('guess').value = '';
  document.getElementById('guess').addEventListener('input', handleGuess);
}

function handleGuess(event) {
  const guess = event.target.value.toUpperCase();
  event.target.value = '';

  if (chosenCity.includes(guess)) {
    let newHiddenWord = '';
    for (let i = 0; i < chosenCity.length; i++) {
      if (chosenCity[i] === guess) {
        newHiddenWord += guess;
      } else {
        newHiddenWord += hiddenWord[i];
      }
    }
    hiddenWord = newHiddenWord;
  } else {
    chances--;
  }

  document.getElementById('word').innerText = hiddenWord.split('').join(' ');
  document.getElementById('chances').innerText = chances;

  if (hiddenWord === chosenCity) {
    alert('Gefeliciteerd! Je hebt het woord geraden.');
    score += 10;
    document.getElementById('score').innerText = score;
    document.getElementById('guess').removeEventListener('input', handleGuess);
  } else if (chances === 0) {
    alert('Helaas, je hebt geen kansen meer over. Het woord was ' + chosenCity);
    score -= 5;
    document.getElementById('score').innerText = score;
    document.getElementById('guess').removeEventListener('input', handleGuess);
  }
}

document.getElementById('startGame').addEventListener('click', startGame);
