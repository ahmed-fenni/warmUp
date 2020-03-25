// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
var NameOfFemales = ["amal","emna","hiba","khaoula"]
var NameOfMales = ["ahmed","adam","charaf","moez"]
var NameOfInsructors  = ["farouk","insaf","houda","dhia"]
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
 function middleOfThatArry(arr){
 	var  x = Math.floor(arr.length/2)
    return arr[x]
 }
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multipliedByTwo(arr){
	for(var i=0;i<arr.length;i=i+2){
		arr[i]*=2
		
	}
    return arr;
} 
