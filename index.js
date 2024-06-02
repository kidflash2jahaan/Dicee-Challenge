let randomNumber1 = Math.ceil(Math.random() * 6)
let randomNumber2 = Math.ceil(Math.random() * 6)

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png")

let message = "Draw!"
if (randomNumber1 > randomNumber2) message = "Player 1 Wins!";
else if (randomNumber1 <randomNumber2) message = "Player 2 Wins!";

document.querySelector("h1").innerText = message;