
var counter = 0
var crystals = $(".crystals")
var targetNumber;
var winCount = 0;
var lossCount = 0;

$("#wins").text("Wins: " + winCount);
$("#losses").text("Losses: " + lossCount);

// global function to select numbers for the game and for the crytals

var newNumbers = function() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    console.log(targetNumber);
    $("#randomNumber").text(targetNumber);
};

var crystalNames = ["assets/images/red-rupee.jpg","assets/images/yellow-rupee.png",
"assets/images/blue-rupee.jpg","assets/images/green-rupee.jpg"];

var newCrystalNumbers = function () {
    for (var i = 0; i < crystalNames.length; i++) {

        var randomCrystalNumber = Math.floor(Math.random() * 12) + 1;
        console.log(randomCrystalNumber);
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystalNames[i]);
        imageCrystal.attr("data-crystalvalue", randomCrystalNumber);
        crystals.append(imageCrystal);

    }
}
//call functions to start the first game

newNumbers();
newCrystalNumbers();

//extract data attributes on click and add score

crystals.on("click", ".crystal-image", function() {
    crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#score").text(counter);

//score check to determine win or loss and reset game
    if (counter === targetNumber) {
        alert("You Win");
        winCount++;
        $("#wins").text("Wins: " + winCount);
        counter = 0;
        crystals.empty();
        newNumbers();
        newCrystalNumbers();
        $("#score").text(counter);
    }
    else if (counter > targetNumber){
        alert("You Lose");
        lossCount++;
        $("#losses").text("Losses: " + lossCount);
        counter = 0;
        crystals.empty();
        newNumbers();
        newCrystalNumbers();
        $("#score").text(counter);
    }
});


