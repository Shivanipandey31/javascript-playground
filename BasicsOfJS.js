console.log("hello")
let x=10;
{
    let x=5;
    console.log(x)
}
console.log(x)

// primitive data type
let a =null;
let b= 30;
let c=BigInt('300');
let d= true;
let e=undefined;
let f="simran"
let g=Symbol("hello") 
console.log(a,b,c,d,e,f,g);
console.log(typeof(a), typeof(b), typeof(c), typeof(d),typeof(e),typeof(f),typeof(g))

objects
const item={
    "name":"simran",
    "class":"CS-2E",
    "branch":"CSE",
    "college":"PSIT"
};
console.log(item)
console.log(item["name"])

// operators

let first=10;
let second=10;
console.log("first == second",first == second)// we compare only the value
console.log("first != second",first != second)
console.log("first === second",first === second) //we compare teh value as well as the datatype
console.log("first !== second",first !== second)

// conditional operator

// let n= prompt("what is your name?")
// console.log(n)

let age=prompt("enter your age")
console.log(typeof(age))
ag=Number.parseInt(a)
console.log(typeof(ag))
if(age>=18){
    alert("you are ready to vote")
}
else{
    alert("you are not eligible to vote")
}
if(age>=18){
    alert("you are ready to vote")
}
else if(age<0){
    alert("the age is invalid")
}
else if(age>0 && age<9){
    alert("the age is between 0 and 9")
}
else if(age>9 && age<18){
    alert("the age is between 0 and 9")
}
else{
    alert("you are not eligible to vote")
}

// ternary operator

alert("you can ",(age>=18? "vote" : "not vote"))

for(let i=0;i<5;i++){
    console.log(i)
}

// print first n natural number
sum=0
let n=prompt("enter the range")
for(let i=1; i<=n ; i++){
    sum+=i
    console.log(i)
}
console.log(sum)

let obj ={
    "a":10,
    "b":20,
    "c":30,
    "d":40,
}

for(let a in obj){
    console.log(a)
    console.log("the value of "+a+ "is "+ obj[a])
}

// for of loop
// for(let h of "SHIVANI"){      // it is only applicable on strings if we will write obj in place of "SIMRAN" it will throw out an error that obj is not iterable.
//     console.log(h)
// }

//factorial number

const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Not exist');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}