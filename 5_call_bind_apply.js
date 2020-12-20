// function printMe() {
//   console.log('Hello ', this.name);
//   console.log('My age is ', this.age);
//   console.log('My email is ', this.email);
// }
// // printMe();

// var obj = {
//   name: 'Joney',
//   age: 21,
// };

// var obj1 = {
//   name: 'jerry',
//   email: '@jerrygmail.com',
// };

// var binded = printMe.bind(obj);
// binded();

// printMe.call(obj);
// printMe.call(obj1);

function add(a, b) {
  return (a + b) * this.c;
}

var obj = {
  c: 2,
};
var obj2 = {
  c: 3,
};

// call

var result = add.call(obj, 12, 12);
console.log(result);

//apply

var result2 = add.apply(obj2, [12, 12]);
console.log(result2);

// bind

var binded = add.bind(obj);
console.log(binded(12, 12));
