const notes = ['note1', 'note2', 'note3']

// console.log(notes.pop()) // removes the last item of an array
// console.log(notes.push('test')) // adds an item to the end of an array
// console.log(notes.shift()) //removes the first item of an array
// console.log(notes.unshift('my new first note')) // adds an item to the top

// console.log(notes.splice(1, 1, 'This is the new second item')) // starts at the first item, removes one item, replace that item with new item
// OR
// console.log(notes[2] = 'This is another way to reassign item two')
//console.log(notes)

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(items)
// })

// looping

// intializer; conditon; incremention 
for (let count = 0; count <= 10; count++) {
    console.log(count)
}

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}



//// test commits