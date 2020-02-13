var names = ['Seven', 'John', 'Jane']
var years = new Array(1969, 1929, 1948)

console.log(names)
console.log(names[0])
console.log(names.length)

// Mutate array data
names[1] = 'Ben'

console.log(names)
console.log(names[0])

names[names.length] = 'Mary'

var details = ["Bren", "Milton", 1984, "Student"]

details.push("Sydney")
console.log(details)
details.unshift("Mr")
console.log(details)
details.pop()
console.log(details)

console.log(details.indexOf(1984))
var isDesigner = details.indexOf('Designer') === -1 ? "Brendan is NOT a designer" : "Brendan IS a desinger"
console.log(isDesigner)
