let names =['Hari','Pari','Krishna','Sai','Subodh','Suman','santosh','Kishori'];

let result = []

result = names.filter((val) => {
    return val.endsWith('ri')
})
console.log('result with "ri"', result)


result = []

result = names.filter((val) => {
    return val.endsWith('i')
})
console.log('result with "i"', result)

result = []

result = names.filter((val) => {
    return val.toLowerCase().startsWith('s')
})
console.log('result start with "s or S"', result)

result = []

result = names.filter((val) => {
    return val.toLowerCase().startsWith('su')
})
console.log('result start with "su or SU"', result)

result = []
let snames= ['Rupa','    rupa', 'rupa   ','RUPA','RUPALI' ];

result = snames.filter((val) => {
    return val.trim().toLowerCase().includes('rupa')
})

console.log('result with string contains "rupa"', result)

result = []

// Implement remaining methods from  string api which are not covered in session
let sliceNames =['Hari','Pari','Krishna','Sai','Subodh','Suman','santosh','Kishori', 'Sai'];

console.log('length', sliceNames.length)
console.log('charAt return character of specified index', 'siddhesh'.charAt(5))
console.log('indexOf gives index value of element to be found out', sliceNames.indexOf('Krishna'))
console.log('indexOf gives index value of element to be found out', sliceNames.indexOf('Krishnaa'))
console.log('indexOf gives index value of element to be found out', sliceNames.lastIndexOf('Sai'))
let text1 = "Hello";
let text2 = "world!";
let text3 = text1.concat(" ", text2);
console.log('concat', text3)
 text1 = "Hello world!";
 text2 = text1.substring(1, 4);
 console.log('substring', text2)


names.forEach((val)=>{
    if(val.includes('ri')){
        result.push(val)
    }
})
console.log('includes method', result)
console.log('Search method '+'India is my country.'.search('my'))
console.log('Split method'+'India is my country.'.split(' '))
// The padStart() method in JavaScript is used to pad a string with another string
console.log('padStart example '+'abc'.padStart(10,"ABC"))
console.log('padEnd example '+'abc'.padEnd(10,"ABC"))
console.log('Unicode of "s" is '+'javascript'.charCodeAt(4))
console.log('The rain in SPAIN stays mainly in the plain'.match(/ain/g))
console.log('replace "HP" with "Dell", '+'HP laptops'.replace('HP', "Dell"))
// array.slice( begin [,end] );

console.log('Slice from Pari to Subodh', sliceNames.slice(1, 5))

