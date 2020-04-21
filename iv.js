var ch = "yes";
var i=1;
while(ch==="yes")
{
var s = prompt("Enter your secret number");
i=1;
while(i!==4)
{
    var g=prompt("Guess a number in trial ");
    if(g==s)
    {
        alert("correct");
        i=4;

    }
    else if(g<s)
    {
        alert("too low");
        i++;
  
    }
    else{
        alert("Too high");
        i++;
       
    }
}
ch=prompt("Are you continue the game? (yes or no)");
}
