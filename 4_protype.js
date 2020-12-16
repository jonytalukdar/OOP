// function person(name, age) {
//   this.name = name;
//   this.age = age;

//   this.hello = function () {
//     console.log('Hello', this.name);
//   };
// }

function person(name, age) {
  this.name = name;
  this.age = age;

  //   this.hello = function () {
  //     console.log('Hello ', this.name);
  //   };
}

// person.prototype.hello = function () {
//   console.log('Hello ', this.name);
// };

// person.prototype.print = function () {
//   console.log(this.name, this.age);
// };

person.prototype = {
  hello: function () {
    console.log('Hello', this.name);
  },
  print: function () {
    console.log(this.name, this.age);
  },
  email: '@joneytalukdar12@gmail.com',
};

var p1 = new person('Joney Talukdar', 21);
var p2 = new person('Jerry Talukdar', 20);

console.log(p1);
console.log(p2);

console.log(p1.hello());
console.log(p2.hello());
console.log(p1.print());
console.log(p2.print());
