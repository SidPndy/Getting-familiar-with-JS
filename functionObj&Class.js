let nameFunction=function (){
    return this.name;
}
const ids={
    name:'Sid',
    roll:90,
    college:'BMC',
    myFunc: nameFunction,
}

const details={
    company:'google',
    name:"Sundar",
    From:'India',
    myFunc: nameFunction,
}


let px=ids.myFunc.bind(ids);
console.log(px());
console.log(details.myFunc.bind(details)());

// const myObj=[
//     {
//         company:'google',
//         name:"Sundar",
//         From:'India',
//         myFunc: nameFunction,
//     },

//     {
//         name:'Sid',
//         roll:90,
//         college:'BMC',
//         myFunc: nameFunction,
//     }

// ];

// console.log(myObj[0].myFunc.bind(myObj[0])());


let hii=()=>"hello World";                      //fat arrow function
console.log(hii());

function sum(a,b){                              //Normal function
    return a+b;
}

console.log(sum(9,2));

let myFuncts=new Function('a','b','return a*b');            //function constructor 
console.log(myFuncts(5,4));

const x=function(a,b){return a/b};                      //function in a variable
console.log(x(20,4));


console.log((function(){                               //calling itself
    return 'Im sid';
})());

function thisIsFunc(){
    return arguments.length;                        //returns the number of parameters used.
}
console.log(thisIsFunc(4,5,4,23));


console.log(x.toString());                      //shows the function as a string

const func=()=>'This is arrow function with zero parameters';
console.log(func());



function sumAll(){
    let sum=0;
    for(let i=0; i<arguments.length ;i++){
        sum+=arguments[i];
    }

    return sum;
}

console.log(sumAll(9,1,34,200));


const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
  }

  console.log(myObject.fullName());


  //==============call() method====================

  const laptops={
      name:function(details){
          return this.name + ' ' + this.model + ' ' + this.yearOfProduction + details;
      }
  }


  const laptop1={
      name:"MSI",
      model:"20SK92KL",
      yearOfProduction:2015
  }

  const laptop2={
    name:"Dell",
    model:"1KL45K9S0",
    yearOfProduction:2016
}

console.log(laptops.name.call(laptop1,' '));
console.log(laptops.name.call(laptop1,': It is a top rated laptop of 2021'));  
//call() also supports additional arguments.


console.log(laptops.name.apply(laptop2,[': This is the best laptop of 2018']));
//.apply() uses arguments in an array. It is same as call() method.



console.log(Math.max(1,2,34,21,44,11,56,78,111,21,44,323));
console.log(Math.min.apply(null,[1,2,34,21,44,11,-88,56,78,111,21,44,323]));
//here the 1st argument of apply() method has nothing to do. It can be any value of any type.


const employees={
    firstName: 'Martha',
    lastName: 'Andrew',
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}

const employee1={
    firstName:'Adam',
    lastName:'Smith',
}
const employee2={
    firstName:'Sundar',
    lastName:'Pechai',

}

console.log(employees.fullName.bind(employee2)());
//bind() is used to preserve `this`. while usinig (like: setTimeOut() method ) we loose `this`.
//we can also use call() or apply() method but then we'll have no longer timeOut, it is shown immediatelu.


//Clouser
//clousers are importent to keep the variables safe.
//In a normal function the function can use a outer variables
function callMe(){
    let message="call me at 7";
    return ()=>{
        return 'Hey Sam '+ message;
    };

}

const atSeven=callMe();
console.log(atSeven());




function testing(){
let message='Hello boiz';
    
    return 'hey '+ message;
}

message='Im going to bed';

console.log(testing());



// for(var i=1;i<6;i++){
//     function clous(x){
//      setTimeout(()=>{
//          console.log(x);
//      },2000*x);
//     }
 
//     clous(i);
//  }


console.log(((a)=>{
    return a;
}).call(null,7));



class NameDetails{
    constructor(name,lastname,dob){
        this.fName=name;
        this.lName=lastname;
        this.year=dob;
        
    }

    details(){
        return `My name is ${this.fName + " "+ this.lName} and I was born on ${this.year}`;
    }
}

let myName=new NameDetails('Siddhartha',"Pandey",2001);
let SrijanName=new NameDetails("Srijan","Gyawali", 1999);
let SachinName=new NameDetails("Sachin","Pantha", 2002);

console.log(myName.details());
console.log(SachinName.details());
console.log(myName.fName);
console.log(SachinName.lName + " "+ SachinName.year);




//Inheritance and use of "super" and getter and setter.
class Animals{
    constructor(name,numbers){
        this._animalName=name;
        this.AnimalNumbers=numbers;

    }
    get animalName(){
        return this._animalName;
    }
    set animalName(x){
        this._animalName=x;
    }
    animalDetails(){
        return "The "+ this.animalName +"s are "+this.AnimalNumbers + " in total and";
    }
}

class Endangered extends Animals{
    
    constructor(name,numbers,lifeExp){
        super(name,numbers);
        this.years=lifeExp;

    }

    NepalAnimals(){
        return this.animalDetails() + " has life expectancy of "+ this.years;
    }
}

let tiger=new Endangered("Tiger",240,40);
console.log(tiger.NepalAnimals());

tiger.animalName="Leopard";                 //Use of getter/setter.It is used to modify the value.
console.log(tiger.NepalAnimals());
//console.log(tiger);



function mul(a){
    let b=5;
    return a*b;
}

function add(x,y,z){
    let sum=x+y;
    return z(sum);
}

console.log(add(3,5,mul));




function name(para){
    return para + " Pandey";
}

function nam(fnam,fb){
    let a=fnam+' Raj';
    return fb(a);
}

console.log(nam('Siddhartha',name));
   
