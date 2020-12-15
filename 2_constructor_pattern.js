function Persons(name, email) {
  this.name = name;
  this.email = email;
  this.print = function () {
    console.log(this.name);
  };
}

var p1 = new Persons('joney', '@joneymiah12gmail.com');
var p2 = new Persons('jerry ', '@gmailjerry');
var p3 = new Persons('jubayr', '@jubayergmail.com');

// console.log(p1.name);
// console.log(p1.email);
// console.log(p1);
// console.log(p2);

// var people = [p1, p2, p3];

// people.forEach(function (person) {
//   console.log('email : ' + person.email);
//   person.print();
// });

// for (var props in p1) {
//   console.log('properties : ' + props);
// }

function Book(name, price, author) {
  this.name = name;
  this.price = price;
  this.author = author;
}

var book = new Book('opp', 321, 'joney');
console.log(book);
