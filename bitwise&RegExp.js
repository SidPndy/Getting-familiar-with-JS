// 'use strict';

console.log('This is for RegExp and Bitwise');

let a=5;    //101  1010
let b=4;    //100    
console.log(a&b);
console.log(a|b);
console.log(~a);
console.log(a^b);
console.log(10>>3);


let nameStr="My name is Sid. I'm 21 years and I do live in Sunwal. \
 It is wonderful to live in Sunwal.";

 console.log(nameStr.search(/sunwal/i));
 console.log(nameStr.lastIndexOf('Sunwal'));

 let regex=/sunwal/ig
 console.log(nameStr.replaceAll(regex,'Butwal'));


 console.log(/Butwal/.test(nameStr));
 console.log(/i/ig.exec('This is me Sid'));
console.log(nameStr.match(/\d/g));                              
console.log(nameStr.match(/[0-9]/g));                           //no difference with \d
console.log(nameStr.match(/\s/g));                              // whiteSpace
console.log(nameStr.match(/i+/g));                        
console.log(nameStr.match(/Sunwal+/g));                        
console.log(nameStr.match(/al*/g));                        


let aaa=11;
try {
   'Sid'.toFixedPoint(2);
} catch (error) {
    console.log(error.name);
    
}

// let x=012;                   //assigning octal num is not allowed in 'use strict'; mode
// console.log(x);

// function myFunction(){
//     return this;
// }

// console.log(myFunction());




