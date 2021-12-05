// ---------------------------------------------------- //
// -------------         STRINGS     ------------------ //
// ---------------------------------------------------- //

// ---------------------------------------------------- //
// 1. Returns the result of concatenation of two strings.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
// 'aa', 'bb' => 'aabb'
// 'aa',''    => 'aa'
// '',  'bb'  => 'bb'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function concatenateStrings(value1, value2) {
return ;
}
  var a = prompt('enter a');
var b = prompt('enter b');
console.log( a + b); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 2. Returns the result of string template and given parameters firstName and lastName.
// Please do not use concatenation, use template string!!!
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
// 'John','Doe'      => 'Hello, John Doe!'
// 'Chuck','Norris'  => 'Hello, Chuck Norris!'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getStringFromTemplate(firstName, lastName) {
 return
}
let firstName = prompt('Enter First Name:');
let lastName = prompt('Enter Last Name:');
console.log(`Hello, ${firstName} ${lastName}!`); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 3. Returns a string that repeated the specified number of times.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
// 'A', 5  => 'AAAAA'
// 'cat', 3 => 'catcatcat'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function repeatString(value, count) {
    var new_str = '';
    while (n-- > 0) new_str += str;
    return new_str;
}
var f = prompt('enter number of repetitions');
console.log(repeatStr('Snow',f));
} */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 4. Remove the first and last angle brackets from tag string
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   '<div>' => 'div'
//   '<span>' => 'span'
//   '<a>' => 'a'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/*  function unbracketTag(str) {
    
} */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 5. Extracts e-mails from single string with e-mails list delimeted by semicolons
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
//   => [
//      'angus.young@gmail.com',
//      'brian.johnson@hotmail.com',
//      'bon.scott@yahoo.com'
//   ],
//
//   'info@gmail.com' => ['info@gmail.com']
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function extractEmails(str) {
    
}
var emails ='angus.young@gmail.com;\n brian.johnson@hotmail.com;\n bon.scott@yahoo.com';
console.log(emails); */
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// -------------         NUMBERS     ------------------ //
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// 6. Returns an area of a rectangle given by width and heigth.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   5, 10 => 50
//   5, 5  => 25
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getRectangleArea(width, height) {
  return ;  
} 
width = prompt('enter width');
height= prompt('enter height');
console.log(width*height);*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 7. Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  5*x - 10 = 0    => 2
//  x + 8 = 0       => -8
//  5*x = 0         => 0
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getLinearEquationRoot(a, b) {
    
} let a = prompt('enter a');
let b = prompt('enter b');
let x = 0-a*b;
console.log(x);*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 8. Returns a number by given string representation.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  '100'     => 100
//  '37'     => 37
//  '-525.5'     => -525.5
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function parseNumberFromString(value) {
return ;
}
 a = prompt('enter number');
console.log(Number(a)); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 9. Returns a distance beetween two points by cartesian coordinates.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  (0,0) (0,1)    => 1
//  (0,0) (1,0)    => 1
//  (-5,0) (10,-10) => 18.027756377319946
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getDistanceBetweenPoints(x1, y1, x2, y2) {
    
} */
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// -------------         ARRAYS      ------------------ //
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// 10. Returns an index of the specified element in array or -1 if element is not found
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  ['Ace', 10, true], 10    => 1
//  ['Array', 'Number', 'string'], 'Date'    => -1
//  [0, 1, 2, 3, 4, 5], 5    => 5
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function findElement(arr, value) {
    
} */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 11. Returns an array of positive numbers from the specified array in original order
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
//  [-1, 2, -5, -4, 0] => [ 2 ]
//  [] => []
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* var myArray = [-33, 27, 6, 0, -42, -11, 69, ];

 function getArrayOfPositives(array) {
  return array.filter(value => value > 0);
}
console.log(getArrayOfPositives(myArray)); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 12. Returns the array of uppercase strings from the specified array
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]
//  => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ],
//   [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getUpperCaseStrings(arr) {
    return (a);
}
let a=prompt('enter letter:');
console.log(a.toUpperCase()); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 13. Inserts the item into specified array at specified index
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
//   [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function insertItem(arr, item, index) {
    return 
}
const readyArray = [15, 24, 6, 1, 46] ;
var a = prompt('enter element');
var b = prompt('enter position');
readyArray.splice(b, 0, a);
console.log(readyArray); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 14.  Returns the n last items of the specified array
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
//   [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getTail(arr, n) {
    
} */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 15. Returns every second item from the specified array:
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
//  [ 'a', 'b', 'c' , null ]  => [ "b", null ]
//  [ "a" ] => []
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getSecondItems(arr) {
   return;
}
var arr = [44,25,78,21,15,57,66,88,91,17,11,42]; 
var i = 0;
var a = arr.filter(e => (++i) % 2 === 0);
console.log(a); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 16.  Returns a number of all occurences of the specified item in an array
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  [ 0, 0, 1, 1, 1, 2 ], 1 => 3
//   [ 1, 2, 3, 4, 5 ], 0 => 0
// [ 'a','b','c','c' ], 'c'=> 2
//   [ null, undefined, null ], null => 2
//  [ true, 0, 1, 'true' ], true => 1
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/*  var str = prompt('enter something');
    var symb =prompt('enter symbol');
function findAllOccurences(arr, item) {
 for (var count = +1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));

  return count;
}

console.log(count(str, symb)); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 17. Creates an array of integers from the specified start to end (inclusive)
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  1, 5  => [ 1, 2, 3, 4, 5 ]
//  -2, 2  => [ -2, -1, 0, 1, 2 ]
// 0, 100 => [ 0, 1, 2, ..., 100 ]
// 3, 3   => [ 3 ]
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getIntervalArray(start, end) {
 return
}
var range = {
  from : prompt('enter num'),
  to : prompt('enter num'),  
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (var num of range) {
  console.log(num);
} */
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// -------------       DATA TASKS    ------------------ //
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// 18.  Parses a rfc2822 string date representation into date value
//       For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  'December 17, 1995 03:24:00'    => Date()
// 'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
// 'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function parseDataFromRfc2822(value) {
    
}
let a
a= Date.parse('Thu, 12 Jan 2021 20:04:00');
console.log(a); */
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// -------------       OBJECTS       ------------------ //
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// 19.  Returns the rectagle object with width and height parameters and getArea() method
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
// const r = new Rectangle(10,20);
//  console.log(r.width);       // => 10
//  console.log(r.height);      // => 20
// console.log(r.getArea());   // => 200
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function Rectangle(width, height) {

} */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 20.  Returns the 'Fizz','Buzz' or an original number using the following rules:
//       1) return original number
//        2) but if number multiples of three return 'Fizz'
//         3)  for the multiples of five return 'Buzz'
//        4) for numbers which are multiples of both three and five return 'FizzBuzz'
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  2 =>  2
//   3 => 'Fizz'
//   5 => 'Buzz'
// 4 => 4
//  15 => 'FizzBuzz'
// 20 => 'Buzz'
//   21 => 'Fizz'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getFizzBuzz(num) {

} 
var a= prompt('enter num');
if (a % 5 == 0 && a % 3 == 0){
console.log('FizzBuzz')
} else if (a % 5 == 0 && a % 3 !==0){
console.log ('Buzz')
} else if ( a % 3 == 0 && a % 5 !== 0){
console.log('Fizz')
}else{
console.log(a);
}
*/
// ---------------------------------------------------- //