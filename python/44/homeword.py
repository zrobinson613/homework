import random
a = 'Zac Robinson'
b = "Abraham Abrahamson"
c = "Bobby Barowski"
d = 'Calvin Citizen'
e = 'Darren Do-little'
aa = '160 Franklin Pl'
bb = "1008 Central Ave"

print('*****')
list = [a, b, c, d, e]

print(
    f'Hi, my nmae is {a}.\nI live at {aa}. My friends are: {b}, {c}, {d}, {e}.')


print(a[::3])

print((list[-2])[1:-1])


for i in range(1, 11):
    print('Table for ' + str(i) + ': ', end='')
    for j in range(1, 13):
        print(str(i*j) + ' ', end='')
    print()


num = random.randint(1, 100)

guess = 0

while num != guess:
    try:
        guess = int(input('Guess a number between 1-100 '))
    except ValueError as e:
        print('Please enter a valid number!')
        continue
    if (num > guess):
        print('You guessed too low')
    if (num < guess):
        print('You guessed too high')

print('Yay you won!')
