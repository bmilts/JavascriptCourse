var johnTeam = [89, 120, 103]
var mikeTeam = [116, 94, 123]

const johnSum = johnTeam.reduce((a,b) => a+b,0) / 3
console.log(johnSum)

const mikeSum = mikeTeam.reduce((a,b) => a+b,0) / 3
console.log(mikeSum)

if(johnSum > mikeSum){
    console.log("John's team wins! with a average score of: " + johnSum)
} else {
    console.log("Mike's team wins! with a average score of: " + mikeSum)
}