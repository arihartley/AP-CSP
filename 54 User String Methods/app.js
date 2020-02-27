let s
let string = 'it is me, ari >:)      '

//CHECK LENGTH
console.log(string.length)

//CONVERSION
let num = 10
num = num.toString()
console.log(typeof num)

//SEARCHING
s = string.search('a')

s = string.startsWith('q')

s = string.includes('i')
console.log(s)

//MODIFYING
s = string.toLowerCase()

s = string.toUpperCase()

s = string.concat(', and I am a jovial friend!')

s = string.slice(3, 8)

s = string.trim()
console.log(s)

num = Number(num)
console.log(typeof num)