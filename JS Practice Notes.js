//var declarations
var myString = "Konrad"; //Use quotations
var myNumber = 3; //decimals work, no quotations needed
var myBoolean = true; // NO CAPS, no quotations needed

//example of console printing
console.log("Name: " + myString);
console.log("Lucky Number: " + myNumber);
console.log("Good joke? " + myBoolean);

//How to set up printing
var pizzaTopping = "Pepperoni";
console.log("My favourite pizza topping is " + pizzaTopping);


//Basic Math
var myAge= 24;
var currentYear= 2017;
console.log(myAge + 3.5);
console.log(currentYear - 1969);
console.log(65/240);
console.log(65/240*100);

//Modulus gives how many remaining from original number after taking max full divisions
console.log (365/27); //Gives 13.518518518518519
console.log (365%27); //Gives 14 because after (13x27) theres 14 left

/*Math.random() gives a random between 0 and 1
Math.floor() rounds down to nearest whole number
Line below gives a random whole number between 0 and 100*/
console.log(Math.floor(Math.random()*100 ));

//change variables as needed
var morningAlarm = '6:30AM';
morningAlarm = '7:00AM';
console.log('Morning alarm is set to: ', morningAlarm);

//if/else statement
var harryPotterFan = false;

if (harryPotterFan) {
  console.log('Mischief managed');
} else {
  console.log('I live a muggle\'s life.'); 	//use \' to enter an apostrophe
}

//comparison operators
var hungerLevel = 10;

if (hungerLevel>7) {
  console.log("Time to eat!");
} else {
  console.log("Let\'s eat later.");
}

