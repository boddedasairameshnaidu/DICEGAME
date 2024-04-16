var x = Math.floor(Math.random()*6)+1;
var y = Math.floor(Math.random()*6)+1;
var r = "dice"+x+".png";
var r1 = "dice"+y+".png";
var img1 = document.getElementById("diceImage1").setAttribute("src",r);
var img2 = document.getElementById("diceImage2").setAttribute("src",r1);
if(r == r1) document.querySelectorAll("h1")[0].innerHTML = "DRAW";
else if(r > r1) document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
else document.querySelector("h1").innerHTML = "PLAYER 2 WINS!";

