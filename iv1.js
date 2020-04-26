
function game()
{
    var p;
    var first = document.getElementsByClassName("First")[0];
    first.classList.add("None");  
    var second = document.getElementsByClassName("Second")[0];
    second.classList.remove("None");
    var toss = document.getElementsByClassName("toss")[0];
    toss.classList.remove("None");
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player-2");
    
    var input1 = document.querySelector('input[name="playerone"]');
    player1.textContent = input1.value;

    var input2 = document.querySelector('input[name="playertwo"]');
    player2.textContent = input2.value;
    var inp = document.querySelector("#tossnumber");
    var dot = document.querySelector(".dot");
    var guesser = document.getElementById("guesser");

    inp.addEventListener("change",function(){
          p = inp.value;
    })
    inp.addEventListener("keyup",function(event){
       if(p==="1")
       {
         var toss = document.getElementsByClassName("toss")[0];
         toss.classList.add("None");
         var third = document.getElementsByClassName("Third")[0];
          third.classList.remove("None");
        var mn = document.getElementsByClassName("mn")[0];
        var secret = document.querySelector('input[name="secret"]');
        var num = document.getElementById("num");
        secret.addEventListener("change",function(){
            num.textContent = secret.value;
            mn.classList.remove("None");
            dot.style.color="blue";
            dot.style.background="blue";
        })
        guesser.textContent=input1.value;
       }
       else {
        var toss = document.getElementsByClassName("toss")[0];
        toss.classList.add("None");
         var third = document.getElementsByClassName("Third")[0];
          third.classList.remove("None");
        var mn = document.getElementsByClassName("mn")[0];
        var secret = document.querySelector('input[name="secret"]');
        var num = document.getElementById("num");
        secret.addEventListener("change",function(){
            num.textContent = secret.value;
            mn.classList.remove("None");
            dot.style.color="blue";
            dot.style.background="blue";

        })
          guesser.textContent=input2.value;
        }
    })
}
var p1rank=0;
var p2rank=0;
var guesser1;
var guesser = document.getElementById("guesser");
var cmp = true;

function nano(){
    var ip = document.querySelector('input[name="answer"]')
    var ans = document.querySelector('input[name="secret"]')
    var dot = document.querySelector(".dot");
    var one = document.querySelector("#one");
    var two = document.querySelector("#two");

    
    var cl = document.getElementsByClassName("add");
    var flag=0;
    for(var i=0;i<3;i++)
    {
      var g=prompt("Enter guess number?"+(i+1));
      if(ans.value===g)
      {
          flag=1;
        if(cmp===true)
        {
          p1rank++;
        two.textContent=p1rank;
        }
        else{
            p2rank++;
            one.textContent=p2rank;
        }
         alert("good");
         dot.style.background="green";
         dot.style.color="white";
         break;
      }
      else
      {
         alert("Too better");
      }
    }
    if(flag===0)
    {
        if(cmp===true)
        {
        p2rank++;
        one.textContent=p2rank;
        }
        else{
            p1rank++;
        two.textContent=p1rank;
        }
        dot.style.background="red";
        dot.style.color="white"; 
    }
    cmp=!cmp;

    }