/*const prompt = require('prompt'); 
//Exersise 2 
const number1 = parseInt(prompt('Enter number1')); 
const number2 = parseInt(prompt('Enter number2'));
let sum=number1+number1; 
console.log(sum);*/
// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

//Exercise 1 
/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });*/
/*function greet(){
    readline.question('Who are you?', name => {
        console.log(`Hello ${name}`);
        readline.close();
      });
    //console.log('Hello ' + name);
}
greet(); */
/*
//Exercise 2 
const readline1 = require('readline1').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const readline2 = require('readline2').createInterface({
    input: process.stdin,
    output: process.stdout
  });
function sumNumber(){
    //return num1+num2; 
    readline1.question('Enter number1?',(num1) => {
        readline2.question ('Enter number2?', (num2) =>{
            console.log(`The sum of numbers ${(num1)(+num2)}`);

        })
    
    //  readline.question('Enter number2?', num2 => {
        // console.log(`The sum of numbers ${num1+num2}`);
    readline.close();
    }); 
//console.log(sumNumber(2,2));
sumNumber();*/ 
/*
//Exercise 1 
function greet(name){
    console.log('Hello ' + name);
}
greet('Wasayf'); 
//Exercise 2 
function sumNumber(num1,num2){
    return num1+num2; 
}
console.log('The sum of 2 numbers = '+sumNumber(2,2)); 

//Exercise 3 
function evenORoddNumber(num){
    if(num%2==0)
    {
        console.log('The number is even ');
    }
    else
    console.log('The number is Odd'); 
 }
(evenORoddNumber(4));

 //Exercise 4 
function fibonacciSequence(number) {
      let Result=0;
      let num1 =0; 
      let num2 =1; 
      for(let i=0; i<=number; i++){
        console.log(num1); 
        Result=num1+num2;
        num1=num2;
        num2=Result;
    }
}
fibonacciSequence(5); 
//Exercise 5 
function factorialNumber(number){
    let fact=1;
    console.log('The factorial ' +number+'! is: '); 
    for(let i=1;i<=number;i++) {
     fact= fact*i; 
    }
     return fact; 
}
console.log(factorialNumber(5)); 

//Medium Exersise 
// Exersise 1  
function sumOfnumbers(array){
    let sum=0; 
    
   for(let i of array) 
       sum=sum+i;
    
       return sum;
};
console.log('The sum of array = '+ sumOfnumbers([1,2,3,4,5]));

// Exersise 2 
let person_1={
 Name:'Salem',
 Number:0555555555
};
let person_2={
    Name:'Ahlam',
    Number:0546464646
};
*/