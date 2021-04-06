function addition_Function( ) { //addition
var addition = 2 + 2;
document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {   //subtraction
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication()   {   //multiplication
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {   //division
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math()    {   //math
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, "+
    "divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {   //modulus
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator()    {   //negation
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function increment_Operator()   {   //increment
    var X =5;
    X++;
    document.write(X);
}

function decrement_Operator()   {   //decrement
    var Y = 5.25;
    Y--;
    document.write(Y);
}

window.alert(Math.random());    //random 

window.alert(Math.random() * 100);  //random

function round_Operator() { //round
document.getElementById("demo").innerHTML = Math.round(4.4);
}