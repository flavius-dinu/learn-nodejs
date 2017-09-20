// GLOBAL OBJECT RELATED STUFF --> https://nodejs.org/dist/latest-v6.x/docs/api/globals.html

// var time = 0;
//
// var timer = setInterval(function(){
//   time += 2;
//   console.log(time + ' seconds have passed');
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// FUNCTIONS
//function in javascript
function sayHi(){
  console.log('Hi');
}

sayHi();

//function expression
var sayBye = function(){
  console.log('bye');
};

sayBye();

// call a function from another function
function callFunction(fun){
  fun();
}

callFunction(sayHi)
