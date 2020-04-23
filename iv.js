function game()
{
var s = prompt("Enter your secret number");
i=1;
while(i!==4 && i!==9)
{
    var g=prompt("Guess a number in trial "+i);
    if(g==s)
    {
        i=9;
        var target_ele = document.getElementsByClassName("class1")[0];
        target_ele.classList.remove("None");
        var target_el = document.getElementsByClassName("class3")[0];
        target_el.classList.add("None");
        var other_ele = document.getElementsByClassName("class2")[0];
        other_ele.classList.add("None");
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
if(i==4)
{
    var other_ele = document.getElementsByClassName("class2")[0];
    other_ele.classList.remove("None");
    var target_el = document.getElementsByClassName("class3")[0];
    target_el.classList.add("None");
    var target_ele = document.getElementsByClassName("class1")[0];
        target_ele.classList.add("None");
}

}
