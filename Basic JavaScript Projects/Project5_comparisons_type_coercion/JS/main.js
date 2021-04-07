document.write(typeof "Word");  //data type

document.write("10" + 5);   //type coercion

function my_Function()  {
    document.getElementById("Test").innerHTML = 0/0;    //Nan example
}

function true_Function()  {
    document.getElementById("Test2").innerHTML = isNaN("This is a string"); //true
}

function false_Function()   {
    document.getElementById("Test3").innerHTML = isNaN("007");  //false
}

document.write(2E310);  //infinity

document.write(-3E310); //-infinity

document.write(10 >2);  //boolean logic for true

document.write(10 < 2);   //boolean logic for false

console.log(2 + 2); //display in console

console.log(10 < 2);    //boolean logic for false and display in console

document.write(10 == 10);   //true

document.write(3 == 11);    //false

X = 10;
Y = 10;
document.write(X === Y);    //=== true

X = 72;
Y = "82";
document.write(X === Y);    //=== false

X = 82;
Y = "82";
document.write(X === Y);    //=== false

X = 9;
Y = 10;
document.write(X === Y);    //=== false

document.write(5 > 2 && 10 >4); //&& true

document.write(5 > 10 && 10 > 4);   //&& false

document.write(5 > 10 || 10 > 4);   //|| true

document.write(5 > 10 || 10 > 20);  //|| false

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);   //!(not) true
}

function not2_Function() {
    document.getElementById("Not2").innerHTML = !(20 > 10);  //!(not) false
}