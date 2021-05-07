
x = int(input())
y = int(input())

if x > y:
    a = y
    b = x
if x <= y:
    a = x
    b = y

c = 0 

while a <= b:
    if a % 13 != 0:
        c = c + a
    a = a + 1

print(c)
