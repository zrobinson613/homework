def print_months():
    months = ['Jan', 'Feb', 'March', 'April', 'May',
              'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for m, d in zip(months, days):
        print(m, d)

# print_months()


def print_months_tuple():
    months = ('Jan', 'Feb', 'March', 'April', 'May', 'June',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
    days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    for m, d in zip(months, days):
        print(m, '=>', d)


print_months_tuple()

month_dict = {
    'jan': '31',
    'feb': 28,
    'mar': 31,
    'apr': 30,
    'may': 31,
    'jun': 30,
    'jul': 31,
    'aug': 31,
    'sept': 30,
    'oct': 31,
    'nov': 30,
    'dec': 31
}

# for k in month_dict:
#     print(k)  #didn't work...


def get_days(mon):
    month_dict2 = {
        'jan': '31',
        'feb': 28,
        'mar': 31,
        'apr': 30,
        'may': 31,
        'jun': 30,
        'jul': 31,
        'aug': 31,
        'sept': 30,
        'oct': 31,
        'nov': 30,
        'dec': 31}
    print(month_dict2[mon])


get_days('feb')
