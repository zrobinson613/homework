(function () {
    'use strict';
    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`Now going at speed ${speed}`);
    };

    Vehicle.prototype.print = function () {
        console.log(`My color is ${this.color} and my speed is ${this.speed}`);
    };

    const jaguar = new Vehicle("red");

    jaguar.print();
    jaguar.go("50 mph");
    jaguar.print();


    function Plane(color) {
        Vehicle.call(this, color);
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.constructor = Plane;

    const boeing = new Plane("white");
    boeing.go("40 mph");
    boeing.print();

    Plane.prototype.go = function (speed) {
        console.log(`Now flying at speed ${speed}`);
    };

    boeing.go("40 mph");
    console.log(jaguar);
    console.log(boeing);

}());