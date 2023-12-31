let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const changeBackgroundColor = function(color) {
  document.querySelector('body').style.backgroundColor = color;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;

  //When there's no input
  if (!guess) {
    displayMessage("🙈 No number!")

  //When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    changeBackgroundColor('#60b347') ;
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore; 
    }

  //When guess' wrong
  } else if (guess!== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
      } else {
      displayMessage("🥲 You lost the game!")
      document.querySelector('.score').textContent = 0;
    }
  } 
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  changeBackgroundColor('#222');
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('number').textContent = '?';
  document.querySelector('.guess').value='';
  document.querySelector('.number').style.width = '15rem';
});