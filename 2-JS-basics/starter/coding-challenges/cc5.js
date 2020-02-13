var john = {
    name: "John Sterling",
    bills: [124, 48, 268,180, 42],
    calculateTip: function(){

        this.tips = []
        this.total = []

        for(var i = 0; i < this.bills.length; i++){
            var percentage

            if(this.bills[i] < 50){
                percentage = 20/100
            } else if (this.bills[i] >= 50 && this.bills[i] < 200){
                percentage = 15/100
            } else {
                percentage = 10/100
            }

            this.tips[i] = this.bills[i] * percentage
            this.total[i] = this.bills[i] + this.bills[i] * percentage
        }
    }
}

john.calculateTip()
console.log(john)

var mark = {
    name: "Mark Winston",
    bills: [77, 110, 375, 110, 45],
    calculateTip: function(){

        this.tips = []
        this.total = []

        for(var i = 0; i < this.bills.length; i++){
            var percentage

            if(this.bills[i] < 100){
                percentage = 20/100
            } else if (this.bills[i] >= 100 && this.bills[i] < 300){
                percentage = 10/100
            } else {
                percentage = 25/100
            }

            this.tips[i] = this.bills[i] * percentage
            this.total[i] = this.bills[i] + this.bills[i] * percentage
        }
    }
}

mark.calculateTip()

function calculateAverageTip(tips) {
    var sum = 0
    for(var i = 0; i < tips.length; i++) {
        sum += tips[i]
    }

    return sum / tips.length
}

if (calculateAverageTip(john.tips) > calculateAverageTip(mark.tips)) {
    console.log("The " + john.name.split(" ")[1] + " family paid the most on average in tips with: " + calculateAverageTip(john.tips))
} else {
    console.log("The " + mark.name.split(" ")[1] + " family paid the most on average in tips with: " + calculateAverageTip(mark.tips))
}
