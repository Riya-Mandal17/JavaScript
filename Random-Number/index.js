let secretNumber = Math.floor(Math.random() * 100) + 1; // random 1-100
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");
  
  attempts++;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}`;
    message.style.color = "green";
  } else if (guess > secretNumber) {
    message.textContent = "📉 Too high! Try again.";
    message.style.color = "red";
  } else if (guess < secretNumber) {
    message.textContent = "📈 Too low! Try again.";
    message.style.color = "red";
  }
  

  attemptsText.textContent = `Attempts: ${attempts}`;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
}
