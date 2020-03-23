// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
   function array(arr){
   	 
   	if (Array.isArray(arr)){
   		return true
   	}
        return false
   }
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4],2)=>[1,2]
function FirstElement(arr,count){
	 debugger
	 var total=[]
  for(var i = 0;i<count;i++){
  	total.push(arr[i])
  }

	return total;
}
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

 function convert(obj){
 debugger
 	var total=[]
 	for(i=0;i>0;i++){
       total.push(Object.keys(obj[i]))
       total.push(Object.values(obj[i]))
            
}
 return total
    
 	}
 




// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
