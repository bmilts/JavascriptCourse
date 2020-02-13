// Function expression
// 1. Always produce a value
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'
        case 'driver':
            return firstName + '  drives a taxi'
        case 'designer':
            return firstName + ' designs beautiful websites'
        default:
            return firstName + ' does all the things?'

    }   
}

console.log(whatDoYouDo("teacher", "John"))

