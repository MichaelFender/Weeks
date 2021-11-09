


// You can test your function with these arrays, just uncomment to use

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
  meal: 'vegetarian' },
{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
  meal: 'standard' },
{ firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
  meal: 'vegan' },
{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
  meal: 'vegetarian' },
];


var list2 = [
{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
  meal: 'vegetarian' },
{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
  meal: 'standard' },
{ firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
  meal: 'vegan' },
{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
  meal: 'standard' },
{ firstName: 'Noel', lastName: 'O.', country: 'Albania', continent: 'Europe', age: 23, language: 'Python', 
  meal: 'gluten-intolerant' },
{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript', 
  meal: 'standard' },
{ firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby', 
  meal: 'gluten-intolerant' },
{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  meal: 'diabetic' },
{ firstName: 'Nareh', lastName: 'Q.', country: 'Armenia', continent: 'Europe', age: 30, language: 'Clojure', 
  meal: 'standard' },
{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript', 
  meal: 'standard' },
];




function mealCount(list) {
  let vegetarianCount = 0
  let standardCount = 0
  let veganCount = 0
  
for (i=0; i < list.length; i++){
    
  if (list[i].meal === 'vegan'){
      veganCount++
  }
  if (list[i].meal === 'vegetarian'){
    vegetarianCount++
  }
  if (list[i].meal === 'standard'){
      standardCount++
  }
}
// return foodCount
console.log(`vegetarian: ${vegetarianCount}, standard: ${standardCount}, vegan: ${veganCount}`);
}
mealCount(list2)

////////
// let obj = arr.find(o => o.name === 'string 1');
// console.log(obj);
////////
// function mealCount (list){
// for(var i=0; i < list1.length; i++) {
// 	if(list1[i].meal == 'vegetarian') {
// 		list1 = i;
//         break;
        
//     }
    
// }
// }

// var answer2 = list2.find(function(post, index) {
// 	if(post.meal == 'vegan')
// 		return true;
// });
// //console.log(mealCount.list1);
// console.log(answer2.meal);

// mealCount(list1)

// var searchString = "standard";

// var mealCount = list2.filter(element => {
//     for (var property in element) {
//         if (element.hasOwnProperty(property)) {
//             if(element[property] == searchString) {
//                 return true;
//             }
//         }
//     }
// });

// console.log(mealCount);





