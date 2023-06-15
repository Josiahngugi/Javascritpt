class Car{
    constructor(model, make){
        this.model = model
        this.make = make
    }
    start(){
        console.log("the car is starting")
    }
}

let myCar = new Car("collora", "vitz")

 
// inheritance

class electricalCar extends Car{
    constructor(make, model, speed){
        super(make, model)
        this.speed =speed
    }
}
let myElectricalCar = new electricalCar("Tesla", "model s", 200)
myElectricalCar.start()