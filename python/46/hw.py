import random
from typing import List


class Die:
    def __init__(self, sides):
        self.sides = sides

    def roll(self):
        return random.randint(1, self.sides)


# example = Die()

# print(example.roll())

example2 = Die(12)

print(example2.roll())


class SixSidedDie(Die):
    def __init__(self):
        self.sides = 6


example3 = SixSidedDie()

print(example3.sides)

# can a subclass take less arguments than its parent class??


def selection_sort(array):
    i = 0
    sorted_copy = array[:]
    while i < len(array) - 1:

        j = i + 1
        min_idx = i
        while j < len(array):
            if array[j] < array[min_idx]:
                min_idx = j


def sel_sort(array):
    i = 0
    min = array[0]
    while i < len(array) - 1:
