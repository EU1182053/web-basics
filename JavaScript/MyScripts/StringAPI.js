/* constructor functions*/


var s1="hello"; /*direct initialization  : literals */
var s2=new String("Welcome"); /* object created with new. String object */

// string object are immutable
var s3=s1+" world";
s1=s1+" world";
/*String API length, charAt, indexOf , lastIndexOf, concat, startWith, endsWith, slice, substring,
substr(deprecated),toUpperCase, toLowerCase, trim, ===*/

let cName='Neosoft Technologies Limited Limit';
console.log(cName);
console.log(cName.length);
let ch=cName.charAt(2);
console.log(ch);
console.log(typeof ch);
let ch1=cName.charAt(50);
console.log(ch1);
console.log(cName.indexOf('os'));
console.log(cName.indexOf('Limited'));
console.log(cName.indexOf('limited'));
let index=cName.toLowerCase().indexOf(('liMIted').toLowerCase());
console.log(index);
console.log(cName.indexOf('o'));  //2
console.log(cName.indexOf('o',10)); // 13
console.log(cName.lastIndexOf('o')); // 15
console.log(cName.lastIndexOf('o',10)); //4

cName='Neosoft Technologies Limited Limit';

console.log(cName.indexOf('o'));  //2
console.log(cName.indexOf('o',-10)); // 2
console.log(cName.lastIndexOf('o')); // 15
console.log(cName.lastIndexOf('o',-10)); //-1

let cons=cName.concat(', Dadar');
console.log(cName);
console.log(cons);

 s1="Hello";
console.log(s1.concat(' World'));
console.log(s1);

s1=s1.concat(' World');
console.log(s1);


let names =['Hari','Pari','Krishna','Sai','Subodh','Suman','Kishori'];
// display names ending with 'ri'




cName='Neosoft Technologies Limited Limit';
console.log(cName.substring(2,10));
console.log(cName.slice(2,10));
console.log(cName.substring(2));
console.log(cName.slice(2));
console.log(cName.substring());
console.log(cName.slice());

console.log(cName.substring(-8,-2));  //0,0 : empty string
console.log(cName.slice(-8,-2));  // e........mi
console.log(cName.slice(-8,-15));  // si > ei
console.log(cName.substring(-12,13)); // 0,13
console.log(cName.slice(-12,13));  //i, o
console.log(cName.slice(-20,24));  //l, mi

let india1="   mY India    ";
let india2=" my INdia";

console.log(india1===india2);
let ts1=india1.trim();
let ts2=india2.trim();
console.log(ts1);
console.log(ts2);
console.log(ts1===ts2); //false
console.log(ts1.toUpperCase()===ts2.toUpperCase()); //true

let comparsion= india1.trim().toUpperCase()===india2.trim().toUpperCase();
console.log(comparsion);

// include search split padStart padEnd charCodeAt match replace

let str1 = 'siddhesh'
console.log('includes '+str1.includes('e'))

let str2 = 'id'
console.log('search '+ str1.search(str2) );