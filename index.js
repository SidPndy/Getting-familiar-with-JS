
function fullName(name,lName){
    
   
    console.log('My name is '+name +' '+lName);
    
}

fullName('Siddhartha','Pandey');
let array=[1,2,3,4,22,12,11,23,34,55,10,99]; 

array[0]=100;
console.log(array[9]);
console.log(array[0]);
console.log(array[1]);


console.log(array.indexOf(12));

function greaterThan(value){
    return value >=10;
}

let iWant=array.filter(greaterThan);
console.log(iWant);


//Arrays

let nam=['sid','suraj', 'prem', 'arjun'];
nam.splice(0,0,'arun','sajin');
console.log(nam);
console.log(nam.length);
console.log(nam.indexOf('sid'));
console.log(nam[2].split(""));



//console.log(nam[nam.length-1]);

nam.forEach(elements=> {
    
    let el=elements[0].toLocaleUpperCase() + elements.slice(1,1000);  
    
    console.log(el.replace(/sajin/i,'Pandey'));

});


const namarr=['Prabhat', 'Sushant', 'Mahesh', 'Ram', 'Alex', 'Suman'];
namarr.splice(2,0,'Sundar', 'Asmita');
console.log(namarr);
namarr[1]='Susmita';
namarr.push('Samar');                     // push() adds a element to  last index
console.log(namarr.pop());                // pop() removes element from last index
console.log(namarr.splice(6,2));          // splice(index,numberOfElementsToRemove) used to remove element/s of/from a particular index. The spliced elements forms a array
console.log(namarr.shift());              // shift() removes element of 1st index i.e 0 and shifts all other to the consecutive lower index.
console.log(namarr.length);
console.log(namarr.unshift('Raj'));
console.log(namarr);

// namarr=['pramisha', 'sarmila', 'Smith', 'William'];         //cannot reassign for constant array
// console.log(namarr);
console.log(namarr.toString());
console.log(namarr.join(" | "));


console.log(namarr.concat(nam));        //arr1.concat(arr2) can be used to merge arr2 in arr1
console.log(namarr.concat('Nagarjun')); //aslo can be used to add element

console.log("==================Splice and slice==================");

const frn=['utsav', 'pramod', 'narayan', 'saurav', 'Bishal'];
//console.log(frn.splice(1,2));          //splice returns the deleted elements as a array
console.log(frn.slice(1,2));             // slice returns the range of elements without deleting elements from original array. NOTE* slice doesn't include last index. i.e. splice(1,3). here index 3 isn't included
console.log(frn);
console.log(frn.splice(1,2));
console.log(frn);



//String methods

let a='My name is Sid. He lives in butwal and sid is a good person butwal';
console.log(a.indexOf('butwal'));
console.log(a.indexOf('butwal', 30));
console.log(a.lastIndexOf('butwal'));
console.log(a.search('in'));
console.log(a.match(/id/g));
console.log(a.includes('id'));
console.log(a.includes('id',50));
console.log(a.startsWith('My'));
console.log(a.endsWith('wal'));
console.log(a.replace(/sid/ig,'Pandey'));  //i= insensitive and g= global.

let t='                                 horse       ';
let t2="Cow";

console.log(t2.padEnd(50).concat(' and ',t.trim()));
console.log(t2.charCodeAt(2));
console.log(t2[1]);

let p='Siddhartha Pandey';
let splitted=p.split(" ");
console.log(splitted[1].charAt(3));


//String literals and templates

let dat=`Hello world! This /\\ is a "test" and my name is ${p}`;
console.log(dat);
console.log(`The total price is ${(23+22.324+21.44+99).toFixed(2)}`);

//Numbers


// console.log(99999999999999999999);
// console.log(NaN+'5');

// let num=9;
// while( num !=Infinity){
// num=num*num;
// console.log(num);

// }

console.log(021);  //octal
console.log(0xfac); //Hex

console.log((155).toString(16));  //using .toString(base) for num conversion
console.log((298).toExponential());
let x=(124.983).toFixed(2)
console.log(x);

let numbr='1233.99';
console.log(parseFloat(numbr));
console.log(Date());
console.log(Number.MIN_VALUE);