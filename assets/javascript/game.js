
var userChoice = ["axe", "sword", "bow", "warhammer"];

var randomCom = 0;
var minComNum = 19;
var maxComNum = 120;
var userMinNum = 1;
var userMaxNum = 12;
var randomUser = 0;
var randomAssign = [];

$(document).ready(function () {

    function start() {

        randomCom = Math.floor(Math.random() * (+maxComNum - +minComNum) + +minComNum);
        console.log("Random Number Generated : " + randomCom);

        for (var i = 0; i < userChoice.length; i++) {
            randomUser = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
            console.log("Random User Number Generated : " + randomUser);
            randomAssign = randomUser;
            console.log("Random number assigned to randomAssign:  " + randomAssign);

            
        }
        $("#steelAxeBtn").on("click", function() {
          
          
            //randomAssign.attr("#steelAxeBtn", randomUser[i])
            console.log("Button pushed the value: " + $("#steelAxeBtn"));

        });

    }
    start();
});
