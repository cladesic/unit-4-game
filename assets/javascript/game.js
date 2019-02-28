
var userChoice = ["axe", "sword", "bow", "warhammer"];

var randomCom = 0;
var minComNum = 19;
var maxComNum = 120;
var userMinNum = 1;
var userMaxNum = 12;
var randomUser = "";
var randomAssign = [];



$(document).ready(function () {

    $("#steelAxeBtn").attr(Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum));
    console.log("Here is the information after attr" + S("#steelAxeBtn"));
    

    function start() {

        randomCom = Math.floor(Math.random() * (+maxComNum - +minComNum) + +minComNum);
        console.log("Random Number Generated : " + randomCom);

      //  for (var i = 0; i < userChoice.length; i++) {
      //     randomAssign = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
      //      console.log("Random User Number Generated : " + randomAssign);
            
           
        
            
            
       // }
      
        //console.log("Random number assigned to randomAssign outside loop:  " + randomUser);

        
      //  $("#steelAxeBtn").on("click", function() {
       //     randomUser = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
       //     console.log("Random User Number Generated : " + randomUser);

       // });

    }
    start();
});
