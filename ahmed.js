// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
function(firstname,lastname){
    return firstname +''+ lastname
}
function multiple3(n){
  if ( (n%3 === 0) ){
  	return 'yes'
        }
    return 'no'
  }
var ages = [13,14,13,15,16,17,19,13,16,15]
 function  avergeage(array){
 	var total= 0
 	for(var i=0;i<array.length;i=i+1){
 		total=total+array[i]
 	}
     return total
 }
 function ageinseconds(age){
 	return age * 365 * 24 * 60 * 60 
 }