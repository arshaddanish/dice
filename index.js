document.addEventListener("keypress", dice);

function dice() {
    var randomNo1 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage1 = "images/dice" + randomNo1 + ".png";
    
    document.querySelector(".img1").setAttribute("src", randomDiceImage1);
    
    
    var randomNo2 = Math.floor(Math.random() * 6) + 1;
    
    var randomDiceImage2 = "images/dice" + randomNo2 + ".png";
    
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);
    
    
    
    if(randomNo1 === randomNo2) {
        document.querySelector("h1").textContent = "Draw!";
    }
    else if(randomNo1 > randomNo2) {
        document.querySelector("h1").textContent = "🚩Player 1 wins";
    }
    else {
        document.querySelector("h1").textContent = "Player 2 wins🚩";
    }
}