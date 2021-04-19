
function playMusic1() {
var music1 = new Audio('sounds/rain.mp3');
music1.play();
}

function playMusic2() {
var music1 = new Audio('sounds/Forest.wav');
music1.play();
}

function playMusic3() {
var music1 = new Audio('sounds/chill.wav');
music1.play();
}

var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 300;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   }
   var myten;
   function tclock() {
     myTimer = setInterval(myClock, 1000);
     var c = 600;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   }

   var myTimer;
   function fclock() {
     myTimer = setInterval(myClock, 1000);
     var c = 900;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   }

   function go(){
      window.location.href = 'relax.html';
   }
