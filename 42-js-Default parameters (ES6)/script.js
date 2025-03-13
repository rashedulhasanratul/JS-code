// topic: default parameter or default param ES6 features:

//if we don't pass the value of b, then the default param will assign 1 for the value of b.
// cause we assign 1, and if we pass the argument then it overwrite  the default value of b.


function multiply(a,b = 1){
    return a * b
}

function rollAdice(numberOfSides = 6){

    return Math.floor(Math.random() * numberOfSides) + 1
}


// before ES6 we use default param like this way;

function rollAdice(numberOfSides){
    if(numberOfSides == undefined){
        numberOfSides = 8
    }

    return Math.floor(Math.random() * numberOfSides) + 1
}

