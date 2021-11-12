(function () {
    'use strict';



    class Vehicle {

        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now going at speed ${speed}`);
        }


        print() {
            console.log(`My color is ${this.color} and my speed is ${this.speed}`);
        }

    }
    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now flying at speed ${speed}`);
        }

    }

    const v = new Vehicle("orange");
    v.go("20 mph");
    v.print();

    const p = new Plane("white");
    p.go("500");
    p.print();

})();