// Create an array w/ five todo's
// You have X todo's
// Print the first & the second to last item: "Todo: example todo item."

const todo = ['Pay remaining bills', 'Complete Udemy section', 
    'Make workout schedule for the week', 'Swap laundry']

// let secToLast = (`Your 2nd to last item is ${todo[todo.length -2]} in your todo list`)
// let list = console.log(`You have ${todo.length} items in your todo list`)
// console.log(secToLast)




// Delete the 3rd item
// console.log(todo.splice(2, 1))
// Add a new item onto the end
// console.log(todo.push('adding new item to the end'))
// Remove the first item from the list
// console.log(todo.shift())

//console.log (todo)

// todo.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

for (let count = 0; count < todo.length; count++) {
    console.log(`${count + 1}. ${todo[count]}`)
}
