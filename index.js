let randomNumber1 = Math.ceil(Math.random() * 6)
let randomNumber2 = Math.ceil(Math.random() * 6)

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png")