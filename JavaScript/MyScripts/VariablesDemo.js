/*
Statically typed lang:
int a, float b, char c, boolean s, String ss
a=45;  a=67.8 (error);

dymamically typed language

var nn;
nn=123;   //number  
nn="india"   // string  
*/
var companyName="Neosoft";
console.log(companyName);
console.log(typeof companyName);
companyName=5678866;
console.log(companyName);
console.log(typeof companyName);
var myLocation;
myLocation="Rabale";
//const contact;
var myLocation="Dadar"; // allowed to redeclar var type variable
let contactNumber=6786767688;
/* let contactNumber=767676767; */ // not allowed to redeclar let type variables
contactNumber=767676767;
const pie=3.142;
/* pie=3.14; */ // can not reassign value to const variables

/* normal function, annonymous function, arrow function */
function add(){
  console.log(myLocation);
  var num1=78;
  var num2=67;
  var result=78+67;
 console.log("Result is"+result);
}// body ended
add();

function add1(num1,num2){
    console.log(num1);
    console.log(num2);
    return num1+num2;
}
var r3=add1();
console.log(r3);
var r1=add1(23);
console.log(r1);
var r2=add1(23,67);
console.log(r2);
var r2=add1(23,67,89);
console.log(r2);

function add2(...numArray){  // to accept 0 to n arguments
    console.log(numArray);
    var sum=0;
    //normal for loop
    /*  for(var i=0;i<numArray.length;i++){
            sum=sum+numArray[i];
    }  */   
   /*  for(var i=numArray.length-1;i>=0;i--){
        sum=sum+numArray[i];
    }  */
    //for of loop
    for(let ele of numArray){
        sum=sum+ele;
    }
    return sum;
}
var r1=add2();
console.log(r1);
var r2=add2(23);
console.log(r2);
var r3=add2(23,67);
console.log(r3);
var r4=add2(23,67,89);
console.log(r4);
var r4=add2(3,4,2,6,1,4,3,5,1,2);
console.log("Sum is"+r4);  // concatenation 10+10=20 "10"+"10"=1010 
console.log(`Sum is ${r4}`);
let ar=[3,4,2,6,1,4,3,5,1,2]
console.log( "sum of "+ar +" is:"+r4);
console.log(`sum of ${ar} is: ${r4}`); //EL : ${put variables here}


function test(num=45){
    console.log(num);
}
test();
test(67);


function Demo(){
    //var type variables, inside function anywhere we declare, have functional scope
    for(var i=0;i<=5;i++){
        console.log("inside loop:"+i);
        if(i==5){
            var j=1;
            let k=9;
            console.log(k);
        }// end if  // scope of k ends
    }/// end for
    console.log(`Outside loop: ${i}`);
    console.log(j);
    // let type variables, inside function,  have block scope where they are declared
   // console.log(k);
}// scope of i and j ends

Demo();