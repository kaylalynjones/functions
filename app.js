var prompt = require('sync-prompt').prompt;

function increment(x) {
  x++;
  return x;
}

var z = increment(3);
console.log(z);

var z = increment(7);
console.log(z);

var z = increment(9);
console.log(z);

var z = increment(12);
console.log(z);


//--------------------------------
//


function square(y) {
  y *= y;
  return y;
}

var y = square(3);
console.log(y);

var y = square(9);
console.log(y);

var y = square(40);
console.log(y);


//--------------------------------
//


function area(w, l){
  return w * l;

}
var a = area(10, 10);
console.log(a);
a = area(5, 4);
console.log(a);
a = area(7, 4);
console.log(a);
a = area(5, 9);
console.log(a);
a = area(6, 6);
console.log(a);


//--------------------------------
//


function volume(w, l, h){
  return area(w, l)* h;
}
var v = volume(2, 4, 8);
console.log(v);
v = volume(3, 4, 5);
console.log(v);


//---------------------------------
//

var z;
var z =area(square(increment(3) + increment(4)), square(2));
console.log(z);


//--------------------------------
//


function sayHello(){
  console.log("Hello");
}
sayHello();

//--------------------------------
//


function makeUppercase(string) {
  return string.toUpperCase();
}

var u = makeUppercase("Make me uppercase.");
console.log(u);

//-------------------------------
//


function canDrink(age) {
  if(age >= 21){
    return true;
  } else {
    return false;
  }
}

var age = canDrink(21);
console.log(age);


var age = canDrink(15);
console.log(age);

//----------------------------
//


function letterGrade(score){

  if(score >= 90){
    return "A";
  }else if(score >= 80){
    return "B";
  }else if(score >= 70){
    return "C";
  }else if (score >= 60){
    return "D";
  }else {
    return "F";
  }

}


var grade = letterGrade(90);
console.log(grade);

var grade = letterGrade(85);
console.log(grade);

var grade = letterGrade(74);
console.log(grade);

var grade = letterGrade(67);
console.log(grade);

var grade = letterGrade(15);
console.log(grade);


//---------------------------------------
//

function addTax(amt, tax) {
  var taxes = amt * (tax/100);
  var charge = amt + taxes;
  return charge.toFixed(2);
}

var total = addTax(100, 10);
console.log(total);


//--------------------------------------
// adding an array

function sumNumber(numbers){
  var sum = 0;
  for(var i=0; i< numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

var myArray = [3,4,5];
var total = sumNumber(myArray);

console.log(total);

//-----------------------------------------
// do the fatorial here. ITERATIVE

function factorialIterative(number) {
  var sum = 1;

  for( var i=number; i > 1; i--){
    sum *= i;
  }
  return sum;
}

console.log("(iterative) factorial : " + factorialIterative(0) );

//RECURVISE: function that calls itself
//

function factorialRecursive(number){
  
  if (number === 0){
    return 1;
   } else {
    return number * factorialRecursive(number-1);
   }
}
console.log("(recursive) factorial : " + factorialRecursive(5));

//----------------------------------------
//

function rollDie(){
  output = Math.floor(Math.random()*6) + 1;
  return output;
}

for(var i =0; i<10; i++){
var chance = rollDie();
console.log(chance);

}

//---------------------------------------
//
function isPair(a, b){
     return a === b ;
  }

var match = isPair(4,4);
console.log(match);


//--------------------------------------
//
function countPairs(times){

  var count = 0;
  for(var i=0; i <= times; i++){

    if(isPair(rollDie(), rollDie())){
    count++;
    }
  }
  return count;
}
console.log(countPairs(10000));

















