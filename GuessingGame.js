var secretNumber=6;
var guess=prompt("Guess a number");
if(Number(guess)===secretNumber)
alert("You GOT IT RIGHT");
else 
if(Number(guess)>secretNumber)
alert("Too High");
else
alert("Too Low");