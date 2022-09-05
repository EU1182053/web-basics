
let bookObj={
    'id':345,
    'name':'Java',
    'price':678.5
}
let arre = new Array()
let ar1=[45,67,34,23,45,67];
let ar2=['fg',"ty",'df','as'];
let mixtrar=[23,'hi',true,'hello','welcome',12,13,false];

let bookArray=[
  {
    'id':345,
    'name':'Basics of Java',
    'price':678.5
  },
  {
    'id':145,
    'name':'Learn Web Basics',
    'price':578.5
  },
  {
    'id':305,
    'name':'Learn Java',
    'price':688.5
  },
  {
    'id':342,
    'name':'Introduction to Python',
    'price':678.5
  }

];

let cityArr=['mumbai','pune','jaipur','satara','sangli','solapur']

//length, join, push,pop, shift, unshift, sort, reverse
// check length
// arraya are mutable
// sort the array
// reverse array

console.log('length '+cityArr.length);

console.log('sort '+cityArr.sort())

console.log('reverse '+cityArr.reverse())

console.log(cityArr.length);
// push
let l=cityArr.push('udaypur'); // added from last
console.log(l);

cityArr.unshift("shivgad"); // adding from front
console.log(cityArr);

console.log(cityArr.length);
cityArr[2]='nanded';
console.log(cityArr);
// pop
let poped=cityArr.pop();  // removed from last
console.log("popped:"+poped);
console.log(cityArr);

poped=cityArr.shift();  // removing from front
console.log("popped:"+poped);
console.log(cityArr);


let arr4=new Array();
console.log(arr4.length);  // later we can push the element

let arr5=new Array(3); // initial length
console.log(arr5.length);
for(let i=0;i<arr5.length;i++){
    arr5[i]=56;  // custom user input
}
arr5.push(45);
console.log(arr5);


let arr6=new Array(4,5); // values
console.log(arr6.length);
console.log(arr6);

let arr7=new Array('hi'); // value
console.log(arr7);

let joineds=cityArr.join();  // by default :,
console.log(joineds);
joineds=cityArr.join(" ");  // by default :,
console.log(joineds);
joineds=cityArr.join("AA");  // by default :,
console.log(joineds);

let teamArray=['CSK', 'MI'];
console.log(teamArray.join(" v/s " ));
//splice
cityArr=['mumbai','pune','jaipur','satara','sangli','solapur'];
cityArr.splice(1,2);
console.log(cityArr);
cityArr.splice(1,2,'aaa','bbb');
console.log(cityArr);