//added else if statement
var moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howwlll!!');
} else if(moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if(moonPhase === 'mostly new') {
  console.log('Back on two feet.');
} else {
  console.log('Invalid moon phase');
}

//Logical operators
var moonPhase = 'full';
var foggyNight = false	

//	if/else statements look for booleans so no need to write foggyNighy === true
if (moonPhase === 'full' || foggyNight) {   // || means one has to be true.. use && for both  		
  console.log('Howwlll!!');					
} else if(moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if(moonPhase === 'mostly new') {
  console.log('Back on two feet.');
} else {
  console.log('Invalid moon phase');
}

//Switch statements
var moonPhase = 'full';

switch(moonPhase) {
  case 'full': 					//use : not ; for cases
    console.log('Howwlll!!');
    break;						//always break after every case and default as well
  case 'mostly full':
    console.log('Arms ans legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
                }

//Simple function                
var calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

pressPowerButton();
// Output: Calculator turning on.
pressPowerButton();
// Output: Calculator turning off.

//more function practice
function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
}

takeOrder('bacon', 'thin crust');
takeOrder('pepperoni', 'thick crust');
takeOrder('queso', 'cheese crust');


//more difficuly function
var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');

console.log(getSubTotal(orderCount));

//second attempt was good!
var orderCount = 0;
function takeOrder(crustType, topping) {
  console.log('Order: ' + crustType + ' crust pizza topped with ' + topping + '.');
  orderCount = orderCount+1;
}
function getSubTotal(itemCount){
  return itemCount * 7.5;
}

takeOrder('thin', 'bacon');
takeOrder('thick', 'pepperoni');
takeOrder('cheese', 'cheese');

console.log(getSubTotal(orderCount));

//Adding Taxes

var orderCount = 0;
function takeOrder(crustType, topping) {
  console.log('Order: ' + crustType + ' crust pizza topped with ' + topping + '.');
  orderCount = orderCount+1;
}
function getSubTotal(itemCount){
  return itemCount * 7.5;
}
function getTax(){
  return getSubTotal(orderCount) * 0.06; //dont forget to add the parameters of functions that need them
}
function getTotal(){
  return getSubTotal(orderCount) + getTax(); //dont forget the paranthesis even if there are no parameters to the function
}

takeOrder('thin', 'bacon');
takeOrder('thick', 'pepperoni');
takeOrder('cheese', 'cheese');

console.log(getSubTotal(orderCount));
console.log(getTotal());


//Scope
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

function myApartment(){
  var mailBoxNumber = 'Box 3';
  laundryRoom = 'In-unit';
  console.log('Mail box: ' + mailBoxNumber + ', Laundry: ' + laundryRoom);
}

console.log('Laundry: ' + laundryRoom + ', Mail: ' + mailRoom);

myApartment();

//For loops
var vacationSpots = ['Bahamas', 'Florence', 'California'];    //array

for(var i=0; i<vacationSpots.length; i++) {
  console.log('I would love to visit '+ vacationSpots[i]);
}

//Backwards For Loop
var vacationSpots = ['Bahamas', 'Florence', 'California'];

for(var i= vacationSpots.length-1; i>=0; i--) {
  console.log('I would love to visit '+ vacationSpots[i]);
}

//For Loop inside a For Loop
var myPlaces = ['Florence', 'California', 'Hawaii'];
var friendPlaces = ['China', 'Japan', 'Hawaii'];

for(var i=0; i<myPlaces.length; i++) {
  	for(var j=0; j<friendPlaces.length; j++) {
     if(myPlaces[i]===friendPlaces[j]) {
 		 	console.log(friendPlaces[j]); 
     		}
    }
}

//While Loop
var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';

while(currentCard !== 'Spade') {
  console.log(currentCard);
  
  var randomNumber = Math.floor(Math.random() * 4);
  
  currentCard = cards[randomNumber];
}

if(currentCard==='Spade') {
  console.log('We have found a Spade!');
}

//Prompt
var answer = prompt("What is your full name?", "JoDoe"); //second value is default, will display in box

console.log("Hello there, " + answer);

//adding jQuery
function main(){};
$(document).ready(main);

// Assigning a variable in jQuery
function main() {
 var $skillset = $('.skillset'); 
  alert($skillset);
}
$(document).ready(main);

//fade in and clickable toggle button on jQuery
function main() {
 $('.skillset').hide();
 $('.skillset').fadeIn(1000);
}
function main() {
 $('.projects').hide();
 $('.projects-button').on('click', function(){
    $('.projects').toggle();
 });
}
$(document).ready(main);

//button change colour toggle class
function main() {
 $('.skillset').hide();
 $('.skillset').fadeIn(1000);
}
function main() {
 $('.projects').hide();
 $('.projects-button').on('click', function(){
    $('.projects').toggle();
   	$(this).toggleClass('active');
 });
}
$(document).ready(main);

//leanred to only select one with $this and .next()
function main() {
 $('.skillset').hide();
 $('.skillset').fadeIn(1000);
}
function main() {
 $('.projects').hide();
 $('.projects-button').on('click', function(){
    $(this).next().toggle();
   	$(this).toggleClass('active');
 });
}
$(document).ready(main);

//Changing text in button
function main() {
 $('.skillset').hide();
 $('.skillset').fadeIn(1000);
}
function main() {
 $('.projects').hide();
 $('.projects-button').on('click', function(){
    $(this).next().toggle();
   	$(this).toggleClass('active');
   	$(this).text('Projects Viewed');
 });
}
$(document).ready(main);

//slide toggle instead of whole thing appearing at once
function main() {
 $('.skillset').hide();
 $('.skillset').fadeIn(1000);
}
function main() {
 $('.projects').hide();
 $('.projects-button').on('click', function(){
    $(this).next().slideToggle(400);
   	$(this).toggleClass('active');
   	$(this).text('Projects Viewed');
 });
}
$(document).ready(main);

//How to reverse letters in a string
function FirstReverse(str) { 
    var length = str.length - 1;
    var newString = '';
    while(length>=0){
        newString += str.charAt(length);
        length = length - 1;
    }

  return newString; 
         
}
 
FirstReverse(readline());                            

//Frankie's faster processing solution
FirstReverse(readline());


function FirstReverse(str) { 

    var length = str.length - 1;
    var temp;
    
    str = str.split('');

    for(x=length, y=0; y<x; x--, y++) {
        temp = str[y];
        str[y] = str[x];
        str[x] = temp;
    }
    str = str.join('');
    
    return str;
    
}

//fizzBuzz
//this works fine for console.log
for (var i=1; i <= 20; i++) {
  if (i % 5 === 0 && i % 3 === 0)  {
			console.log ("FizzBuzz");
		}
		else if (i % 5 === 0) {
			console.log ("Buzz");
		}
		else if (i % 3 === 0) {
			console.log ("Fizz");
		}
		else {
			console.log(i);
		}
}
//
//for a function could only get it this way
var fizzBuzz = function(n) {
    let arr = [];
  for (let i=1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0)  {
			arr.push('FizzBuzz');
		} else if (i % 5 === 0 && i % 3 !== 0) {
			arr.push('Buzz');
		} else if (i % 3 === 0 && i % 5 !== 0) {
			arr.push('Fizz');
		} else {
			arr.push(''+i+'');
		}
    }
    return arr;
};


//good if prompt and result practice
var age = prompt("How old are you?");
var message = "";
if(isNaN(age)) message = "Please enter a numeric value";
if(age < 21) message = "So young!";
if(age >= 21) message = "You're an adult!";
console.log(message);









