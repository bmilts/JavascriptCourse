// Access object by particular name
// Key value pairs
// No particular order
// Arrays order matters

var brendan = {
    firstName: "Brendan", 
    lastName: "Milton",
    birthYear: 1984,
    family: ["Jane", "Bill", "Rae"],
    job: "Student",
    married: false,
    calcAge: function(){
        this.age = 2020 - this.birthYear
    }
}

// Acess using . notation
console.log(brendan)
console.log(brendan["birthYear"])

brendan.birthYear = 1983
console.log(brendan.birthYear)
brendan['birthYear'] = 1984
console.log(brendan.birthYear)