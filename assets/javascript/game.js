
var randomCom = 0;
var minComNum = 19;
var maxComNum = 120;
var userMinNum = 1;
var userMaxNum = 12;
var totalHit = 0;
var win = 0;
var lose = 0;



$(document).ready(function () {

  function start() {
     $("#hitScore").empty()
    btn1 = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
    console.log("Random User Number Generated BTN1 : " + btn1);

    btn2 = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
    console.log("Random User Number Generated BTN2 : " + btn2);

    btn3 = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
    console.log("Random User Number Generated BTN3: " + btn3);

    btn4 = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
    console.log("Random User Number Generated BTN4: " + btn4);

    //Begining Score "Health Score"       
    randomCom = Math.floor(Math.random() * (+maxComNum - +minComNum) + +minComNum);
    console.log("Random Number Generated : " + randomCom);
    $("#healthNumber").val(randomCom);

    //Button 1 "Axe"         
    $("#steelAxeBtn").click(function () {
      $("#hitScore").val(btn1);
      if (randomCom !== totalHit || randomCom > totalHit) {
        randomCom = randomCom - btn1;
        $("#healthNumber").val(randomCom);
     
      } if (randomCom < totalHit) {
        alert("You lose");
        lose++;
        $(".badge-error").text(lose);
        $("#hitScore").empty();
        start();
      }
     
      if (randomCom === totalHit) {
        alert("You Win")
        win++;
        $(".badge-success").text(win);
        $("#hitScore").empty();
        start();
      } else $("#healthNumber").val(randomCom);
    });

    //Button 2 "Sword"  
    $("#swordBtn").click(function () {
      $("#hitScore").val(btn2);
      if (randomCom !== totalHit || randomCom > totalHit) {
        randomCom = randomCom - btn2;
        $("#healthNumber").val(randomCom);
      } if (randomCom < totalHit) {
        alert("You lose");
        lose++;
        $(".badge-error").text(lose);
        $("#hitScore").empty();
        start();
      }
      if (randomCom === totalHit) {
        alert("You Win")
        win++;
        $(".badge-success").text(win);
        $("#hitScore").empty();
        start();
      }
      else $("#healthNumber").val(randomCom);
    });

    //Button 3 "Bow" 
    $("#bowBtn").click(function () {
      $("#hitScore").val(btn3);
      if (randomCom !== totalHit || randomCom > totalHit) {
        randomCom = randomCom - btn3;
        $("#healthNumber").val(randomCom);
      } if (randomCom < totalHit) {
        alert("You lose");
        lose++;
        $(".badge-error").text(lose);
        $("#hitScore").empty();
      }
      if (randomCom === totalHit) {
        alert("You Win")
        win++;
        $(".badge-success").text(win);
        $("#hitScore").empty();
        start();

      } else $("#healthNumber").val(randomCom);
    });

    //Button 4 "Warhammer" 
    $("#warhammerBtn").click(function () {
      $("#hitScore").val(btn4);

      if (randomCom !== totalHit || randomCom > totalHit) {
        randomCom = randomCom - btn4;
        $("#healthNumber").val(randomCom);
      } if (randomCom < totalHit) {
        alert("You lose");
        lose++;
        $(".badge-error").text(lose);
        $("#hitScore").empty()
      }
      if (randomCom === totalHit) {
        alert("You Win")
        win++;
        $(".badge-success").text(win);
        $("#hitScore").empty()
        start();
      } else $("#healthNumber").val(randomCom);
    });

  }
  start();

});
