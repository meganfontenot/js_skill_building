// Logical AND Operater - True only when both sides are True
// Logical OR Operater - True when atleast one side is True

// let temp = 45

// if (temp >= 55 && temp <= 85) {
//     console.log('Its dope outside.')
// } else if (temp <= 10 || temp >= 100) {
//     console.log('abort mission')
// } else {
//     console.log('Its aight')
// }

let isGuest1Vegan = false
let isGuest2Vegan = true

if (isGuest1Vegan && isGuest2Vegan) {
    console.log ('Here are our Vegan options.')
} else if (isGuest1Vegan || isGuest2Vegan) {
    console.log('Let me show you a little of both.')
} else {
    console.log('Here is our full menue')
}