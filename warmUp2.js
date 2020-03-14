// 1 - Complete the function cube that returns the cube of x:

function cube(x) {
  x*x
}

// 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

function sameLength(string1, string2) {
  if (string1.length = string2.length){
  	return true;
  }
   return false
}

// 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.

function scoreToGrade(number) {
        if (number >= 80){
        	return 'A'
        }
        else if  (number>= 60 ){
        	return 'B'
        }
        return  'C'
}
// USE RECURSION
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) {

  var  result =''
  var i = 0
  while (i<count){
  	result = result + str
  	i=i+1
}
return result 
}

