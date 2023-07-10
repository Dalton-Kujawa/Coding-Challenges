function FirstReverse(str) { 
 let brokenString = str.split("")
 let reversedString = []

 for (i = brokenString.length-1; i >= 0;i--){
   reversedString.push(brokenString[i]);
 }
  
  str = reversedString.toString();
  // code goes here  
  return str; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
