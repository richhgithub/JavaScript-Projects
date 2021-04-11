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

//console.log() method. should the error "X is not defined"
function Add_numbers_1()    {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2()    {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();