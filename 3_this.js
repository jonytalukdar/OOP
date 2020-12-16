// var obj = {
//   name: 'Twinkle cats',
//   print: function () {
//     console.log(this);
//   },
// };
// obj.print();

// function functionName() {
//   console.log(this);
//   function inner() {
//     console.log(this);
//   }
//   new inner();
// }
// functionName();

// var person = {
//   name: 'Joney Talukdar',

//   print: function () {
//     console.log('hello', this.name);
//   },
// };

// var myName = person.name;
// console.log(myName);

// var printName = person.print.bind(person);
// printName();

// function add(num) {
//   //   console.log(this);
//   return this.value + num;
// }

// var obj = {
//   value: 10,
// };

// var obj1 = {
//   value: 34,
// };

// var binded = add.bind(obj1);
// var result = binded(12);
// console.log(result);

var person = {
  name: 'abul',

  print: function () {
    // console.log(this.name);
    // var name = this.name;
    setTimeout(
      function () {
        console.log(this);
        console.log('Hello ', this.name);
      }.bind(this),
      2000
    );
  },
};

person.print();
