let lowerString = "lafayette"
lowerString.toUpperCase()
console.log(lowerString)

//
lowerString = lowerString.toUpperCase()
console.log(lowerString)

//Reassign a variable
let upperString = lowerString.toUpperCase()
console.log(upperString)

//Trimming Whitespace
//.trim() takes any whitespace off the beginning and end of a string
const whitespace = '   code    '
const newWhitespace = whitespace.trim()
console.log(newWhitespace)

//Replacing Characters
//.replace() will replace the first instance of a string with a new one
//.replaceAll() will replace every instance of a string witth a new one

const shortStory = ' bla bla'

const noFirstE = shortStory.replace()

let groceryList = "eggs, cheese, bacon, milk"
let example = groceryList.replace(',', '')
console.log(example)

//^^ WHAT THE HECK??

// Splitting and Joining Strings
const arrayOfWords = ['North', 'South', 'East', 'West']


//Splitting and Joining
const statement = 'It is your birthday'

const splitStr = statement.split(' ')
console.log(splitStr)

const splitOnLetter = statement.split('t')
console.log(splitOnLetter)