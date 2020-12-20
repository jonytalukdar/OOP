// function person() {
//   this.name = 'Joney talukdar';
// }

// function Teacher() {
//   person.call(this);
//   this.subject = 'Javascript';
// }

// var result = new Teacher();
// console.log(result);
// console.log(result.name);
// console.log(result.subject);

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log('Name', this.name);
};

// var result = new Person('Joney');
// console.log(result);

function student(name, id) {
  Person.call(this, name);
  this.id = id;
}

var result = new student('Jerry', 1);
console.log(result);
