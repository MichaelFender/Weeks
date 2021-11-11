CupcakeInventory = open('CupcakeInventory.csv')

for order in CupcakeInventory:
    print(order)


for row in CupcakeInventory:
    column = row.split(',')
print(column[2])


for row in CupcakeInventory:
    column = row.split(',')
    total = int(column[3]) * float(column[4])
    total = round(total, 2)
print(total)


total = 0

for row in CupcakeInventory:
    column = row.split(',')
    total = total + (int(column[3]) * float(column[4]))
print(total)

CupcakeInventory.close()