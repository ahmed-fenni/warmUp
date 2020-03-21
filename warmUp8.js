// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
   function ObjKey(obj) {
    var total= (Object.keys(obj))
    return total
}
// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2
  function objLength(Obj) {
    return    Object.keys(Obj).length 

}
// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
 function ObjSort(arr){
 	var total = []
    for(var i = 0;i<arr.length;i++){
    if (Object.values(arr(i))<Object.values(arr(i+1))){
    	total.unshift(arr(i+1))
    }
       
     else if( Object.values(arr(i))>Object(arr(i+2))){
     	total.unshift(arr(i))
     }
      else total.push(arr(i+1))
    
     	
    
 }
 return total
 }
   
