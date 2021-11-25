(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    const THING_SIZE = 64;

    function resizeCanvas() {
        canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % THING_SIZE);
        canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % THING_SIZE);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const crashSound = document.getElementById('crash');
    const crunchSound = document.getElementById('crunch');

    let gameOver = false;
    let score = 0;
    let speed = 550;

    class Snake {
        constructor() {
            this.position = [{ x: 0, y: 0 }];
            // this.y = [0];
            this.direction = 'ArrowRight';

            document.addEventListener('keydown', event => {       //why is this in constructor?
                switch (event.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                    case 'ArrowLeft':
                    case 'ArrowRight':
                        this.direction = event.key;
                }
            });

            this.draw();
        }

        draw() {
            this.position.forEach(position => {
                context.drawImage(snakeHead, position.x, position.y, THING_SIZE, THING_SIZE);
            });

            console.log(this.position);

        }

        move()
        /*{
            this.position.forEach(position => {
                let x = position.x;
                let y = position.y;

                switch (this.direction) {
                    case 'ArrowRight':
                        x += THING_SIZE;
                        break;
                    case 'ArrowLeft':
                        x -= THING_SIZE;
                        break;
                    case 'ArrowUp':
                        y -= THING_SIZE;
                        break;
                    case 'ArrowDown':
                        y += THING_SIZE;
                        break;
                }

                if (x < 0 || x > canvas.width - THING_SIZE || y < 0 || y > canvas.height - THING_SIZE) {
                    gameOver = true;
                    return;
                    
                } else {
                    position.x = x;
                    position.y = y;
                }

                if (position.x === apple.x && position.y === apple.y) {
                    score++;
                    speed = speed * 0.9;
                    crunchSound.currentTime = 0;
                    crunchSound.play();
                    apple.move();
                }
            });
            this.draw();
        } */ {
            for (let i = 0; i < this.position.length; i++) {

                this.position.push({ x: this.position[i].x, y: this.position[i].y });
                this.position.pop();



                let x = this.position[i].x;
                let y = this.position[i].y;

                switch (this.direction) {
                    case 'ArrowRight':
                        x += THING_SIZE;
                        break;
                    case 'ArrowLeft':
                        x -= THING_SIZE;
                        break;
                    case 'ArrowUp':
                        y -= THING_SIZE;
                        break;
                    case 'ArrowDown':
                        y += THING_SIZE;
                        break;
                }

                if (x < 0 || x > canvas.width - THING_SIZE || y < 0 || y > canvas.height - THING_SIZE) {
                    gameOver = true;
                    break;
                    //    return;

                } else {
                    this.position[i].x = x;
                    this.position[i].y = y;
                }



            }
            if (this.position[0].x === apple.x && this.position[0].y === apple.y) {
                score++;
                speed = speed * 0.9;
                crunchSound.currentTime = 0;
                crunchSound.play();
                apple.move();
                console.log(this.position);


                this.position.push({ x: this.position[0].x, y: this.position[0].y });
                // this.position.pop();

            }
            this.draw();
            // console.log("we reached here");
        }

        extendSnake() {
            for (let i = 0; i < this.position.length; i++) {
                let temp = this.position[i];

            }
        }

    }

    class Apple {
        constructor() {
            this.move();
        }

        draw() {
            context.drawImage(appleImg, this.x, this.y, THING_SIZE, THING_SIZE);
        }

        move() {
            this.x = this.getRandomNumber(0, canvas.width - 1);//THING_SIZE);
            this.y = this.getRandomNumber(0, canvas.height - 1);//THING_SIZE);
            this.draw();
        }

        getRandomNumber(min, max) {
            let r = Math.floor(Math.random() * (max - min + 1)) + min;
            r = r - r % THING_SIZE;
            return r;
        }
    }

    let snake;
    let apple;

    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.font = 'bold 30px Arial';
        context.fillText(`Score: ${score}`, canvas.width - 160, 40);

        snake.move();
        apple.draw();

        if (!gameOver) {
            setTimeout(gameLoop, speed);
        } else {
            context.font = 'bold 30px Arial';
            context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
            crashSound.currentTime = 0; // in case it was playing
            crashSound.play();
        }
    }

    const snakeHead = new Image();
    snakeHead.src = 'images/snakehead.png';
    snakeHead.onload = () => {
        snake = new Snake();
        setTimeout(gameLoop, speed);
    };

    const appleImg = new Image();
    appleImg.src = 'images/redapple.png';
    appleImg.onload = () => {
        apple = new Apple();
    };
}());


  //00xxxxxxxxxx00
  //000xxxxxxxxxx0
