var markHeight = 1.85928
var markWeight = 83

var johnHeight = 1.75693
var johnWeight = 93

var markBmi = markWeight / (markHeight * markHeight)
var johnBmi = johnWeight / (johnHeight * johnHeight)
console.log(markBmi, johnBmi)

var highestBmi = markBmi > johnBmi

console.log("Is Mark's BMI higher than Johns? " + highestBmi)