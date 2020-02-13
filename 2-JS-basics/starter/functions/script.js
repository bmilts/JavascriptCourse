function calculateAge(birthyear){
    return 2020 - birthyear
}

var bren = calculateAge(1984)

function calculateRetirement(year, firstname){

    var age = calculateAge(year)
    var retirement = 65 - age

    if(retirement > 0){
        return (firstname + " you have " + retirement + " years till retirement")
    } else {
        return (firstname + " is already retired. Enjoy!")
    }

}

console.log(calculateRetirement(1984, "Steven"))