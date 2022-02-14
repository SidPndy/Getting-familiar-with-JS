


const num=[4,3,22,43,21,55,66,-10,433,27,76,54,1];
console.log(Math.max.apply(null,num));
console.log(Math.min.apply(null,num));
console.log(num.sort(function(a,b){
    return a-b;
}).reverse());

const nam=['Abhisheck', 'Barun', 'Zebra', 'Utsav', 'Aaarpan', 'Smith'];
console.log(nam.sort().reverse());
console.log(nam.lastIndexOf("Barun"));
//console.log(nam.reverse());

const details=[
    {name:"Sid",dob:2001,id:2},
    {name:'Sujan', dob:2000,id:1},
    {name:'Puran', dob:1996,id:5},
    {name:'Ashok',dob:2013,id:4},
    {name:'Krishna', dob:2005,id:3}
];

console.log(details.find(a=>{
    return a.id==5;
}));

let sortById=details.sort(function(a,b){
    return a.id -b.id ;
});
console.log(sortById);



// let srt=details.sort(function(a,b){return a.dob-b.dob});
// console.log(srt);

// let strsort=details.sort(function(a,b){
//     let x= a.name.toLocaleLowerCase();
//     let y= b.name.toLocaleLowerCase();
//     if(x>y)
//     return 1;

//     return -1;
// });
// console.log(strsort);


// details.forEach((values)=>{
//     console.log(values.id + '    ' + values.name.padEnd(10) + values.dob);
// });

function myFunc(values){
    console.log(values.id + '    ' + values.name.padEnd(10) + values.dob);

}
details.forEach(myFunc);


const numMap=[1,4,5,2,8,1];

const a=numMap.map(val=>{                 //Map returns in array but forEach doesn't return
    return val*2;
});

console.log(a);

const largeNum=numMap.filter(values=>{
    return values>4;
});
console.log(largeNum);



let smallNum=numMap.find(values=>{
    return values<4;
});

console.log(smallNum);
console.log(largeNum[1]);
let na=numMap.reduce((mulAll,values)=>{
    return mulAll*values;
});
console.log(na);



let aNum=numMap.every(values=>{
    return values>0.5;
});
console.log(aNum);



let sNum=numMap.some(val=>{
    return val>15;
});
console.log(sNum);

console.log(numMap.findIndex(val=>{return val>5}));
 

let naam='Siddhartha'
console.log(Array.from(naam));
console.log(naam.split(""));

console.log(new Date(2001,5,21,2,0,0,0));

const tim=new Date();
console.log(tim.toUTCString());
console.log(tim.toISOString());
//console.log(Date.parse(tim));
const dateArr=[`${tim.getDay()+1}`, `${tim.getFullYear()}`+ '\/' + `${tim.getMonth()+1}` +
 '\/' + `${tim.getDate()}`, `${tim.getHours()}`+ ':' +`${tim.getMinutes()}`];
console.log(dateArr);

tim.setFullYear(2001,05,21);
console.log(tim);



//MATHS

console.log(Math.SQRT1_2);
console.log(Math.round(234.1));
console.log(Math.ceil(234.1));
console.log(Math.floor(234.7));
console.log(Math.pow(3,4));
console.log(Math.sqrt(81));
console.log(Math.abs(-99));
console.log(Math.sin(30*(Math.PI/180)).toFixed(2));
console.log(Math.tan(30 * (Math.PI/180)));

const numberArray=[22,12,2,45,65,33,87,99,21,48];
console.log(Math.max.apply(null,numberArray));
// console.log(Math.floor(Math.random()*100)+500);

function randomNumber(min,max){
    return Math.floor(Math.random()* (max-min))+min;
}
console.log(randomNumber(1,10));
console.log(Boolean(0));


const laptop=['lenevo','dell','MSI', 'Acer'];

switch(laptop[3]){
    case 'lenevo':
        console.log('Good laptop');
        break;
    default:
        console.log('Name not found');
        break;
    case 'dell':
        console.log('Quite better');
        break;
    case 'MSI':
        console.log('Best');
        break;
    case 'Acer':
        console.log('Best of Best');
        
}



for(let i=0;i<5;i++){
    console.log("Hello World!");

}

const students={firstName:"sid", lastName:'Pandey', std:"BSc. Csit"};

for(let a in students){
    console.log(students[a]);
}

for(let a in details){
    console.log(details[a].dob);
}

for(let a of details){
    console.log(a.name);
}

const me="siddhartha";
for(let a of me){
    console.log(a);
}

let p=1;
// while(p<=10){
//     console.log(p + ' sid');
//     p++;
// }

let count=1;
do {
   console.log("PANDEY");
   count++;
} while (count>10);

for(let i=0;i<=10;i++){
     if(i==4){break}
    console.log(i);
}
console.log('                 ----------------         ');

for(let i=50;i<=60;i++){
    if(i==55){continue}
   console.log(i);
}

const mySet=new Set();
mySet.add("Sid");
mySet.add("Suraz");
mySet.add("Prabin");
console.log(mySet);

mySet.delete('Suraz');
console.log(mySet);
console.log(mySet.has("Suraz"));
console.log(mySet.values());
mySet.add("Naseem");



// let namesss=mySet.forEach(val=>{
//     console.log(val);
// });

for(let x of mySet){
  console.log(x);
}



 const asSet=new Set(["Samir","Sulav","Sundar"]);

 console.log(asSet.size);
 console.log(Array.from(asSet));


 const myMap=new Map([
     ['company','google'],
     ['CEO','Sundar'],
     ['employees',5430000],
     ['location','Silicon Valley']
 ]);

 myMap.set('branches', 80000);
 myMap.set('parent','Alphabet');

 console.log(myMap.size);
 console.log(myMap.has('location'));
 console.log(myMap.get('location'));

 console.log(myMap);
 console.log(myMap.entries());

 let myMapArray=Array.from(myMap);
 console.log(myMapArray[0][1]);

for(let x of myMap){
    console.log(x);
}

myMap.delete('employees');
myMap.delete('branches');

console.log(myMap);

for(let x of myMap){
    console.log(x[1] + ':' + x[0]);
}