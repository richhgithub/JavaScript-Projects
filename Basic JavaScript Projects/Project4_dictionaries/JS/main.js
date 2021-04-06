function my_Dictionary()    {   //dictionary
    var Animal = {
        Species:"Dog",  //kvp
        Color:"Black",  //kvp
        Breed:"Labrador",   //kvp
        Age:5,  //kvp
        Sound:"Bark!"   //kvp
    };
    delete Animal.Sound;    //delete key
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}