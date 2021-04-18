//global variable returns 30 and 110
var X = 10;
function Add_numbers_1()    {
    document.write(20 + X + "<br>");
}
function Add_numbers_2()    {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//local variable and returns 30
function Add_numbers_1()    {   
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2()    {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//console.log() method. should the error "X is not defined." Note: Need to comment out the global var on line 2.
function Add_numbers_1()    {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2()    {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Date().getHours() example
function get_Date() {
    if (new Date().getHours() < 23) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//if statement
function get_Date_2() {
    if (new Date().getHours() < 23) {
    document.getElementById("Greeting_2").innerHTML = "Go to bed.";
    }
}

//else example
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18)  {
        Vote = "You are old enough to vote!";
    }
    else    {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//else if example
function Time_function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)   {
        Reply = "It is afternoon.";
    }
    else    {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
