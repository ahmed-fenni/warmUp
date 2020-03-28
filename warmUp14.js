// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:

// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset(arr,sup){
	var result =[]
	for(i=0;i<arr.length;i++){
		for(j=0;j<sup.length;j++){
			if(arr[i]===sup[j]){
				result.push(sup[j]) 
			}
		}    
	}
   if(result.length===sup.length){
   	return true
   }
    return false
}