var randomNumber1=Math.floor(Math.random()*6)+1;

var randomdice="dice"+randomNumber1+".png";

var randomimage="images/"+randomdice;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage);



var randomNumber2=Math.floor(Math.random()*6)+1;

var randomdice2="dice"+randomNumber2+".png";

var randomimage2="images/"+randomdice2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML="Oops! Draw ";
}