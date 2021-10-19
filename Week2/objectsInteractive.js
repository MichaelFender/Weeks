let person = {
    firstName: "Chananler",
    lastName: "Bong",
    age: 34
}

// console.log(person.firstName)

// console.log(person['firstName'])

let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'dr. pepper'
}

const {dessert} = meal

//console.log(dessert) //will get "churros"

const {appetizer, entree} = meal //will get "churros" and "el pastor burrito"

// console.log (appetizer)
// console.log (entree)


//rename key
const {drink: bestSodaEver} = meal

// console.log(bestSodaEver)

// const myAppetizer = meal.appetizer
// const myEntree = meal.entree
// const myDessert = meal.dessert
// const myDrink = meal.drink
//same as ^^
const {appetizer: myAppetizer, entree: MyEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(bestSodaEver)
// console.log(myDrink)

// for (let key in person){
//     console.log(key)//shows keys only

// }

// for (key in person){
//     console.log(person[key])//shows what key is showing
// }

person.job = "Statistical Analysis and Data Reconfiguration"

person['pets'] = ['Chicken', 'Duck']

// for (let key in person){
//     console.log(key)//shows keys only


let teams = {
    teamOne: ['ryan', 'alex'],
    teamTwo: ['henry', 'cole', 'charlie'],
    teamThree: ['porter', 'blake'],
    teamFour: ['mike', 'tim', 'monique'],
    teamFive: ['snania', 'deepta']
}

delete teams.teamTwo //takes out teamTwo

// for (let team in teams){ //needs this forLoop
//     console.log(team)

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }
    greeting(){
        console.log(`Hi, my name is ${this.name} and I am a(n) ${this.age} year old ${this.breed}`)
    }
}

let lassie = new Dog('Lassie', 'Collie', 18)
//console.log(lassie.name)

let duke = new Dog('Duke', 'Labrador', 9)
//console.log(duke.breed)

lassie.greeting()
duke.greeting()

for (key in lassie){
    console.log(duke[key])//shows all of Duke's information
}