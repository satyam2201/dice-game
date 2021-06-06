// code for movement of dice1

var randomNumber1=Math.floor(Math.random()*6+1);

var randomDiceImage="dice"+randomNumber1+".png";  // dice1.png-dice6.png
var randomImageSource="images/"+randomDiceImage;  //images/dice1.png to images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src" ,randomImageSource);


// code for movement of dice2

var randomNumber2=Math.floor(Math.random()*6+1);

// var randomDiceImage="dice"+randomNumber2+".png";
var randomImageSource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src" ,randomImageSource2);

// wiinner name annoncement

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="You won 🚩"
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Match Draw !"
}
else {
    document.querySelector("h1").innerHTML=" 🚩 Computer won"
}
