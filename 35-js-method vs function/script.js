// method vs function

// a method is a simply function that belong to a object.
// function is independent block of code that can be called anywhere in the program.

const math = {
  E: 2.718281828459045,
  add: function (a, b) {
    return a + b;
  },
  square: function (m) {
    return m * m;
  },
  subtract (x, y) {   // this is also a method in es6 features
    return x - y;
  },
  cube (s){
    return 6 * (s**2)
  }
};

console.log(math.cube(6));