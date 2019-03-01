//------Global variables------
var randomCom = 0;
var minComNum = 19;
var maxComNum = 120;
var userMinNum = 1;
var userMaxNum = 12;
var totalHit = 0;
var win = 0;
var lose = 0;

//----Wait until page is loaded----------
$(document).ready(function () {
 
//----Start function for page ----------- 
  function start() {
    
 
    
    btn1 = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
    btn2 = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
    btn3 = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
    btn4 = Math.floor(Math.random() * (+userMaxNum - +userMinNum) + +userMinNum);
    
//-----------Begining Score "Health Score"-----------------      
    randomCom = Math.floor(Math.random() * (+maxComNum - +minComNum) + +minComNum);
      $("#healthNumber").val(randomCom);

//-----------Button 1 "Axe"--------------------------------         
    $("#steelAxeBtn").click(function () {
      $("#hitScore").val(btn1);
     // console.log("Here is the btn assignment " + " " + btn1)
        if (randomCom !== totalHit || randomCom > totalHit) {
            randomCom = randomCom - btn1;
            totalHit = totalHit + btn1;
            $("#healthNumber").val(randomCom);
            $("#hitScore").val(totalHit);
        } if (randomCom < totalHit) {
            lose++;
            $(".badge-error").text(lose);
            $('#hitScore').val('');
            totalHit = 0;
            btn1 = 0;
            alert("You lose");
            console.log ("here is the data" + " " + totalHit + " " + btn1);
            start();
        } if (randomCom === totalHit) {
            win++;
            $(".badge-success").text(win);
            $('#hitScore').val('');
            alert("You Win");
            totalHit = 0;
            btn1 = 0;
            start();
        } else $("Game Over");
    });

//----------Button 2 "Sword"------------------------------  
    $("#swordBtn").click(function () {
      $("#hitScore").val(btn2);
        if (randomCom !== totalHit || randomCom > totalHit) {
            randomCom = randomCom - btn2;
            totalHit = totalHit + btn2;
            $("#healthNumber").val(randomCom);
            $("#hitScore").val(totalHit);
        } if (randomCom < totalHit) {
            lose++;
            $(".badge-error").text(lose);
            $('#hitScore').val('');
            alert("You lose");
            totalHit = 0;
            btn2 = 0;
            start();
        } if (randomCom === totalHit) {
            win++;
            $(".badge-success").text(win);
            $('#hitScore').val('');
            alert("You Win");
            totalHit = 0;
            btn2 = 0;
            start();
        } else ("Game Over");
    });

//----------------Button 3 "Bow"-------------------------------
    $("#bowBtn").click(function () {
      $("#hitScore").val(btn3);
        if (randomCom !== totalHit || randomCom > totalHit) {
            randomCom = randomCom - btn3;
            totalHit = totalHit + btn3;
            $("#healthNumber").val(randomCom);
            $("#hitScore").val(totalHit);
        } if (randomCom < totalHit) {
            lose++;
            $(".badge-error").text(lose);
            $('#hitScore').val('');
            alert("You lose");
            totalHit = 0;
            btn3 = 0;
            start();
        } if (randomCom === totalHit) {
            win++;
            $(".badge-success").text(win);
            $('#hitScore').val('');
            alert("You Win");
            totalHit = 0;
            btn3 = 0;
            start();
        } else ("Game Over");
      });

//-------------Button 4 "Warhammer"------------------------ 
    $("#warhammerBtn").click(function () {
      $("#hitScore").val(btn4);
        if (randomCom !== totalHit || randomCom > totalHit) {
            randomCom = randomCom - btn4;
            totalHit = totalHit + btn4;
            $("#healthNumber").val(randomCom);
            $("#hitScore").val(totalHit);
        } if (randomCom < totalHit) {
            lose++;
            $(".badge-error").text(lose);
            $('#hitScore').val('');
            alert("You lose");
            totalHit = 0;
            btn4 = 0;
            start();
        } if (randomCom === totalHit) {
            win++;
            $(".badge-success").text(win);
            $('#hitScore').val('');
            alert("You Win");
            totalHit = 0;
            btn4 = 0;
            start();
        } else ("Game Over");
            
      });
      console.log ("here is the data end of function" + " " + totalHit + " " + btn1);
  }

  start();

});
