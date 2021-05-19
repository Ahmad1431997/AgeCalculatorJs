// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day)){
    return true;
  }else{
  return false;
}
}


// This functions checks if the person is or above 18 years of age, return true/false
/*let y1 = new Date();
 y1 = y1.getFullYear();
function checkOverEighteenFn(year,month,day) {
  if ((y1-year)>18) return true;
  return false;
}*/
function checkOverEighteenFn(year,month,day){
  let y = new Date().getFullYear();
  let m = new Date().getMonth();
  let d=new Date().getDate();
  if ((y-year)>18 && month<=12 && day<=31 ) return true;
  return false;
}


//console.log(fn2);
function calculateAgeFn(year, month, day) {
  let fn1 = checkParamsFn(year,month,day);
  let fn2 = checkOverEighteenFn(year,month,day);
  let y = new Date().getFullYear();
  let m = new Date().getMonth();
  let d=new Date().getDate();
  if ( fn1 && fn2 ){
    let age = y-year;
  //  Math.round(age);
  // let a =(`Your Age is : ${age}`);
    return age;
  }
   else {
    return ("error") ;
   }
}
calculateAgeFn(1997,3,14);
// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;
