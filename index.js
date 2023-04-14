var randomNumber1= Math.floor(Math.random()*6)+1;
var randomImagesSrc1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImagesSrc1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImagesSrc2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesSrc2);

if (randomNumber1>randomNumber2) 
{
    document.querySelector('h1').innerHTML="Player1 is winner🎊";
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML="Player2 is winner🎊";
}
else{
    document.querySelector('h1').innerHTML="Match is Draw😵";
}
