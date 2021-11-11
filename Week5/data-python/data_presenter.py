CupcakeInventory = open('CupcakeInventory.csv')

# for order in CupcakeInventory:
#     print(order)


# for row in CupcakeInventory:
#     column = row.split(',')
#     print(column[2])


# Loop through all the data and print out the total for each invoice (Note: this data is not provided by the csv, you will need to calculate it. Also, keep in mind the data from the csv comes back as a string, you will need to convert it to a float. Research how to do this.).



# for row in CupcakeInventory:
#     column = row.split(',')
#     total = int(column[3]) * float(column[4])
#     total = round(total, 2)
#     print(total)

total = 0

for row in CupcakeInventory:
    column = row.split(',')
    total = total + (int(column[3]) * float(column[4]))
print(total)

CupcakeInventory.close()