function Car(model, make){
    this.model =model;
    this.make = make;
    this.year =new Date().getFullYear();
}

let myCar =new Car("corolla", "passo")

// prototype 

Car.prototype.start = function(){
    console.log (this.make, "The car is starting")
}


// inheritance

function electricalCar(make, model, speed){
    Car.call(this, make, model )
    this.speed = speed
}

let myElectricalCar = new electricalCar("Tesla", "model S", 300)
console.log(myElectricalCar)