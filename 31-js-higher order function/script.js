// Higher order function, callback function:

//here a is also higher order function cz, it accept function as parameter
function a(b){
    // console.log(b);
    console.dir(b)
    // b()
}

//we can pass string, number, object, array, function as an argument:

a('hii')
a(1234)
a({userName: 'Hasan', userAge:24, city: 'Rajshahi'})
a([1,2,3,4])


function sayHi(){
    console.log('hiiiiiiiiiiiiiiiiiiii');
}

a(sayHi)

// we can also pass function like this:
//this is also callback function
a(function(){
    console.log('hiiiiiiiiiiiiiiiiiiii');
})