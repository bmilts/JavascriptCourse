var mark = {
    name: "Mark Reily",
    mass: 100,
    height: 176,
    calculateBmi: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

var john = {
    name: "John Saint",
    mass: 82,
    height: 187,
    calculateBmi: function(){
        this.bmi = this.mass / (this.height * this.height) 
        return this.bmi    
    }
}



console.log(john, mark)

if(mark.calculateBmi() > john.calculateBmi()) {
    console.log(mark.name + " has a higher BMI of: " + mark.bmi)
} else if (mark.bmi < john.bmi){
    console.log(mark.name + " has a higher BMI of: " + mark.bmi)
} else {
    console.log("The BMI's are the same!")
}



