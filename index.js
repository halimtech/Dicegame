const btn = document.querySelector(".btn")
const img = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const h1 = document.querySelector("h1")

btn.addEventListener("click", function () {
    var imgsrc = Math.floor(Math.random() * 6) + 1
    var imgsrc2 = Math.floor(Math.random() * 6) + 1
    var src1 = "images/dice" + imgsrc + ".png"
    var src2 = "images/dice" + imgsrc2 + ".png"
    var j = 6
    for (var i = 0; i < 6; i++, j--) {
        img.src = "images/dice" + i + ".png"
        img2.src = "images/dice" + j + ".png"
    }
    if (imgsrc > imgsrc2) {
        h1.textContent = "Player 1 wins 🚩"
        img.src = src1
        img2.src = src2
    }
    else if (imgsrc < imgsrc2) {
        h1.textContent = "Player 2 wins 🚩"
        img.src = src1
        img2.src = src2
    }
    else {
        h1.textContent = "It's a tie.🎲"
        img.src = src1
        img2.src = src2
    }
}
)