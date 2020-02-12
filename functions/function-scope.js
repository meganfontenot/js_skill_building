let converter = function (ferenheit) {
    let celsius = (ferenheit - 32) * 5 / 9
    return celsius
}

let value = converter(68)

console.log(value)