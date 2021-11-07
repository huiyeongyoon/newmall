//https://learnjs.vlpt.us/useful/06-destructuring.html

const human = {name: 'huiyeong', age: 10}

const {name, age} = human;

console.log(name);
console.log(age);

const person = {name: 'huiyoeng'}

function addAge({name, age = 25}) {
  console.log(name);
  console.log(age);
}
addAge(person)
