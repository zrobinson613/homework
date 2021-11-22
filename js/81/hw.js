(function () {
    'use strict';

    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }



    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        constructor(antSize) {
            this.antSize = antSize;

            this.x = canvas.width / 2;
            this.y = canvas.height / 2;
            // this.dx = Math.random() * 20 - 10;
            // this.dy = Math.random() * 20 - 10;
        }


        moveAnt(leftRight = true) {
            this.dx = Math.random() * 40 - 20;
            this.dy = Math.random() * 40 - 20;



            if (this.x + this.antSize + this.dx >= canvas.width || this.x + this.dx <= 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.antSize + this.dy >= canvas.height || this.y + this.dy <= 0) {
                this.dy = -this.dy;
            }

            if (leftRight) {
                this.x += this.dx;
            } else {
                this.y += this.dy;
            }
            context.fillRect(this.x, this.y, this.antSize, this.antSize);
            // console.log(this.x);
        }



    }

    const ants = [];


    ants.push(new Ant(20));


    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.moveAnt(Math.random() < 0.5));

    }, 20);

    document.getElementById('addButton').addEventListener('click', (e) => {
        // const rand = Math.random() < 0.5;
        // moveAnt(rand);
        e.preventDefault();

        ants.push(new Ant(20));
        console.log(ants);


    });

})();