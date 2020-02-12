// Function - input (argument), code, output (return value)

// let greetUser = function () {
//     console.log('Welcome bitch')
// }

// greetUser()

// let square = function (num) {
//     let result = num * num
//     return result
// }

// let answer = square(4)
// console.log(answer) 

let converter = function (ferenheit) {
    let celsius = (ferenheit - 32) * 5 / 9
    return celsius
}

let value = converter(68)

console.log(value)