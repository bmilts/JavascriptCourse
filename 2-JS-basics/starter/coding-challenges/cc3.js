var [bill1, bill2, bill3] = [124, 48, 268]
var bills = [bill1, bill2, bill3]
var tips = []
var tipsPlusBills = []

function calculateTip(bill) {
    
    var percentage

    if(bill < 50) {
        // 20%
        percentage = (20/100)
    } else if (bill >= 50 && bill <= 200){
        // 15%
        percentage = (15/100)
    } else {
        // 10%
        percentage = (10/100)
    } 

    return bill * percentage
}

function addTipsToBills(array1, array2){

    var total = []

    for(var i = 0; i < array1.length; i++){
        total.push(array1[i] + array2[i]);
    }

    return total
}

tips.push(calculateTip(bill1))
tips.push(calculateTip(bill2))
tips.push(calculateTip(bill3))

console.log(tips)

tipsPlusBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + bills[2]]







