"use strict";

let data = Math.trunc(Math.random() * 20) + 1;
let life = 10;
let score = 0;
let highScore = 0;
document.querySelector(".life").textContent = life;
document.querySelector(".score").textContent = score;
document.querySelector(".highScore").textContent = highScore;
document.querySelector(".next").style.display = "none";

const handleCheckGuess = () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".level").textContent = "No number";
  } else if (guess > data) {
    if (life <= 1) {
      document.querySelector(".level").textContent = "Game Over";
      life--;
      document.querySelector(".life").textContent = life;
      document.querySelector(".container").style.boxShadow =
        "0px 0px 20px #FF0000";
      document.querySelector(".check").style.display = "none";
      document.querySelector(".next").style.display = "block";
      document.querySelector(".next").textContent = "Play Again";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
      }
      score = 0;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".level").textContent = "Too High";
      life--;
      document.querySelector(".life").textContent = life;
    }
  } else if (guess < data) {
    if (life <= 1) {
      document.querySelector(".level").textContent = "Game Over";
      life--;
      document.querySelector(".life").textContent = life;
      document.querySelector(".container").style.boxShadow =
        "0px 0px 20px #FF0000";
      document.querySelector(".check").style.display = "none";
      document.querySelector(".next").style.display = "block";
      document.querySelector(".next").textContent = "Play Again";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
      }
      score = 0;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".level").textContent = "Too Low";
      life--;
      document.querySelector(".life").textContent = life;
    }
  } else if (guess === data) {
    document.querySelector(".level").textContent = "Correct Answer";
    document.querySelector(".container").style.boxShadow =
      "0px 0px 20px #66FF00";
    life++;
    score += data;
    document.querySelector(".life").textContent = life;
    document.querySelector(".score").textContent = score;
    document.querySelector(".answer").textContent = data;
    document.querySelector(".check").style.display = "none";
    document.querySelector(".next").style.display = "block";
    document.querySelector(".next").textContent = "Next";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  }
};

const handleNext = () => {
  data = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".answer").textContent = data;
  document.querySelector(".answer").textContent = "?";
  document.querySelector(".check").style.display = "block";
  document.querySelector(".guess").value = "";
  document.querySelector(".container").style.boxShadow = "";
  document.querySelector(".level").textContent = "";
  document.querySelector(".next").style.display = "none";
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highScore").textContent = highScore;
  }
  if (life < 1) {
    life = 10;
    document.querySelector(".life").textContent = life;
  }
};

document.querySelector(".answer").textContent = "?";

document.querySelector(".check").addEventListener("click", handleCheckGuess);
document.querySelector(".next").addEventListener("click", handleNext);
