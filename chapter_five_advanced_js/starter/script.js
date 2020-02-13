// Creating objects using function constructor
// * 

// Create object literal
var john = {
    name: "John",
    birthYear: 1986,
    job: "teacher"
}

// Function constructors capital "P"
function Person(name, birthYear, job){
    this.name = name
    this.birthYear = birthYear
    this.job = job
}

// Prototype a function so all instances can access it
Person.prototype.calculateAge = function(){
    console.log(2019 - this.birthYear)
}

Person.prototype.lastName = "Smith"

// Use blueprint to create john object or "Instantiate"
// "new" creates brand new "empty" object

var john = new Person("John", 1986, "teacher")
var jane = new Person("Jane", 1989, "student")
var steve = new Person("Steve", 2008, "potter")

john.calculateAge()
jane.calculateAge()
steve.calculateAge()

console.log(steve.lastName)

