// let add = function ( a, b, c ) {
//     return a + b + c
// }

// let result = add( 10, 20, 3 )
// console.log(result)

// //Default Arguments
// let getScoreText = function (name = 'Anonymous', score = 0 ) {
//     //return 'Name: ' + name + ' - Score: ' + score
//     return `Name: ${name} - Score: ${score} `
// }

// let scoreText = getScoreText( 'Megan', 80)
// console.log(scoreText)

let calculateTip = function( total, tipPercent = .2 ) {
    let percentAmount =  tipPercent * total
    return `The tip for a ${total} dollar bill will require a ${percentAmount} dollar tip amount`
}
let tip = calculateTip(100 , .5)

console.log(tip)

