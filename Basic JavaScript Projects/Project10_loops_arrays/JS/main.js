function Call_Loop()    {   //while loop example
    var Digit = "";
    var X = 1;
    while (X < 11)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //for loop example
var Content = "";
var Y;
function for_Loop()    {
    for (Y = 0; Y < Instruments.length; Y++)    {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function()   {   //array example
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function()    {   //const example
    const Musical_Instrument = {type:"guiter", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.brand = "Gibson";
    Musical_Instrument.price = "$800";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + " for a " + Musical_Instrument.brand;
}

var X = 82; //let example
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function myFunction()   {   //calls a function
    return Math.PI;
}
document.getElementById("demo").innerHTML = myFunction();

let car = { //object example
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function()    {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";  //break example
var i;
for (i = 0; i < 10; i++)    {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo2").innerHTML = text;

var text = "";  //continue example
var i;
for (i = 0; i < 10; i++)    {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo3").innerHTML = text;