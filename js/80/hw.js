(function () {
    'use strict';

    function Student(firstName, lastName, age, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.age = age;

    }

    let me = new Student('zac', 'rob', 24, 100);

    let studentArray =
        [
            new Student('alex', 'apple', 10, 10),
            new Student('ben', 'burrow', 20, 20),
            new Student('calvin', 'clein', 30, 30),
            new Student('dovi', 'dadon', 40, 40),
            new Student('edward', 'ediot', 50, 50)
        ];

    function printStudents(...entries) { // didnt add choice option
        for (let i = 0; i < entries.length; i++) {
            console.log(`My name is ${entries[i].firstName} ${entries[i].lastName}. I am ${entries[i].age} years old with a grade of ${entries[i].grade}.`);
            // let myKeeys = Object.keys(entries[i]);
            // myKeeys.forEach(myKeey => {
            /*console.log(`My ${myKeey} is ${entries[i][myKeey]}`);*/
            // });

        }
    }

    printStudents(studentArray[2], studentArray[3]);
    console.log('now as array');
    printStudents(...studentArray);

    function copyStudent(student) {
        let { firstName, lastName, ...rest } = student;

        const copy = new Student(lastName, firstName, rest.age, rest.grade); //not sure if this is what you wanted?
        return copy;

    }

    console.log(copyStudent(studentArray[0]));

}());