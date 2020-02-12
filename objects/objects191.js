// let userInfo = {
//     username: 'meganfontenot517',
//     age: 22,
//     DOB: 'May.17.1997'
// }

// console.log(`My username is ${userInfo.username} and my birthday is ${userInfo.DOB}`)
// console.log(`My age in 2020 will be ${userInfo.age + 1 }!`)


let tempConverter = function(fahrenheit) {
    return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * 5 / 9,
    kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let temps = tempConverter(32)
console.log(temps)



