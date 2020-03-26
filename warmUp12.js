// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"
function reverseString(str) { 
  	var count = 0
  	var total = ""
  	var i = str.length
  	while(i>0){
  		total= total + str[i-1] + count;
         count+=1
  		str.slice(1)
  	     i--
  	}
    return total;
  } 
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function SameLength(arr) {
    var i=0
    var l= arr.length-1
    var total =[]
    while (i<(arr.length)/2){
        if (arr[i].length===arr[l].length){
            result.push(arr[i])
            result.push(arr[l])
        }
        i++
        l--
    }
    return total
}