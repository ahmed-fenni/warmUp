// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
 function  larger(string1,string2){
 	if (string1.length > string2.length){
 		return string1
 	}
 	    return string2

 }
// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
    var f = 0
     function counting() { 
      
      return f=f +1

     
 } 


// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
   function meetGreet(n){
   	var result = ''
   	var i = 0
  while ( i === n ){
  	  result = 'welcome' + i +', ' + '\n' 
   	   }
  return result 
  }

// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
//

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.

function shortestWord (string){
	
}