'use strict'

const potus = {
    name: "Joe Biden",
    age: 100,
    print: function (){
        console.log(this.name, this.age);
    }
}; // can add to it later, eg spouse , can also change eg age is 200

function printPerson(person){
    console.log(person.name, person.age);

}

function createPerson(name, age) {
    return {
    name: name,
    age: age,
    print: function () {
        console.log(this.name, this.age);
    }
};
}

const psaki = createPerson('Jan Psaki', 50);
