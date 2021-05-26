# class Employee1:
#     pass

# joe = Employee1()
# print(joe)

# joe.first = "Joe"
# joe.last = "Biden" 

# print(joe.first)
class Employee:
    raise_percent = 1.05

    def __init__(selff, first,last, dept = None, salary = 35000):
        selff.first = first
        selff.last = last
        selff.dept = dept
        selff.salary = salary

    def print(self):
        print(f'First: {self.first} Last: {self.last}')

    def raise_salary(self):
        self.salary *= self.raise_percent

    @classmethod
    def set_raise_percent(cls, raise_percent):
        cls.raise_percent = raise_percent

    @staticmethod
    def get_dept():
        return ["a",'b','c']

kamala = Employee('Kamala', 'Harris')
# print(f'{kamala.first} {kamala.last}')
kamala.print()

print(kamala.salary)

# kamala.raise_percent = 1.3
Employee.set_raise_percent(1.2)
kamala.raise_salary()
print(kamala.salary)


class Developer(Employee):
    def __init__(self, first, last, department, salary, language):
        super().__init__(first, last, department, salary)
        self._language = language

    

bill = Developer('Bill','Gates','Engineering','100000','Basic')
bill.print()