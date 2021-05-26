class Stack:
    def __init__(self):
        self._values = []

    def push(self, val):
        self._values.append(val)

    def pop(self):
        return self._values.pop()

    def peek(self):
        if len(self._values) > 0:
            return self._values[-1]
        else:
            return None

stack = Stack()
for i in range(10):
    stack.push(i)

while stack.peek():
    print(stack.pop())