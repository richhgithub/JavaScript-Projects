//Concat example
function full_Sentence()    {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice() example
function slice_Method() {
    var Senctence = "All work and no play makes Johnny a dull boy";
    var Section = Senctence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase example
function my_Upper_Function()   {
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("demo1").innerHTML = res;
}

//search() example
function my_Search_Function()   {
    var str = "Visit W3Schools!";
    var n = str.search("W3Schools");
    document.getElementById("demo2").innerHTML = n;
}

//toString() example
function string_Method()    {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() example
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed() example
function my_Fixed_Function()    {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("demo3").innerHTML = n;
}

//ValueOf example
//function my_Value_Function(); {
//    var str = "Hello World!";
//    var res = str.valueOf();
//    document.getElementById("demo4").innerHTML = res;
//}