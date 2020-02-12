let name = 'Megan Fontenot'

//length property
console.log(name.length)

//Convert to Uppercase Method
console.log(name.toUpperCase())

//Conver to lowerCase Method
console.log(name.toLowerCase())

//Includes Method 
let password = 'Superhawk87'
console.log(password.includes('ghj'))

//Trim Method --> Removes the whitespace beginning and ending of a sting

let example = '   so much whitespace here  '
console.log(example.trim())


//isValidPassword
// length > 8 && doesn't contain the word 'password'

// let isValidPassword = function (password) {
//     if (password.length > 8 && !password.includes('password')) {
//         return true
//     } else {
//         return false
//     }
// }

let isValidPassword = function (password) { 
    return (password.length > 8 && !password.includes('password'))

}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('Superhawk87'))
console.log(isValidPassword('Superhawk87isMypassword'))