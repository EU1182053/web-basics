let statesOfIndia = ['Maharshtra', 'Gujrat', 'Karnataka', 'Tamil Nadu', 'Odisa']
console.log('Iteration through forEach')
statesOfIndia.forEach(val=>console.log(val))
console.log('Iteration through for')

for (let i = 0; i < statesOfIndia.length; i++) {
    console.log(statesOfIndia[i])
    
}

console.log('Iteration through for/of')
for(val of statesOfIndia){
    console.log(val)
}
