// Global Scope - Defined outside of all code blocks
// Local Scope - Defined in a code block

//Global (varOne)
    // Local (varTwo)
        // Local (varFour)
    // Local (varThree)

    
let varOne = 'VarOne'

if (true) {
    console.log('VarOne')
    let varTwo = 'VarTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'VarFour'
        console.log(varFour)
    }
}

if (true) {
    let varThree = 'VarThree'
    console.log(varThree)
}

