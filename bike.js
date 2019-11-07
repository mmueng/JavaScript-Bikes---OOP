"use strict";
class Bike {
    constructor(price, max_speed) {
        this.displayInfo = () => {
            console.log("Price: ", this.price, " - Maximum speed: ", this.max_speed, " - Total miles: ", this.miles);
        };
        this.ride = () => {
            this.miles += 10;
            console.log("Riding ", this.miles);
        };
        this.reverse = () => {
            this.miles += 5;
            console.log("Reversing ", this.miles);
        };
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }
}
let bike1 = new Bike(200, "25mph");
let bike2 = new Bike(250, "30mph");
let bike3 = new Bike(180, "20mph");
bike1.ride();
bike1.ride();
bike1.ride();
bike1.reverse();
bike1.displayInfo();
bike2.ride();
bike2.ride();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();
bike3.reverse();
bike3.reverse();
bike3.reverse();
bike3.displayInfo();
