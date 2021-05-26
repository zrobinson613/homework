class Vehicle():
    def __init__(self, color):
        self.color = color

    def go(self, speed):
        self.speed = speed
        print(f'Now going at speed {self.speed}')

    def print(self):
        print(f'My color is: {self.color}. My speed is: {self.speed}')


class Plane(Vehicle):
    def __init__(self, color):
        super().__init__(color)

    def go(self, speed):
        self.speed = speed
        print(f'Now flying at speed {self.speed}')


a = Vehicle('green')
a.go(100)
a.print()

b = Plane('white')
b.go(500)
b.print()

for i in range(1, 101):
    if i % 3 == 0:
        print('Fizz ', end='')
    if i % 5 == 0:
        print('Buzz ', end='')
    if i % 3 != 0 and i % 5 != 0:
        print(i, end='')
    print('')
