import math
name = "Joe biden"


autoConcatenate = 'one' 'two'
'three ' 'four'
print(autoConcatenate)

print('This is line 1''thus is 2''this is three')
print(name)
print(name.upper())
print(name.title())

print(name.replace('Joe', 'Kamal'))

first = 'Joe'
last = 'Biden'
print(f'First: {first}')
print('First: {} Last {}'.format(first, last))

students = ['Joe', 'Kamala', "Donald", 'Jan', "Malky", ]
print(students)
print(len(students))
print(len(name))
print(students[-1])
print(name[5])

print(name[2:])
print(name[2:8])
print(name[::2])
print(name[0:])
print(name[::-1])

print(students[2:5:2])
# print(students.reverse())
print(students)
students.append('Zac')
print(students)

print('Hello' * 2)

people = ['Joe', 'b']
people[1] = 'Kamala'
people.append("who")
print(people)

# people.append(['sam','b'])

people.extend(['b', 'c'])
print(people)
print(2)

copy = people[:]
print(copy)
people.append('george')
print(people)

copy2 = people.copy()
print(copy2)
print(9)
some_more_people = ['Abe', 'Babe', 'Cow']
people.append(some_more_people)
print(people)
copy2 = people.copy()
people.append('new')
some_more_people.append('this is in copy')
print(copy2)

copy2.clear()
print(copy2)

people = ['Sam', None, None]
people[2] = 'sam'
print(people)

people = [None] * 100
print(people)

print(name.find('Joe'))

print(name.index('Joe'))

# print(people.index('Sam'))

try:
    print(people.index('Sam'))
except ValueError as e:
    print(f'oops no sam {e}')

x = 52
if x < 10:
    print('x is < 10')
elif x < 20:
    print('x is < 10')
else:
    print('x is > 20')

if 'J' in 'joe':
    print(1)
else:
    print(0)

x = 10 / 3
print(x)
x = 10 // 3
print(x)

print(abs(-100))


print(math.ceil(3.33))

#name = input('What is your name? ')
print(f'Hello {name}!')

age = 0

# while age == 0:
#     try:
#         age = int(input('What is your age? '))
#     except ValueError as e:
#         print('Please enter a valid age!')


print(f'You will be 100 in {100-age} years')

message = 'You can buy alcohol' if age > 21 else "You can't buy"
print(message)

name = 'Joe Biden'


for val in name:
    print(val)

for i in range(len(name)):
    print(name[i])

for i in range(10, 20, 2):
    print(i)

for person in people:
    if person == None:
        print('found sam')
        break
else:
    print('breakky')

people = ["joe", 'kamala', 'Jan']
scores = [25, 50, 75]

for x, y in zip(people, scores):
    print(x, y)

myTuple = (1, 2, 3, 4, 5)
for x in myTuple:
    print(x)

anotherTupe = 6, 7, 8
for x in anotherTupe:
    print(x)

empty_tuple = ()

tuple_of_one = 1,

numbers = (1, 2, 3)

a, b, c = numbers
print(a, b, c)
